"use client";
import React, { useEffect, useState } from "react";
import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import IntroAnimation from "@/components/introanimation/IntroAnimation";

export default function Home() {
const [showIntro, setShowIntro] = useState(false);

useEffect(() => {
// Check if intro animation has been shown in the session
const hasPlayedIntro = sessionStorage.getItem('hasPlayedIntro');

if (!hasPlayedIntro) {
setShowIntro(true);
// Mark the intro animation as shown
sessionStorage.setItem('hasPlayedIntro', 'true');

// Hide the intro animation after it has played
setTimeout(() => setShowIntro(false), 3000); // Adjust timer length as needed
}
}, []);

return (
<main className="">
{showIntro && <IntroAnimation />}
<Hero />
<Features />
<Pricing />
<CTA />
</main>
);
}