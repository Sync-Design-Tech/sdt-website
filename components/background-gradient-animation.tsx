'use client';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

export interface ColorScheme {
  gradientBackgroundStart: string;
  gradientBackgroundEnd: string;
  firstColor: string;
  secondColor: string;
  thirdColor: string;
  fourthColor: string;
  fifthColor: string;
  pointerColor: string;
  size: string;
  blendingValue: string;
}

// Helper: parse "r,g,b" or "rgb(r,g,b)" into [r,g,b]
function parseRGB(str: string): number[] {
  const clean = str.replace(/[^\d,]/g, '').split(',');
  return clean.map((v) => parseInt(v, 10));
}

// Helper: lerp between 2 numbers
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// Helper: interpolate colors
function lerpColor(start: string, end: string, t: number) {
  const s = parseRGB(start);
  const e = parseRGB(end);
  const r = Math.round(lerp(s[0], e[0], t));
  const g = Math.round(lerp(s[1], e[1], t));
  const b = Math.round(lerp(s[2], e[2], t));
  return `${r}, ${g}, ${b}`;
}

export const BackgroundGradientAnimation = ({
  children,
  className,
  interactive = true,
  containerClassName,
  colorScheme,
  prevColorScheme,
}: {
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
  colorScheme: ColorScheme;
  prevColorScheme: ColorScheme;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mousePositionRef = useRef({ curX: 0, curY: 0, tgX: 0, tgY: 0 });
  const animationFrameRef = useRef<number>();

  // Smoothly interpolate scheme changes
  useEffect(() => {
    let start: number | null = null;
    const duration = 2000; // 2s transition

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = Math.min(1, elapsed / duration);

      // Interpolate each color
      const bgStart = `rgb(${lerpColor(prevColorScheme.gradientBackgroundStart, colorScheme.gradientBackgroundStart, t)})`;
      const bgEnd = `rgb(${lerpColor(prevColorScheme.gradientBackgroundEnd, colorScheme.gradientBackgroundEnd, t)})`;
      const first = lerpColor(prevColorScheme.firstColor, colorScheme.firstColor, t);
      const second = lerpColor(prevColorScheme.secondColor, colorScheme.secondColor, t);
      const third = lerpColor(prevColorScheme.thirdColor, colorScheme.thirdColor, t);
      const fourth = lerpColor(prevColorScheme.fourthColor, colorScheme.fourthColor, t);
      const fifth = lerpColor(prevColorScheme.fifthColor, colorScheme.fifthColor, t);
      const pointer = lerpColor(prevColorScheme.pointerColor, colorScheme.pointerColor, t);

      document.body.style.setProperty('--gradient-background-start', bgStart);
      document.body.style.setProperty('--gradient-background-end', bgEnd);
      document.body.style.setProperty('--first-color', first);
      document.body.style.setProperty('--second-color', second);
      document.body.style.setProperty('--third-color', third);
      document.body.style.setProperty('--fourth-color', fourth);
      document.body.style.setProperty('--fifth-color', fifth);
      document.body.style.setProperty('--pointer-color', pointer);
      document.body.style.setProperty('--size', colorScheme.size);
      document.body.style.setProperty('--blending-value', colorScheme.blendingValue);

      if (t < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [colorScheme, prevColorScheme]);

  useEffect(() => {
    function updateMousePosition() {
      if (!interactiveRef.current) return;
      const pos = mousePositionRef.current;

      // slow down (30 instead of 20 → smoother)
      pos.curX += (pos.tgX - pos.curX) / 30;
      pos.curY += (pos.tgY - pos.curY) / 30;

      interactiveRef.current.style.transform = `translate(${Math.round(pos.curX)}px, ${Math.round(pos.curY)}px)`;

      animationFrameRef.current = requestAnimationFrame(updateMousePosition);
    }

    if (interactive) {
      updateMousePosition();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [interactive]);

  useEffect(() => {
    if (!interactive) return;
    const handle = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mousePositionRef.current.tgX = event.clientX - rect.left;
      mousePositionRef.current.tgY = event.clientY - rect.top;
    };
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, [interactive]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative left-0 top-0 h-screen w-screen overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]',
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 16 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn('', className)}>{children}</div>
      <div
        className={cn(
          'gradients-container h-[150vh] w-[150vw] -translate-x-[25%] -translate-y-[25%] blur-lg',
          isSafari ? 'blur-xl' : '[filter:url(#blurMe)_blur(32px)]'
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_transparent_45%)_no-repeat]`,
            `left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:screen]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-90`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.7)_0,_transparent_45%)_no-repeat]`,
            `left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:screen]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-85`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.7)_0,_transparent_45%)_no-repeat]`,
            `left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:screen]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-85`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.6)_0,_transparent_45%)_no-repeat]`,
            `left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:screen]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-60`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.6)_0,_transparent_45%)_no-repeat]`,
            `left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:screen]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-80`
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            className={cn(
              `pointer-events-none absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.6)_0,_transparent_45%)_no-repeat]`,
              `-left-1/2 -top-1/2 h-[120%] w-[120%] [mix-blend-mode:screen]`,
              `opacity-60`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
