"use client";

import "./globals.css";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

type Section = 'home' | 'services' | 'ourTechStack' | 'aboutUs' | 'contact';

const metadataDes: Record<Section, { title: string; description: string }> = {
    home: {
        title: "Sync Design Technologies",
        description: "Your All-in-One Digital Partner for Web, Apps, and Brand Success | Your Brand, Your Ideas, Your Identity",
    },
    services: {
        title: "Our Services",
        description: "Elevate your digital presence with our comprehensive services: custom software development, intuitive UI/UX design, global digital marketing strategies, bespoke graphic design, SEO/SEA optimization, and tailored hardware solutions.",
    },
    ourTechStack: {
        title: "Our Technology Stack",
        description: "Discover our cutting-edge technology stack powering innovative digital solutions.",
    },
    aboutUs: {
        title: "About Us",
        description: "Discover our passionate team of experts in web development, design, and digital marketing.",
    },
    contact: {
        title: "Contact Us",
        description: "Get in touch with us to discover how we can help your business grow.",
    },
};

export default function SEO() {
    const [currentSection, setCurrentSection] = useState<Section>('home');
    const pathname = usePathname();

    useEffect(() => {
        const updateSection = () => {
            const section = window.location.hash.substring(1) || 'home';
            setCurrentSection(section as Section);
        };

        // Add event listener for hash changes
        window.addEventListener('hashchange', updateSection);

        // Call once for initial load
        updateSection();

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('hashchange', updateSection);
        };
    }, [pathname]);

    const { title, description } = metadataDes[currentSection] || metadataDes.home;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <link rel="canonical" href={`https://s3maintenance.co.uk${pathname}`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Head>
    );
}
