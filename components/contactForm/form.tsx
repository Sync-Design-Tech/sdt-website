import React, { useRef, useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { cn } from "@/lib/utils";
import { HiArrowRight } from "react-icons/hi2";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";
import { CONSTANTS } from "@/constants/links";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import type { NextPage } from "next";

export type FormData = {
  given_name: string;
  family_name: string;
  email: string;
  phone: string;
  message: string;
};

export const SignupFormDemo: NextPage = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  async function onSubmit(data: FormData) {
    const toastId = toast.loading("Sending email...");

    try {
      await sendEmail(data);

      // Append 'type' to the FormData
      const modifiedData = { ...data, type: "confirmation" };

      await sendEmail(modifiedData);

      toast.update(toastId, {
        render: "Contact form submitted successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      // Clear the form
      reset();
    } catch (error) {
      toast.update(toastId, {
        render: "Error while sending email.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  }

  const calOptions = useCalEmbed({
    namespace: CONSTANTS.CALCOM_NAMESPACE,
    styles: {
      branding: {
        brandColor: CONSTANTS.CALCOM_BRAND_COLOR,
      },
    },
    hideEventTypeDetails: CONSTANTS.CALCOM_HIDE_EVENT_TYPE_DETAILS,
    layout: CONSTANTS.CALCOM_LAYOUT,
  });

  return (
    <div className="mr-0 w-full max-w-md rounded-none bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Contact Form
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        We want to hear from you! Please fill out the form below and we will get
        back to you as soon as possible.
      </p>

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="given_name"
              placeholder="Given name"
              type="text"
              {...register("given_name", { required: true })}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Family Name"
              type="text"
              {...register("family_name", { required: true })}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="your-email@syncdesign.tech"
            type="email"
            {...register("email", { required: true })}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="tel">Phone Number</Label>
          <Input
            id="phonenumber"
            placeholder="+44 020 0000 0000"
            type="tel"
            {...register("phone")}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Message</Label>
          <Textarea
            id="message"
            placeholder="Write your message here..."
            {...register("message")}
          />
        </LabelInputContainer>

        <div className="my-5">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            ref={recaptchaRef}
            onChange={handleChange}
            onExpired={handleExpired}
          />
        </div>
        <div className="group relative">
          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={!isVerified}
          >
            Contact us &rarr;
            <BottomGradient />
          </button>
          {!isVerified && (
            <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Captcha required
            </div>
          )}
        </div>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
      {/* <button
        data-cal-namespace={calOptions.namespace}
        data-cal-link={CONSTANTS.CALCOM_LINK}
        data-cal-config={`{"layout":"${calOptions.layout}"}`}
        className="flex space-x-2 items-center group text-base px-4 py-2 rounded-lg bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
      >
        <span>Book a call</span>
        <HiArrowRight className="text-white group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200" />
      </button> */}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
