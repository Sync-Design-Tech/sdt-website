"use client";
import React, { useEffect, useState } from "react";
import { CTA } from "@/components/cta";
import { Services } from "@/components/services";
import { Hero } from "@/components/hero";
// import { Pricing } from "@/components/pricing";
import IntroAnimation from "@/components/introanimation/IntroAnimation";
import { AboutUs } from "@/components/about-us";
import { OurTechStack } from "@/components/our-tech-stack";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const [showIntro, setShowIntro] = useState(false);

    useEffect(() => {
        // Check if intro animation has been shown in the session
        const hasPlayedIntro = localStorage.getItem('hasPlayedIntro');
        if (!hasPlayedIntro) {
            setShowIntro(true);
            // Mark the intro animation as shown
            localStorage.setItem('hasPlayedIntro', 'true');
        }
    }, []);

    return (
        <main className="">
            {showIntro ? <IntroAnimation onSkip={() => setShowIntro(false)} /> : null}
            <ToastContainer />
            <Hero />
            <Services />
            <OurTechStack />
            <AboutUs />
            {/* <Pricing /> */}
            <CTA />
        </main>
    );
}