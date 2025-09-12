import { Metadata } from 'next';
import { PHONE_NUMBER } from '@/constants/constants';

export const metadata: Metadata = {
  title: 'Cookies Policy | SDT',
  description:
    'Review the Cookies Policy for SDT and understand how we use cookies and similar technologies on our website.',
  alternates: {
    canonical: '/cookies',
  },
  keywords: [
    'cookies policy',
    'cookie usage',
    'website cookies',
    'tracking technologies',
    'Sync Design Technologies cookies',
  ],
};

export default function CookiesPolicyPage() {
  return (
    <main className="mt-20">
      <div id="cookies-policy" className="w-full bg-white px-4 pb-20 dark:bg-neutral-950 md:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          <div className="flex w-full flex-col">
            <h1 className="my-8 text-center text-3xl font-bold text-black dark:text-white md:text-left md:text-5xl">
              Sync Design Technologies - Cookies Policy
            </h1>
            <p className="mb-4 text-center text-neutral-600 dark:text-neutral-400 md:text-left">
              <em>Last Updated: October 2024</em>
            </p>
            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            <Section
              title="1. Introduction"
              content={
                <>
                  <p>
                    Sync Design Tech Limited (we, us, or our) uses cookies and similar technologies to improve your
                    experience on our website. This Cookies Policy explains what cookies are, how we use them, and how
                    you can manage them.
                  </p>
                </>
              }
            />

            <Section
              title="2. What Are Cookies"
              content={
                <>
                  <p>
                    Cookies are small text files that are placed on your device (computer, smartphone, or other
                    electronic device) when you visit a website. They help the website to recognize your device and
                    store some information about your preferences or past actions.
                  </p>
                </>
              }
            />

            <Section
              title="3. How We Use Cookies"
              content={
                <>
                  <p>We use cookies to enhance your browsing experience by:</p>
                  <ul className="mb-4 list-inside list-disc text-neutral-600 dark:text-neutral-400">
                    <li>Remembering your preferences and settings.</li>
                    <li>Understanding how you use our website.</li>
                    <li>Providing personalized content and advertisements.</li>
                    <li>Analyzing our website traffic and performance.</li>
                  </ul>
                </>
              }
            />

            <Section
              title="4. Types of Cookies We Use"
              content={
                <>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Essential Cookies</h3>
                  <p className="mb-4">
                    These cookies are necessary for the website to function and cannot be switched off in our systems.
                    They are usually only set in response to actions made by you, such as setting your privacy
                    preferences or filling in forms.
                  </p>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Performance Cookies</h3>
                  <p className="mb-4">
                    These cookies collect information about how visitors use a website, such as which pages are visited
                    most often. This helps us improve how our website works.
                  </p>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Functionality Cookies</h3>
                  <p className="mb-4">
                    These cookies allow the website to provide enhanced functionality and personalization. They may be
                    set by us or by third-party providers whose services we have added to our pages.
                  </p>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">Targeting/Advertising Cookies</h3>
                  <p className="mb-4">
                    These cookies are used to deliver advertisements that are more relevant to you and your interests.
                    They may be set through our site by our advertising partners.
                  </p>
                </>
              }
            />

            <Section
              title="5. Managing Cookies"
              content={
                <>
                  <p>
                    You can manage or disable cookies at any time by adjusting your browser settings. However, please
                    note that disabling cookies may affect the functionality of our website and your ability to access
                    certain features.
                  </p>
                  <p className="my-4">
                    For more information on how to manage cookies in your browser, please visit your browsers help
                    section or the following links:
                  </p>
                  <ul className="my-4 list-inside list-disc text-neutral-600 dark:text-neutral-400">
                    <li>
                      <a
                        href="https://support.google.com/chrome/answer/95647"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Chrome
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mozilla Firefox
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.apple.com/kb/PH21411"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Safari
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Microsoft Edge - Internet Explorer
                      </a>
                    </li>
                  </ul>
                </>
              }
            />

            <Section
              title="6. Third-Party Cookies"
              content={
                <>
                  <p>
                    We may allow third-party service providers to place cookies on your device for advertising and
                    analytics purposes. These cookies are subject to the respective privacy policies of these third
                    parties.
                  </p>
                </>
              }
            />

            <Section
              title="7. Changes to This Cookies Policy"
              content={
                <>
                  <p>
                    We may update this Cookies Policy from time to time to reflect changes in technology or legislation
                    affecting the way we use cookies. We encourage you to review this page periodically for the latest
                    information on our cookie practices.
                  </p>
                </>
              }
            />

            <Section
              title="8. Contact Us"
              content={
                <>
                  <p>If you have any questions or concerns about our use of cookies, please contact us at:</p>
                  <br />
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
                </>
              }
            />

            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            <p className="mt-8 text-center text-neutral-600 dark:text-neutral-400">
              <strong>
                Thank you for visiting Sync Design Tech. We value your privacy and are committed to protecting your
                personal information.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Section({ title, content }: { title: string; content: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">{title}</h2>
      <div className="mb-4 text-neutral-600 dark:text-neutral-400">{content}</div>
      <hr className="my-8 border-neutral-300 dark:border-neutral-700" />
    </section>
  );
}
