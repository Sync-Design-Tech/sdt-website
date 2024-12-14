"use client";
import React, {useState, useEffect, useRef} from "react";
import { IconCheck, IconPlus } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { CanvasRevealEffectDemo } from "./usCard/us";
import { motion } from "framer-motion";
import { useTheme } from 'next-themes';
import createGlobe from "cobe";
import { Skeleton } from "three";

export enum plan {
  hobby = "hobby",
  starter = "starter",
  pro = "pro",
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

export function AboutUs() {
  return (
    <div
      id="aboutus"
      className="relative isolate bg-white dark:bg-neutral-950 w-full px-4 py-0 sm:py-10 lg:px-4 "
    >
        
        <div className="max-w-7xl mx-auto 0 flex flex-col md:flex-row justify-between items-center w-full relative">
        <div className="flex flex-col">
          <motion.h2 className="text-black dark:text-white text-xl text-center md:text-left md:text-3xl font-bold mx-auto md:mx-0 max-w-xl ">
             About us
          </motion.h2>
          <p className="max-w-md mt-8 text-center md:text-left text-sm md:text-base mx-auto md:mx-0 text-neutral-600 dark:text-neutral-400">
          We are a team of passionate individuals who are dedicated to providing the best solutions for our clients. Our team is made up of experts in various fields, including web development, design, and marketing. We work together to create innovative and effective solutions that help our clients achieve their goals. Our mission is to help businesses grow and succeed in the digital world. We are committed to providing the highest quality services and support to our clients. Contact us today to learn more about how we can help you achieve your business goals.
          </p>
          <p className="max-w-md mt-8 text-center md:text-left text-sm md:text-base mx-auto md:mx-0 text-neutral-600 dark:text-neutral-400">
          Our company is based in London. But we are an international team, with members in Madrid, Oslo and Paris.
          </p>

        </div>
        <SkeletonTwo />
      </div>

        <CanvasRevealEffectDemo />
      <div
        className={cn(
          "mx-auto grid grid-cols-1 gap-4  mt-20 ",
          "max-w-7xl mx-auto  md:grid-cols-2 xl:grid-cols-3"
        )}
      >
      </div>
    </div>
  );
}


export const SkeletonTwo = () => {
    return (
      <div className="absolute overflow-hidden h-70 md:h-full w-full flex flex-col items-center bg-transparent dark:bg-transparent mt-10">
        <Globe />
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
        return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180]
      }
    const focusRef = useRef([0, 0])

    useEffect(() => {
      setIsDark(theme === "dark" || resolvedTheme === "dark" ? 1 : 0);
      setColor(theme === "dark" || resolvedTheme === "dark" ? [0.19, 0.19, 0.19] : [1,1,1]);
      setGlow(theme === "dark" || resolvedTheme === "dark" ?  [0, .65, .71] : [0.5, 0.5, 0.5]);
      setMarkerColor(theme === "dark" || resolvedTheme === "dark" ? [0, .65, .71] : [0.97, 0.81, 0.035]);
    }, [theme, resolvedTheme]);
  
    useEffect(() => {
      let phi = 0;
      let width = 0;
        let currentPhi = 0;
        let currentTheta = 0;
        const doublePi = Math.PI * 2;
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
        window.addEventListener('resize', onResize)
        onResize()
      if (!canvasRef.current) return;
  
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0,
        dark: isDark,
        diffuse: 0.5,
        mapSamples: 56000,
        mapBrightness: 10,
        baseColor: color,
        markerColor: markerColor,
        glowColor: glow,
        markers: [
          // longitude latitude
          { location: [51.52, -0.2], size: 0.05},
          { location: [40.43, -3.8], size: 0.05},
        ],
        onRender: (state) => {
            state.phi = currentPhi
            state.theta = currentTheta
            const [focusPhi, focusTheta] = focusRef.current
            const distPositive = (focusPhi - currentPhi + doublePi) % doublePi
            const distNegative = (currentPhi - focusPhi + doublePi) % doublePi
            // Control the speed
            if (distPositive < distNegative) {
              currentPhi += distPositive * 0.08
            } else {
              currentPhi -= distNegative * 0.08
            }
            currentTheta = currentTheta * 0.92 + focusTheta * 0.08
            state.width = width * 2
            state.height = width * 2
          }
        })
        setTimeout(() => {
          if (canvasRef.current) {
            canvasRef.current.style.opacity = '1';
          }
        })
        return () => { 
          globe.destroy();
          window.removeEventListener('resize', onResize);
        }
    }, [isDark, color, markerColor, glow]);
  
    return (
        <div className="absolute -right-0 md:-right-70" >
            <div className="flex flex-col md:flex-row justify-center items-center control-buttons" style={{ gap: '.5rem' }}>
            We are based in
            <button onClick={() => {
                focusRef.current = locationToAngles(51.52, -0.2)
            }}>📍 London</button>
            <button onClick={() => {
                focusRef.current = locationToAngles(40.43, -3.8)
            }}>📍 Madrid</button>
            </div>
            <canvas
                ref={canvasRef}
                style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
                className={className}
            />
      </div>
    );
  };