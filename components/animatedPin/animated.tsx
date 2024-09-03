"use client";
import React from "react";
import { PinContainer } from "./AnimatedPin";
import Image from "next/image";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-baseline pt-8 justify-center ">
      <PinContainer
        title="YourDomain.com"
        href="javascript:void(0);"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-neutral-8000 dark:text-neutral-100 text-neutral-800 sm:basis-1/2 w-[30rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 text-base">
            Put your business on the map
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Give a professional look to your business with a custom domain.
            </span>
          </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
            <Image
                src="https://s3websitedata.s3.eu-west-2.amazonaws.com/public/google-search-bar-popular-browser-600nw-2312132949.webp"
                alt="Dashboard"
                width={500}
                height={500}
                className="w-full object-cover rounded-lg "
              />
            </div>
        </div>
      </PinContainer>
    </div>
  );
}
