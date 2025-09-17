'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Hero } from '@/components/hero';
// import { Pricing } from "@/components/pricing";
const Services = dynamic(() => import('@/components/services').then((m) => m.Services), { ssr: true });
const OurTechStack = dynamic(() => import('@/components/our-tech-stack').then((m) => m.OurTechStack), { ssr: true });
const AboutUs = dynamic(() => import('@/components/about-us').then((m) => m.AboutUs), { ssr: true });
const CTA = dynamic(() => import('@/components/cta').then((m) => m.CTA), { ssr: true });

export default function Home() {
  return (
    <>
      <main className="">
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
