"use client";
import React, {useState, useEffect, useRef} from "react";
import { motion } from "framer-motion";
import { FocusCardsDemo } from "./focusCard/card";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Our Technology Stack",
  description: "Discover our cutting-edge technology stack powering innovative digital solutions. We leverage the latest technologies to build superior products, constantly adapting and learning to deliver the best web and mobile applications. Our expert team combines state-of-the-art tools with continuous innovation to provide unparalleled solutions for our clients' evolving needs.",
};  

export function OurTechStack() {
  return (
<div
      id="techstack"
      className="relative isolate bg-white dark:bg-neutral-950 w-full px-4 py-8 sm:py-20 lg:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full relative">
        <div className="flex flex-col md:pr-10 w-full md:w-auto mb-8 md:mb-0">
          <motion.h2 className="text-black dark:text-white text-2xl md:text-3xl font-bold text-center md:text-left mb-4">
            Our Technology Stack
          </motion.h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base text-center md:text-left max-w-md mx-auto md:mx-0">
            We use the latest technologies to build our products. We are always learning and adapting to new technologies to provide the best solutions to our customers.
          </p>
        </div>
        <FocusCardsDemo />
      </div>
    </div>
  );
}
