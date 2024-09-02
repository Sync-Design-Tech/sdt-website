"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/sdt-logo-black.svg";
// import logo from "../assets/sdt-logo-white.svg";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <Image
        src={logo}
        alt="logo"
        width={70}
        height={70}
      />
      {/* <span className="font-medium text-black dark:text-white">Startup</span> */}
    </Link>
  );
};
