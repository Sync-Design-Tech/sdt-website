import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookies Policy | SDT",
    description:
        "Review the Cookies Policy for SDT and understand how we use cookies and similar technologies on our website.",
};

export default function CookiesPolicyPage() {
    return (
        <main className="mt-20">
            <div
                id="cookies-policy"
                className="px-4 w-full md:px-8 bg-white dark:bg-neutral-950 pb-20"
            >
                <div className="max-w-7xl mx-auto flex flex-col items-center w-full">
                    <div className="flex flex-col w-full">
                        <h1 className="text-black dark:text-white text-3xl md:text-5xl font-bold text-center md:text-left my-8">
                            Sync Design Tech - Cookies Policy
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400 text-center md:text-left mb-4">
                            <em>Last Updated: October 2024</em>
                        </p>
                        <hr className="border-neutral-300 dark:border-neutral-700 my-8" />

                        <Section
                            title="1. Introduction"
                            content={
                                <>
                                    <p>
                                        Sync Design Tech Limited (we, us, or our) uses cookies
                                        and similar technologies to improve your experience on our
                                        website. This Cookies Policy explains what cookies are, how
                                        we use them, and how you can manage them.
                                    </p>
                                </>
                            }
                        />

                        <Section
                            title="2. What Are Cookies"
                            content={
                                <>
                                    <p>
                                        Cookies are small text files that are placed on your device
                                        (computer, smartphone, or other electronic device) when you
                                        visit a website. They help the website to recognize your
                                        device and store some information about your preferences or
                                        past actions.
                                    </p>
                                </>
                            }
                        />

                        <Section
                            title="3. How We Use Cookies"
                            content={
                                <>
                                    <p>We use cookies to enhance your browsing experience by:</p>
                                    <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 mb-4">
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
                                    <h3 className="text-black dark:text-white text-xl font-bold mb-4">
                                        Essential Cookies
                                    </h3>
                                    <p className="mb-4">
                                        These cookies are necessary for the website to function and
                                        cannot be switched off in our systems. They are usually only
                                        set in response to actions made by you, such as setting your
                                        privacy preferences or filling in forms.
                                    </p>
                                    <h3 className="text-black dark:text-white text-xl font-bold mb-4">
                                        Performance Cookies
                                    </h3>
                                    <p className="mb-4">
                                        These cookies collect information about how visitors use a
                                        website, such as which pages are visited most often. This
                                        helps us improve how our website works.
                                    </p>
                                    <h3 className="text-black dark:text-white text-xl font-bold mb-4">
                                        Functionality Cookies
                                    </h3>
                                    <p className="mb-4">
                                        These cookies allow the website to provide enhanced
                                        functionality and personalization. They may be set by us or
                                        by third-party providers whose services we have added to our
                                        pages.
                                    </p>
                                    <h3 className="text-black dark:text-white text-xl font-bold mb-4">
                                        Targeting/Advertising Cookies
                                    </h3>
                                    <p className="mb-4">
                                        These cookies are used to deliver advertisements that are
                                        more relevant to you and your interests. They may be set
                                        through our site by our advertising partners.
                                    </p>
                                </>
                            }
                        />

                        <Section
                            title="5. Managing Cookies"
                            content={
                                <>
                                    <p>
                                        You can manage or disable cookies at any time by adjusting
                                        your browser settings. However, please note that disabling
                                        cookies may affect the functionality of our website and your
                                        ability to access certain features.
                                    </p>
                                    <p className="my-4">
                                        For more information on how to manage cookies in your
                                        browser, please visit your browsers help section or the
                                        following links:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 my-4">
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
                                        We may allow third-party service providers to place cookies
                                        on your device for advertising and analytics purposes. These
                                        cookies are subject to the respective privacy policies of
                                        these third parties.
                                    </p>
                                </>
                            }
                        />

                        <Section
                            title="7. Changes to This Cookies Policy"
                            content={
                                <>
                                    <p>
                                        We may update this Cookies Policy from time to time to
                                        reflect changes in technology or legislation affecting the
                                        way we use cookies. We encourage you to review this page
                                        periodically for the latest information on our cookie
                                        practices.
                                    </p>
                                </>
                            }
                        />

                        <Section
                            title="8. Contact Us"
                            content={
                                <>
                                    <p>
                                        If you have any questions or concerns about our use of
                                        cookies, please contact us at:
                                    </p>
                                    <br />
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
                                </>
                            }
                        />

                        <hr className="border-neutral-300 dark:border-neutral-700 my-8" />

                        <p className="text-center text-neutral-600 dark:text-neutral-400 mt-8">
                            <strong>
                                Thank you for visiting Sync Design Tech. We value your privacy
                                and are committed to protecting your personal information.
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
    <h2 className="text-black dark:text-white text-2xl font-bold mb-4">{title}</h2>
    <div className="text-neutral-600 dark:text-neutral-400 mb-4">{content}</div>
    <hr className="border-neutral-300 dark:border-neutral-700 my-8" />
    </section>
    );
}