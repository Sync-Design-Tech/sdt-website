"use client";
import { Metadata } from "next";
import { Button } from "../../components/button";
import { CONSTANTS } from "@/constants/links";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";
import { SignupFormDemo } from "../../components/contactForm/form"; 

// export const metadata: Metadata = {
//   title: "Log in | SDT",
//   description:
//     "Log in to use SDT's AI tools. Enhance your web design projects with our advanced AI solutions tailored for web design agencies.",
// };

export default function BookACallPage() {
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
    <main className="mt-20">
        <div id="privacy-policy" className="px-4 w-full md:px-8 bg-white dark:bg-neutral-950 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center w-full">
        <div className="flex flex-col w-full">
        <h1 className="text-black dark:text-white text-3xl md:text-5xl font-bold text-center md:text-left mt-8">
            Reach out to us
        </h1>
        <div className="max-w-7xl mx-auto 0 flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex justify-center">
        <div className="mt-8 text-center md:text-left">
        <p className="max-w-md mt-8 text-center md:text-left text-sm md:text-base mx-auto md:mx-0 text-neutral-600 dark:text-neutral-400">
        Enhance your digital presence with our agency. We specialize in software development, digital marketing, and graphic design. Whether a startup or established business, our expert team brings your vision to life. Elevate your brand with our tailored services.
        </p>
        <Button
            data-cal-namespace={calOptions.namespace}
            data-cal-link={CONSTANTS.CALCOM_LINK}
            data-cal-config={`{"layout":"${calOptions.layout}"}`}
            as="button"
            variant="primary"
            className="md:block my-20 center w-70 h-20 text-lg font-bold"
          >
            Arrange a meeting
          </Button>
        <address className="not-italic text-neutral-600 dark:text-neutral-400 mb-4">
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
              <a href="tel:+447490462682" className="text-blue-600 hover:underline">
                +44 (0) 7490 462682
              </a>
            </p>
        </div>

        </div>
        <SignupFormDemo />
        </div>
        </div>
        </div>
        </div>
        </main> 
  );
}
