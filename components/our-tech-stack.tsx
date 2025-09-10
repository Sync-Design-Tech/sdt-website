"use client";
import React, { useState, useEffect, useRef } from "react";
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
  description:
    "Discover our cutting-edge technology stack powering innovative digital solutions. We leverage the latest technologies to build superior products, constantly adapting and learning to deliver the best web and mobile applications. Our expert team combines state-of-the-art tools with continuous innovation to provide unparalleled solutions for our clients' evolving needs.",
};

export function OurTechStack() {
  return (
    <div
      id="techstack"
      className="relative isolate w-full bg-white px-4 py-8 dark:bg-neutral-950 sm:py-20 lg:px-8"
    >
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between md:flex-row">
        <div className="mb-8 flex w-full flex-col md:mb-0 md:w-auto md:pr-10">
          <motion.h2 className="mb-4 text-center text-2xl font-bold text-black dark:text-white md:text-left md:text-3xl">
            Our Technology Stack
          </motion.h2>
          <p className="mx-auto max-w-md text-center text-base text-neutral-600 dark:text-neutral-400 md:mx-0 md:text-left">
            We use the latest technologies to build our products. We are always
            learning and adapting to new technologies to provide the best
            solutions to our customers.
          </p>
        </div>
        <FocusCardsDemo />
      </div>
    </div>
  );
}
