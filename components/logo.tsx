"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';

import logoWhite from "../assets/sdt-logo-black.svg";
import logoBlack from "../assets/sdt-logo-white.svg";

export const Logo = () => {
  const { theme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark" || resolvedTheme === "dark");
  }, [theme, resolvedTheme]);

  return (
    <Link
      href={"/"}
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <Image src={!isDark ? logoBlack : logoWhite} alt={"sdt-logo"} width={70} height={70} />
    </Link>
  );
};
