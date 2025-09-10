"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

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
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <Image
        src={!isDark ? logoBlack : logoWhite}
        alt={"sdt-logo"}
        width={70}
        height={70}
      />
    </Link>
  );
};
