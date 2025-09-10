"use client";
import React from "react";
import { PinContainer } from "./AnimatedPin";
import Image from "next/image";

export function AnimatedPinDemo() {
  // const handleClick = (event: React.MouseEvent<Element, MouseEvent>): void => {
  //   event.preventDefault();
  // };
  return (
    <div className="flex h-[25rem] w-full items-baseline justify-center">
      <PinContainer
        title="YourDomain.com"
        href="#"
        // onClick={handleClick}
      >
        <div className="text-neutral-8000 flex h-[20rem] w-full basis-full flex-col p-4 tracking-tight text-neutral-800 dark:text-neutral-100 sm:basis-1/2">
          <h3 className="!m-0 max-w-xs !pb-2 text-base">
            Put your business on the map
          </h3>
          <div className="!m-0 !p-0 text-base font-normal">
            <span className="text-slate-500">
              Give a professional look to your business with a custom domain.
            </span>
          </div>
          <div className="mt-4 flex w-full flex-1 rounded-lg bg-white">
            <Image
              src="https://s3websitedata.s3.eu-west-2.amazonaws.com/public/google-search-engine.webp"
              alt="Dashboard"
              width={2000}
              height={2000}
              className="w-full rounded-lg object-contain"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
