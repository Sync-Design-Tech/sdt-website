'use client';
import React, { useRef, useEffect, useState } from 'react';

import { AnimatePresence, LazyMotion, m, domAnimation } from 'framer-motion';
// import Image from 'next/image';
import { cn } from '@/lib/utils';
import Balancer from 'react-wrap-balancer';
import Link from 'next/link';
import { Button } from './button';
import { FlipWords } from './flip-words';
import { useCalEmbed } from '@/app/hooks/useCalEmbed';
import { CONSTANTS } from '@/constants/links';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

import { BackgroundGradientAnimation, ColorScheme } from './background-gradient-animation';
const BentoGridDemo = dynamic(() => import('./services/services').then((m) => m.BentoGridDemo), { ssr: false });
import { LampDemo } from './lamp/LampDemo';

// 🎨 Color scheme configurations

// 🌞 Light Theme Variants
const LIGHT_COLOR_SCHEMES: (ColorScheme & { textColor: string })[] = [
  {
    // Light version of scheme #1 (black/white)
    gradientBackgroundStart: 'rgb(255, 255, 255)',
    gradientBackgroundEnd: 'rgb(245, 245, 245)',
    firstColor: '30, 30, 30',
    secondColor: '60, 60, 65',
    thirdColor: '90, 90, 95',
    fourthColor: '120, 120, 125',
    fifthColor: '160, 160, 165',
    pointerColor: '255, 255, 255',
    size: '80%',
    blendingValue: 'soft-light',
    textColor: 'text-slate-800',
  },
  {
    // Light version of yellow scheme
    gradientBackgroundStart: 'rgb(255, 255, 255)',
    gradientBackgroundEnd: 'rgb(250, 250, 250)',
    firstColor: '249, 207, 9', // updated yellow
    secondColor: '255, 230, 80',
    thirdColor: '200, 160, 0',
    fourthColor: '200, 200, 200',
    fifthColor: '220, 220, 220',
    pointerColor: '249, 207, 9',
    size: '80%',
    blendingValue: 'soft-light',
    textColor: 'text-slate-800',
  },
  {
    // Light version of blue scheme
    gradientBackgroundStart: 'rgb(255, 255, 255)',
    gradientBackgroundEnd: 'rgb(240, 245, 255)',
    firstColor: '0, 73, 183', // updated main blue
    secondColor: '147, 197, 253',
    thirdColor: '29, 78, 216',
    fourthColor: '30, 64, 175',
    fifthColor: '96, 165, 250',
    pointerColor: '0, 73, 183',
    size: '80%',
    blendingValue: 'soft-light',
    textColor: 'text-slate-800',
  },
];

const DARK_COLOR_SCHEMES: (ColorScheme & { textColor: string })[] = [
  {
    // Dark version of black/white scheme
    gradientBackgroundStart: 'rgb(0, 0, 0)',
    gradientBackgroundEnd: 'rgb(20, 20, 25)',
    firstColor: '255, 255, 255',
    secondColor: '240, 240, 245',
    thirdColor: '250, 250, 255',
    fourthColor: '230, 230, 235',
    fifthColor: '245, 245, 250',
    pointerColor: '0, 0, 0',
    size: '80%',
    blendingValue: 'soft-light',
    textColor: 'text-slate-200',
  },
  {
    // Dark yellow theme (bg updated already)
    gradientBackgroundStart: 'rgb(50, 49, 49)',
    gradientBackgroundEnd: 'rgb(30, 30, 30)',
    firstColor: '249, 207, 9', // updated yellow
    secondColor: '255, 230, 80',
    thirdColor: '200, 160, 0',
    fourthColor: '100, 100, 100',
    fifthColor: '150, 150, 150',
    pointerColor: '249, 207, 9',
    size: '80%',
    blendingValue: 'soft-light',
    textColor: 'text-amber-500',
  },
  {
    // Dark blue theme
    gradientBackgroundStart: 'rgb(10, 25, 47)',
    gradientBackgroundEnd: 'rgb(0, 12, 24)',
    firstColor: '0, 73, 183', // updated main blue
    secondColor: '147, 197, 253',
    thirdColor: '29, 78, 216',
    fourthColor: '30, 64, 175',
    fifthColor: '96, 165, 250',
    pointerColor: '0, 73, 183',
    size: '80%',
    blendingValue: 'soft-light',
    textColor: 'text-blue-600',
  },
];

export function Hero() {
  const { theme } = useTheme();
  const COLOR_SCHEMES = theme === 'light' ? LIGHT_COLOR_SCHEMES : DARK_COLOR_SCHEMES;

  const [currentSchemeIndex, setCurrentSchemeIndex] = useState(0);
  const [prevSchemeIndex, setPrevSchemeIndex] = useState(0);

  const currentScheme = COLOR_SCHEMES[currentSchemeIndex];
  const prevScheme = COLOR_SCHEMES[prevSchemeIndex];
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  // const [currentSchemeIndex, setCurrentSchemeIndex] = useState(0);
  // const [prevSchemeIndex, setPrevSchemeIndex] = useState(0);

  // Auto-change color scheme every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSchemeIndex(currentSchemeIndex);
      setCurrentSchemeIndex((prev) => (prev + 1) % COLOR_SCHEMES.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentSchemeIndex]);

  // const currentScheme = COLOR_SCHEMES[currentSchemeIndex];
  // const prevScheme = COLOR_SCHEMES[prevSchemeIndex];

  const calOptions = useCalEmbed({
    namespace: CONSTANTS.CALCOM_NAMESPACE,
    styles: {
      branding: {
        brandColor: CONSTANTS.CALCOM_BRAND_COLOR,
      },
    },
    hideEventTypeDetails: CONSTANTS.CALCOM_HIDE_EVENT_TYPE_DETAILS,
    layout: CONSTANTS.CALCOM_LAYOUT,
  });
  return (
    <LazyMotion features={domAnimation}>
      <div
        ref={parentRef}
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-900 px-4 pt-10 md:px-8 md:pt-40"
      >
        <BackgroundGradientAnimation
          interactive
          containerClassName="absolute inset-0 z-0"
          colorScheme={currentScheme}
          prevColorScheme={prevScheme}
        />
        {/* <CollisionMechanism
        beamOptions={{
          initialX: -400,
          translateX: 600,
          duration: 7,
          repeatDelay: 3,
        }}
        containerRef={containerRef}
        parentRef={parentRef}
      /> */}
        {/* <CollisionMechanism
        beamOptions={{
          initialX: -200,
          translateX: 800,
          duration: 4,
          repeatDelay: 3,
        }}
        containerRef={containerRef}
        parentRef={parentRef}
      /> */}
        {/* <CollisionMechanism
        beamOptions={{
          initialX: 200,
          translateX: 1200,
          duration: 5,
          repeatDelay: 3,
        }}
        containerRef={containerRef}
        parentRef={parentRef}
      /> */}
        {/* comet animation removed */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-[20vh] w-full bg-gradient-to-t from-white to-transparent dark:from-[rgb(10,10,10)] dark:to-transparent" />

        <div
          className={cn(
            'relative z-20 mx-auto mb-10 mt-5 max-w-4xl text-balance text-center text-3xl font-semibold tracking-tight transition-colors duration-1000 md:mt-5 md:text-7xl',
            'text-black dark:text-white'
          )}
        >
          <Balancer>
            <m.h1
              className={cn(
                'mb-10 mt-20 text-3xl leading-none transition-colors duration-1000 md:mb-10 md:mt-0 md:text-7xl',
                'text-black dark:text-white'
              )}
            >
              {'YOUR ALL-IN-ONE DIGITAL PARTNER'.split(' ').map((word, index) => (
                <m.span
                  initial={{
                    filter: 'blur(10px)',
                    opacity: 0.01,
                    y: 10,
                  }}
                  animate={{
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="mt-2 inline-block md:mt-5"
                  key={index}
                >
                  {word}&nbsp;
                </m.span>
              ))}
            </m.h1>

            <m.h6 className="mt-2 text-lg tracking-wider md:text-2xl">
              <span className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-3">
                <FlipWords
                  className={cn('text-center transition-colors duration-1000', 'text-black dark:text-white')}
                  duration={3000}
                  words={['TECHNOLOGY SOLUTIONS', 'MARKETING SOLUTIONS', 'DESIGN SOLUTIONS']}
                />
                <span className={cn('text-center transition-colors duration-1000', 'text-black dark:text-white')}>
                  FOR BRAND SUCCESS
                </span>
              </span>
            </m.h6>
          </Balancer>
        </div>
        <m.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.5 }}
          className={cn(
            'relative z-20 mx-auto mt-4 max-w-lg px-4 text-center text-base/6 transition-colors duration-1000',
            'text-black dark:text-white'
          )}
        >
          Use the Calendar widget and schedule a 30 min discovery call where you’ll tell us about your needs.
          {/* Enhance your digital presence with our premier tech agency. We specialize in software development, digital marketing, and graphic design. Whether a startup or established business, our expert team brings your vision to life. Elevate your brand with our tailored services. */}
        </m.p>
        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.7 }}
          className="mb-10 mt-8 flex w-full flex-col items-center justify-center gap-4 px-8 sm:flex-row md:mb-20"
        >
          <Button as={Link} href="/login" variant="dark" className="hidden w-40 text-center md:block">
            Go to The Oracle
          </Button>

          <Button
            data-cal-namespace={calOptions.namespace}
            data-cal-link={CONSTANTS.CALCOM_LINK}
            data-cal-config={`{"layout":"${calOptions.layout}"}`}
            as="button"
            variant="primary"
            className="w-40 md:block"
          >
            Book a call
          </Button>
        </m.div>
      </div>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.9, ease: 'easeOut' }}
        ref={containerRef}
        // className="relative mx-auto max-w-7xl rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50 md:p-4"
        className="relative"
        style={{ width: '100vw', position: 'relative', bottom: '0' }}
      >
        {/* <LampDemo /> */}
        <div className="bg-white p-2 dark:bg-neutral-950">
          <BentoGridDemo />
          {/* <Image
            src="https://assets.aceternity.com/pro/dashboard-new.webp"
            alt="header"
            width={1920}
            height={200}
            className="rounded-[20px]"
          /> */}
        </div>
      </m.div>
    </LazyMotion>
  );
}

const BackgroundGrids = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 grid h-full w-full -rotate-45 transform select-none grid-cols-2 gap-10 md:grid-cols-4">
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full bg-gradient-to-b from-transparent via-neutral-100 to-transparent dark:via-neutral-800">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (beamRef.current && containerRef.current && parentRef.current && !cycleCollisionDetected) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
          if (beamRef.current) {
            beamRef.current.style.opacity = '0';
          }
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef, parentRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
        // Set beam opacity to 0
        if (beamRef.current) {
          beamRef.current.style.opacity = '1';
        }
      }, 2000);

      // Reset the beam animation after a delay
      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <m.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || '-200px',
          translateX: beamOptions.initialX || '0px',
          rotate: beamOptions.rotate || -45,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || '800px',
            translateX: beamOptions.translateX || '700px',
            rotate: beamOptions.rotate || -45,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        style={{ opacity: 0.5 }}
        className={cn(
          'absolute left-96 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-blue-600 via-cyan-900 to-transparent',
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            style={{
              left: `${collision.coordinates.x + 20}px`,
              top: `${collision.coordinates.y}px`,
              transform: 'translate(-50%, -50%)',
              opacity: 0.5,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = 'CollisionMechanism';

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn('absolute z-50 h-2 w-2', props.className)}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute -inset-x-10 top-0 m-auto h-[4px] w-10 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm"
      ></m.div>
      {spans.map((span) => (
        <m.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: 'easeOut' }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-blue-200 to-cyan-200"
        />
      ))}
    </div>
  );
};

const GridLineVertical = ({ className, offset }: { className?: string; offset?: string }) => {
  return (
    <div
      style={
        {
          '--background': '#ffffff',
          '--color': 'rgba(0, 0, 0, 0.2)',
          '--height': '5px',
          '--width': '1px',
          '--fade-stop': '90%',
          '--offset': offset || '150px', //-100px if you want to keep the line inside
          '--color-dark': 'rgba(255, 255, 255, 0.3)',
          maskComposite: 'exclude',
        } as React.CSSProperties
      }
      className={cn(
        'absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]',
        'bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]',
        '[background-size:var(--width)_var(--height)]',
        '[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]',
        '[mask-composite:exclude]',
        'z-30',
        'dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]',
        className
      )}
    ></div>
  );
};
