'use client';

import { Services } from '@/components/services';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleTagManager } from '@next/third-parties/google';

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32">
      <Analytics />
      <GoogleTagManager gtmId="G-3XPXCMYMXF" />
      <SpeedInsights />
      <Services />
    </main>
  );
}
