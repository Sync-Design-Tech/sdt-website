'use client';

import { AboutUs } from '@/components/about-us';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleTagManager } from '@next/third-parties/google';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32">
      <Analytics />
      <GoogleTagManager gtmId="G-3XPXCMYMXF" />
      <SpeedInsights />
      <AboutUs />
    </main>
  );
}
