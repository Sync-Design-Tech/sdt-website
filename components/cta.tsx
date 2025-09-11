'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { PHONE_NUMBER } from '@/constants/constants';
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring, animate, stagger } from 'framer-motion';

import { SignupFormDemo } from './contactForm/form';
import { BsStarFill } from 'react-icons/bs';
import { cn } from '@/lib/utils';

export function CTA() {
  return (
    <div id="contact" className="w-full bg-white px-4 pb-20 dark:bg-neutral-950 md:px-8">
      <div className="0 mx-auto flex w-full max-w-7xl flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col">
          <motion.h2 className="mx-auto max-w-xl text-center text-xl font-bold text-black dark:text-white md:mx-0 md:text-left md:text-3xl">
            Get in touch with us today and lets create something amazing together!
          </motion.h2>
          <p className="mx-auto mt-8 max-w-md text-center text-sm text-neutral-600 dark:text-neutral-400 md:mx-0 md:text-left md:text-base">
            Outsource Your Digital Transformation, Leave the Heavy Lifting to us.
          </p>
          <div className="mt-8 text-center md:text-left">
            <p className="pb-5 text-xl font-bold text-black dark:text-white">Our London address:</p>
            <address className="mb-4 not-italic text-neutral-600 dark:text-neutral-400">
              <strong>Sync Design Tech Limited</strong>
              <br />
              71-75 Shelton Street
              <br />
              Covent Garden
              <br />
              London, WC2H 9JQ
              <br />
              United Kingdom
              <br />
            </address>
            <p className="text-neutral-600 dark:text-neutral-400">
              <br />
              Email:{' '}
              <a href="mailto:info@syncdesign.tech" className="text-blue-600 hover:underline">
                info@syncdesign.tech
              </a>
              <br />
              Phone:{' '}
              <a href={`tel:${PHONE_NUMBER}`} className="text-blue-600 hover:underline">
                {PHONE_NUMBER}
              </a>
            </p>
            <div className="relative m-6 mx-auto h-64 w-full max-w-md md:mx-0">
              <Image
                src="https://s3websitedata.s3.eu-west-2.amazonaws.com/public/office.webp"
                alt="Office"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
        <SignupFormDemo />
      </div>
    </div>
  );
}

export const FeaturedImages = ({
  textClassName,
  className,
  showStars = false,
  containerClassName,
}: {
  textClassName?: string;
  className?: string;
  showStars?: boolean;
  containerClassName?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  useEffect(() => {
    animate(
      '.animation-container',
      {
        scale: [1.1, 1, 0.9, 1],
        opacity: [0, 1],
      },
      { duration: 0.4, delay: stagger(0.1) }
    );
  }, []);
  return (
    <div className={cn('mb-10 mt-10 flex flex-col items-center', containerClassName)}>
      <div className={cn('mb-2 flex flex-col items-center justify-center sm:flex-row', className)}>
        <div className="mb-4 flex flex-row items-center sm:mb-0">
          {testimonials.map((testimonial, idx) => (
            <div
              className="group relative -mr-4"
              key={testimonial.name}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: 'spring',
                        stiffness: 160,
                        damping: 20,
                      },
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    style={{
                      translateX: translateX,

                      whiteSpace: 'nowrap',
                    }}
                    className="absolute -left-1/2 -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-xs shadow-xl"
                  >
                    <div className="absolute inset-x-0 -bottom-px z-30 mx-auto h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                    <div className="absolute inset-x-0 -bottom-px z-30 mx-auto h-px w-[70%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                    <div className="flex items-center gap-2">
                      <div className="relative z-30 text-sm font-bold text-white">{testimonial.name}</div>
                      <div className="rounded-sm bg-neutral-950 px-1 py-0.5 text-xs text-neutral-300">
                        {testimonial.designation}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="animation-container">
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    rotate: `${Math.random() * 15 - 5}deg`,
                    scale: 1,
                    opacity: 1,
                  }}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 30,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="relative overflow-hidden rounded-2xl border-2 border-neutral-200"
                >
                  <Image
                    onMouseMove={handleMouseMove}
                    height={100}
                    width={100}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-14 w-14 object-cover object-top"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <div className="ml-6 flex justify-center">
          {[...Array(5)].map((_, index) => (
            <BsStarFill key={index} className={showStars ? 'mx-1 h-4 w-4 text-yellow-400' : 'hidden'} />
          ))}
        </div>
      </div>
      <p className={cn('relative z-40 text-left text-sm text-neutral-400', textClassName)}>
        {/* Trusted by 27,000+ developers */}
      </p>
    </div>
  );
};

const testimonials = [
  {
    name: 'John Doe',
    designation: 'Software Engineer',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
  },
  {
    name: 'Robert Johnson',
    designation: 'Product Manager',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Jane Smith',
    designation: 'Data Scientist',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Emily Davis',
    designation: 'UX Designer',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Tyler Durden',
    designation: 'Soap Developer',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
  },
  {
    name: 'Dora',
    designation: 'The Explorer',
    image:
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
  },
];
