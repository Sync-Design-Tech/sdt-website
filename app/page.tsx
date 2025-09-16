'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Hero } from '@/components/hero';
// import { Pricing } from "@/components/pricing";
const IntroAnimation = dynamic(() => import('@/components/introanimation/IntroAnimation'), { ssr: false });
const Services = dynamic(() => import('@/components/services').then((m) => m.Services), { ssr: true });
const OurTechStack = dynamic(() => import('@/components/our-tech-stack').then((m) => m.OurTechStack), { ssr: true });
const AboutUs = dynamic(() => import('@/components/about-us').then((m) => m.AboutUs), { ssr: true });
const CTA = dynamic(() => import('@/components/cta').then((m) => m.CTA), { ssr: true });
import { ToastContainer } from 'react-toastify';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css';
import { Analytics } from '@vercel/analytics/react';
import { GoogleTagManager } from '@next/third-parties/google';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [idle, setIdle] = useState(false);

  useEffect(() => {
    const onLoad = () => {
      const hasPlayedIntro = localStorage.getItem('hasPlayedIntro');
      if (!hasPlayedIntro) {
        setShowIntro(true);
        localStorage.setItem('hasPlayedIntro', 'true');
      } else {
        setShowIntro(false);
      }
    };
    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  useEffect(() => {
    // mark idle after main content rendered
    if ('requestIdleCallback' in window) {
      // @ts-ignore
      requestIdleCallback(() => setIdle(true), { timeout: 2500 });
    } else {
      setTimeout(() => setIdle(true), 2500);
    }
  }, []);

  return (
    <>
      <main className="">
        {idle && (
          <>
            <Analytics />
            <GoogleTagManager gtmId="G-3XPXCMYMXF" />
            <SpeedInsights />
          </>
        )}
        {showIntro ? <IntroAnimation onSkip={() => setShowIntro(false)} /> : null}
        {idle && <ToastContainer />}
        <Hero />
        <Services />
        <OurTechStack />
        <AboutUs />
        {/* <Pricing /> */}
        <CTA />
      </main>
    </>
  );
}
