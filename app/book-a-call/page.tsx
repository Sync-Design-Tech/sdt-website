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
      <div
        id="privacy-policy"
        className="w-full bg-white px-4 pb-20 dark:bg-neutral-950 md:px-8"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          <div className="flex w-full flex-col">
            <h1 className="mt-8 text-center text-3xl font-bold text-black dark:text-white md:text-left md:text-5xl">
              Reach out to us
            </h1>
            <div className="0 mx-auto flex w-full max-w-7xl flex-col items-center justify-between md:flex-row">
              <div className="flex justify-center">
                <div className="mt-8 text-center md:text-left">
                  <p className="mx-auto mt-8 max-w-md text-center text-sm text-neutral-600 dark:text-neutral-400 md:mx-0 md:text-left md:text-base">
                    Enhance your digital presence with our agency. We specialize
                    in software development, digital marketing, and graphic
                    design. Whether a startup or established business, our
                    expert team brings your vision to life. Elevate your brand
                    with our tailored services.
                  </p>
                  <Button
                    data-cal-namespace={calOptions.namespace}
                    data-cal-link={CONSTANTS.CALCOM_LINK}
                    data-cal-config={`{"layout":"${calOptions.layout}"}`}
                    as="button"
                    variant="primary"
                    className="center w-70 my-20 h-20 text-lg font-bold md:block"
                  >
                    Arrange a meeting
                  </Button>
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
                    Email:{" "}
                    <a
                      href="mailto:info@syncdesign.tech"
                      className="text-blue-600 hover:underline"
                    >
                      info@syncdesign.tech
                    </a>
                    <br />
                    Phone:{" "}
                    <a
                      href="tel:+447490462682"
                      className="text-blue-600 hover:underline"
                    >
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
