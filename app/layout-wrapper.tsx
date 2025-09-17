'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { GoogleTagManager } from '@next/third-parties/google';

const IntroAnimation = dynamic(() => import('@/components/introanimation/IntroAnimation'), { ssr: false });

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [checked, setChecked] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [idle, setIdle] = useState(false);

  useEffect(() => {
    const alreadyPlayed = localStorage.getItem('hasPlayedIntro');
    if (!alreadyPlayed) {
      setShowIntro(true);
      localStorage.setItem('hasPlayedIntro', 'true');
    }
    setChecked(true);
  }, []);

  useEffect(() => {
    if (!checked) return;
    if ('requestIdleCallback' in window) {
      // @ts-ignore
      requestIdleCallback(() => setIdle(true), { timeout: 2500 });
    } else {
      setTimeout(() => setIdle(true), 2500);
    }
  }, [checked]);

  return (
    <>
      {/* Analytics and tracking - load when idle */}
      {idle && (
        <>
          <Analytics />
          <GoogleTagManager gtmId="G-3XPXCMYMXF" />
          <SpeedInsights />
        </>
      )}
      {/* Animation renders on top when showIntro is true */}
      {showIntro && <IntroAnimation onSkip={() => setShowIntro(false)} />}

      <div className="relative">
        {/* Content is always rendered but initially hidden */}
        <div
          className="transition-opacity duration-300"
          style={{
            visibility: checked ? 'visible' : 'hidden',
            opacity: checked ? 1 : 0,
          }}
        >
          {idle && <ToastContainer />}
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
