"use client";
import React, {useState, useEffect, useRef} from "react";
import { motion } from "framer-motion";
import { FocusCardsDemo } from "./focusCard/card";

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

export function OurTechStack() {
  return (
    <div
      id="techstack"
      className="relative isolate bg-white dark:bg-neutral-950 w-full px-4 py-0 sm:py-20 lg:px-4 pb-20 "
    >
        
        <div className="max-w-7xl mx-auto 0 flex flex-col md:flex-row justify-between items-center w-full relative">
        <div className="flex flex-col pr-10">
          <motion.h2 className="text-black dark:text-white text-xl text-center md:text-left md:text-3xl font-bold mx-auto md:mx-0 max-w-xl ">
             Our Technology Stack
          </motion.h2>
          <p className="max-w-md mt-8 text-center md:text-left text-sm md:text-base mx-auto md:mx-0 text-neutral-600 dark:text-neutral-400">
            We are use the latest technologies to build our products. We are always learning and adapting to new technologies to provide the best solutions to our customers.
          </p>
        </div>
        <FocusCardsDemo />
      </div>
    </div>
  );
}
