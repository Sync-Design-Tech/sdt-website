'use client';
import React, { useState, useEffect, useRef } from 'react';
import { IconCheck, IconPlus } from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { CanvasRevealEffectDemo } from './usCard/us';
import { WebGLErrorBoundary } from './webgl-error-boundary';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import createGlobe from 'cobe';
import { Skeleton } from 'three';
import { Metadata } from 'next';

export enum plan {
  hobby = 'hobby',
  starter = 'starter',
  pro = 'pro',
}

export type Plan = {
  id: string;
  name: string;
  price: number | string;
  subText?: string;
  currency: string;
  features: string[];
  featured?: boolean;
  buttonText?: string;
  additionalFeatures?: string[];
  onClick: () => void;
};

export const metadata: Metadata = {
  title: 'About us',
  description:
    "Discover our passionate team of experts in web development, design, and digital marketing. We're an international group based in London with members all over Europe, dedicated to providing innovative solutions for businesses worldwide. Our mission is to help companies grow and succeed in the digital landscape through high-quality services and unwavering support. Learn how our collaborative approach and diverse expertise can propel your business towards its goals in today's competitive online environment.",
};

export function AboutUs() {
  return (
    <div id="aboutus" className="relative isolate w-full bg-white px-4 py-0 dark:bg-neutral-950 sm:py-10 lg:px-4">
      <div className="0 relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col">
          <motion.h2 className="mx-auto max-w-xl text-center text-xl font-bold text-black dark:text-white md:mx-0 md:text-left md:text-3xl">
            About us
          </motion.h2>
          <p className="mx-auto mt-8 max-w-md text-center text-sm text-neutral-600 dark:text-neutral-400 md:mx-0 md:text-left md:text-base">
            We are a team of passionate individuals who are dedicated to providing the best solutions for our clients.
            Our team is made up of experts in various fields, including web development, design, and marketing. We work
            together to create innovative and effective solutions that help our clients achieve their goals. Our mission
            is to help businesses grow and succeed in the digital world. We are committed to providing the highest
            quality services and support to our clients. Contact us today to learn more about how we can help you
            achieve your business goals.
          </p>
          <p className="mx-auto mt-8 max-w-md text-center text-sm text-neutral-600 dark:text-neutral-400 md:mx-0 md:text-left md:text-base">
            Our company is based in London. But we are an international team, with members all over Europe.
          </p>
        </div>
        <SkeletonTwo />
      </div>

      <CanvasRevealEffectDemo />
      <div
        className={cn('mx-auto mt-20 grid grid-cols-1 gap-4', 'mx-auto max-w-7xl md:grid-cols-2 xl:grid-cols-3')}
      ></div>
    </div>
  );
}

export const SkeletonTwo = () => {
  return (
    <div className="h-70 absolute mt-10 flex w-full flex-col items-center overflow-hidden bg-transparent dark:bg-transparent md:h-full">
      <WebGLErrorBoundary>
        <Globe />
      </WebGLErrorBoundary>
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(0);
  const [color, setColor] = useState<[number, number, number]>([0.19, 0.19, 0.19]);
  const [glow, setGlow] = useState<[number, number, number]>([0, 0, 0]);
  const [markerColor, setMarkerColor] = useState<[number, number, number]>([0.97, 0.81, 0.035]);
  const locationToAngles = (lat: number, long: number) => {
    return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];
  };
  const focusRef = useRef([0, 0]);

  useEffect(() => {
    setIsDark(theme === 'dark' || resolvedTheme === 'dark' ? 1 : 0);
    setColor(theme === 'dark' || resolvedTheme === 'dark' ? [0.19, 0.19, 0.19] : [1, 1, 1]);
    setGlow(theme === 'dark' || resolvedTheme === 'dark' ? [0, 0.65, 0.71] : [0.5, 0.5, 0.5]);
    setMarkerColor(theme === 'dark' || resolvedTheme === 'dark' ? [0, 0.65, 0.71] : [0.97, 0.81, 0.035]);
  }, [theme, resolvedTheme]);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    let currentPhi = 0;
    let currentTheta = 0;
    const doublePi = Math.PI * 2;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();
    if (!canvasRef.current) return;

    // Bail out gracefully when the browser can't provide a WebGL context
    // (hardware acceleration off, GPU blocklisted, WebGL disabled by policy or an
    // extension). Otherwise cobe/phenomenon throws on `gl.enable(...)` during init.
    const supportsWebGL =
      canvasRef.current.getContext('webgl2') ||
      canvasRef.current.getContext('webgl') ||
      canvasRef.current.getContext('experimental-webgl');
    if (!supportsWebGL) {
      window.removeEventListener('resize', onResize);
      return;
    }

    let globe: ReturnType<typeof createGlobe> | undefined;
    try {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0,
        dark: isDark,
        diffuse: 0.5,
        mapSamples: 56000,
        mapBrightness: 5,
        baseColor: color,
        markerColor: markerColor,
        glowColor: glow,
        markers: [
          // longitude latitude
          { location: [51.52, -0.2], size: 0.05 },
          { location: [40.43, -3.8], size: 0.05 },
        ],
        onRender: (state) => {
          state.phi = currentPhi;
          state.theta = currentTheta;
          const [focusPhi, focusTheta] = focusRef.current;
          const distPositive = (focusPhi - currentPhi + doublePi) % doublePi;
          const distNegative = (currentPhi - focusPhi + doublePi) % doublePi;
          // Control the speed
          if (distPositive < distNegative) {
            currentPhi += distPositive * 0.08;
          } else {
            currentPhi -= distNegative * 0.08;
          }
          currentTheta = currentTheta * 0.92 + focusTheta * 0.08;
          state.width = width * 2;
          state.height = width * 2;
        },
      });
    } catch (err) {
      console.warn('cobe globe failed to initialize; skipping it.', err);
      window.removeEventListener('resize', onResize);
      return;
    }
    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = '1';
      }
    });
    return () => {
      globe?.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [isDark, color, markerColor, glow]);

  return (
    <div className="md:-right-70 absolute -right-0">
      <div className="control-buttons flex flex-col items-center justify-center md:flex-row" style={{ gap: '.5rem' }}>
        We are based in
        <button
          onClick={() => {
            focusRef.current = locationToAngles(51.52, -0.2);
          }}
        >
          📍 London
        </button>
        <button
          onClick={() => {
            focusRef.current = locationToAngles(40.43, -3.8);
          }}
        >
          📍 Madrid
        </button>
      </div>
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: 1 }}
        className={className}
      />
    </div>
  );
};
