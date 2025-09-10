"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Login() {
  return (
    <div className="mt-20 grid min-h-screen w-full grid-cols-1 md:min-h-[calc(100vh-4rem)] md:grid-cols-2">
      <Form />
      <div className="relative z-20 hidden w-full items-center justify-center overflow-hidden border-l border-neutral-100 bg-white dark:border-neutral-800 dark:bg-neutral-900 md:flex">
        <div className="mx-auto max-w-sm">
          {/* <FeaturedTestimonials /> */}
          <p
            className={cn(
              "mb-10 text-center text-xl font-semibold text-neutral-600 dark:text-neutral-400",
            )}
          >
            The Oracle
          </p>
          <p
            className={cn(
              "text-center text-xl font-semibold text-neutral-600 dark:text-neutral-400",
            )}
          >
            Log in for AI tools
          </p>
          <p
            className={cn(
              "mb-20 mt-8 text-center text-base font-normal text-neutral-500 dark:text-neutral-400",
            )}
          >
            Log in to access your AI tools and get started with your projects.
            Contact info@syncdesign.tech to create an account.
          </p>
        </div>

        <GridLineHorizontal
          className="left-1/2 top-0 -translate-x-1/2"
          offset="-10px"
        />
        <GridLineHorizontal
          className="bottom-0 left-1/2 top-auto -translate-x-1/2"
          offset="-10px"
        />
        <GridLineVertical
          className="left-10 top-1/2 -translate-y-1/2"
          offset="-10px"
        />
        <GridLineVertical
          className="left-auto right-10 top-1/2 -translate-y-1/2"
          offset="-10px"
        />
        {/* <GridLineVertical className="left-80 transform" /> */}
      </div>
    </div>
  );
}

function Form() {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    // console.log("submitted form", e);
  }

  return (
    <form className="bg-gray-50 dark:bg-neutral-950" onSubmit={onSubmit}>
      <div className="mx-auto flex w-full max-w-2xl items-center justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-32">
        <div className="mx-auto w-full max-w-md">
          <div>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
              Log in
            </h2>
          </div>

          <div className="mt-10">
            <div>
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400"
                  >
                    Email address
                  </label>

                  <div className="mt-2">
                    <input
                      id="email"
                      type="email"
                      placeholder="hello@syncdesing.tech"
                      className="block w-full rounded-md border-0 bg-white px-4 py-1.5 text-black shadow-input placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:text-white sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400"
                  >
                    Password
                  </label>

                  <div className="mt-2">
                    <input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="block w-full rounded-md border-0 bg-white px-4 py-1.5 text-black shadow-input placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:text-white sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button className="relative z-10 flex w-full items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-neutral-100 dark:hover:shadow-xl md:text-sm">
                    Sign in
                  </button>
                  <p
                    className={cn(
                      "mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400",
                    )}
                  >
                    Already have an account?{" "}
                    <Link
                      href="mailto:info@syncdesign.tech"
                      className="text-black dark:text-neutral-500"
                    >
                      Contact us
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            <div className="mt-10">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-neutral-300 dark:border-neutral-700" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-gray-50 px-6 text-neutral-400 dark:bg-neutral-950 dark:text-neutral-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 flex w-full items-center justify-center">
                <button
                  onClick={() => {}}
                  disabled
                  // className="bg-neutral-300 relative z-10 hover:bg-black/90  text-white text-sm md:text-sm transition font-medium duration-200  rounded-full px-4 py-1.5  flex items-center justify-center w-full dark:text-black dark:bg-neutral-800 dark:hover:bg-neutral-100 dark:hover:shadow-xl group"
                  className="group relative z-10 flex w-full items-center justify-center rounded-full bg-neutral-300 px-4 py-1.5 text-sm font-medium text-white transition duration-200 dark:bg-neutral-800 dark:text-black md:text-sm"
                >
                  <IconBrandGithub className="h-5 w-5" />
                  <span className="text-sm font-semibold leading-6">
                    Github
                  </span>
                  <span className="absolute bottom-full mb-2 w-max rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Github log in disabled, contact info@syncdesign.tech for
                    help!
                  </span>
                </button>
              </div>

              <p className="mt-8 text-center text-sm text-neutral-600 dark:text-neutral-400">
                By clicking on sign up, you agree to our{" "}
                <Link
                  href="/terms-of-services"
                  className="text-neutral-500 dark:text-neutral-300"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-neutral-500 dark:text-neutral-300"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <Image
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30}
      />
      <span className="font-medium text-black dark:text-white">DevStudio</span>
    </Link>
  );
};

export const FeaturedTestimonials = ({
  className,
  containerClassName,
}: {
  textClassName?: string;
  className?: string;
  showStars?: boolean;
  containerClassName?: string;
}) => {
  const images = [
    {
      name: "Tool 1",
      src: "https://example.com/tool1-icon.png",
    },
    {
      name: "Tool 2",
      src: "https://example.com/tool2-icon.png",
    },
    {
      name: "Tool 3",
      src: "https://example.com/tool3-icon.png",
    },
    {
      name: "Tool 4",
      src: "https://example.com/tool4-icon.png",
    },
    {
      name: "Tool 5",
      src: "https://example.com/tool5-icon.png",
    },
    {
      name: "Tool 6",
      src: "https://example.com/tool6-icon.png",
    },
  ];
  return (
    <div className={cn("flex flex-col items-center", containerClassName)}>
      <div
        className={cn(
          "mb-2 flex flex-col items-center justify-center sm:flex-row",
          className,
        )}
      >
        <div className="mb-4 flex flex-row items-center sm:mb-0">
          {images.map((image, idx) => (
            <div className="group relative -mr-4" key={image.name}>
              <div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    zIndex: 30,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="relative overflow-hidden rounded-full border-2 border-neutral-200"
                >
                  <Image
                    height={100}
                    width={100}
                    src={image.src}
                    alt={image.name}
                    className="h-8 w-8 object-cover object-top md:h-14 md:w-14"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};
