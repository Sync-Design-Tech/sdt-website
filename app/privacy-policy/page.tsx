import { Login } from '@/components/login';
import { Metadata } from 'next';
import { PHONE_NUMBER } from '@/constants/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | SDT',
  description:
    "Read SDT's Privacy Policy to understand how we handle your data. Learn about our commitment to protecting your privacy and ensuring the security of your information at our digital technology and marketing agency.",
  alternates: {
    canonical: '/privacy-policy',
  },
  keywords: ['privacy policy', 'data protection', 'GDPR', 'personal data', 'Sync Design Technologies privacy'],
};

export default function PrivacyPage() {
  return (
    <main className="mt-20">
      <div id="privacy-policy" className="w-full bg-white px-4 pb-20 dark:bg-neutral-950 md:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          <div className="flex w-full flex-col">
            <h1 className="my-8 text-center text-3xl font-bold text-black dark:text-white md:text-left md:text-5xl">
              Sync Design Tech - Privacy Policy
            </h1>
            <p className="mb-4 text-center text-neutral-600 dark:text-neutral-400 md:text-left">
              <em>Last Updated: October 2024</em>
            </p>
            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            {/* Section: Who We Are */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Who We Are</h2>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                Sync Design Tech Limited is a technology agency based in the United Kingdom. We specialize in app and
                website development, digital marketing, graphic design, and branding services.
              </p>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                <strong>Contact Information:</strong>
              </p>
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
                <strong>Office:</strong>
                <br />
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
            </section>

            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            {/* Section: Information We Collect */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Information We Collect</h2>

              {/* Personal Information */}
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">1. Personal Information</h3>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="mb-4 list-inside list-disc text-neutral-600 dark:text-neutral-400">
                <li>Fill out forms on our website.</li>
                <li>Contact us via email or phone.</li>
                <li>Subscribe to our newsletters.</li>
                <li>Engage our services.</li>
              </ul>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">This information may include:</p>
              <ul className="mb-4 list-inside list-disc text-neutral-600 dark:text-neutral-400">
                <li>
                  <strong>Contact Details:</strong> Name, email address, telephone number, postal address.
                </li>
                <li>
                  <strong>Professional Information:</strong> Company name, job title.
                </li>
                <li>
                  <strong>Transaction Information:</strong> Details about payments to and from you.
                </li>
              </ul>

              {/* Automatically Collected Information */}
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                2. Automatically Collected Information
              </h3>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="mb-4 list-inside list-disc text-neutral-600 dark:text-neutral-400">
                <li>
                  <strong>Usage Data:</strong> Information about how you use our website and services.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type and version, time zone setting, operating
                  system, and platform.
                </li>
              </ul>

              {/* Cookies and Similar Technologies */}
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                3. Cookies and Similar Technologies
              </h3>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are
                small data files stored on your device. They help us understand how visitors use our site and enable
                certain site functionalities.
              </p>
            </section>

            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            {/* Section: How We Use Your Information */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">How We Use Your Information</h2>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                We use your personal information for the following purposes:
              </p>
              <ul className="mb-4 list-inside list-disc text-neutral-600 dark:text-neutral-400">
                <li>
                  <strong>Service Delivery:</strong> To provide and manage the services you request.
                </li>
                <li>
                  <strong>Communication:</strong> To communicate with you regarding inquiries, updates, and promotional
                  materials.
                </li>
                <li>
                  <strong>Improvement:</strong> To analyze data to improve our website, products, and services.
                </li>
                <li>
                  <strong>Security:</strong> To maintain the safety and security of our website and services.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with legal obligations and protect our legal rights.
                </li>
              </ul>
            </section>

            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            {/* Section: Legal Basis for Processing */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Legal Basis for Processing</h2>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                We process your personal information based on the following legal grounds:
              </p>
              <ul className="mb-4 list-inside list-disc text-neutral-600 dark:text-neutral-400">
                <li>
                  <strong>Consent:</strong> Where you have given explicit consent.
                </li>
                <li>
                  <strong>Contractual Necessity:</strong> Processing is necessary for the performance of a contract with
                  you.
                </li>
                <li>
                  <strong>Legal Obligation:</strong> Compliance with a legal or regulatory obligation.
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> For our legitimate business interests, provided your rights and
                  interests do not override these interests.
                </li>
              </ul>
            </section>

            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            {/* Section: Disclosure of Your Information */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Disclosure of Your Information</h2>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">We may share your information with:</p>
              <ul className="mb-4 list-inside list-disc text-neutral-600 dark:text-neutral-400">
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who assist in operating our website and
                  providing our services.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law or to protect our rights.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.
                </li>
              </ul>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                We ensure that any third parties with whom we share your data are obligated to keep your information
                secure and to use it only for the purposes we specify.
              </p>
            </section>

            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            {/* Section: Data Security */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Data Security</h2>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                We implement appropriate technical and organizational measures to safeguard your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            {/* Section: Data Retention */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Data Retention</h2>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was
                collected, including any legal, accounting, or reporting requirements.
              </p>
            </section>

            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            {/* Section: International Data Transfers */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">International Data Transfers</h2>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                Your information may be transferred to and maintained on servers located outside of your country where
                the data protection laws may differ. We take steps to ensure your data is treated securely and in
                accordance with this Privacy Policy.
              </p>
            </section>

            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            {/* Section: Your Rights */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Your Rights</h2>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                Under applicable data protection laws, you have the following rights:
              </p>
              <ul className="mb-4 list-inside list-disc text-neutral-600 dark:text-neutral-400">
                <li>
                  <strong>Access:</strong> Request access to your personal data.
                </li>
                <li>
                  <strong>Rectification:</strong> Request correction of inaccurate or incomplete data.
                </li>
                <li>
                  <strong>Erasure:</strong> Request deletion of your personal data.
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of processing your personal data.
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your personal data to you or a third party.
                </li>
                <li>
                  <strong>Objection:</strong> Object to the processing of your personal data.
                </li>
                <li>
                  <strong>Withdrawal of Consent:</strong> Withdraw consent at any time where we are relying on consent
                  to process your data.
                </li>
              </ul>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:info@syncdesign.tech" className="text-blue-600 hover:underline">
                  info@syncdesign.tech
                </a>
                .
              </p>
            </section>

            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            {/* Section: Cookies Policy */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Cookies Policy</h2>

              {/* Types of Cookies We Use */}
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">Types of Cookies We Use:</h3>
              <ul className="mb-4 list-inside list-disc text-neutral-600 dark:text-neutral-400">
                <li>
                  <strong>Essential Cookies:</strong> Necessary for the operation of our website.
                </li>
                <li>
                  <strong>Analytical/Performance Cookies:</strong> Help us recognize and count visitors and see how they
                  move around the website.
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> Used to recognize you when you return to our website.
                </li>
                <li>
                  <strong>Targeting Cookies:</strong> Record your visit to our website, pages visited, and links
                  followed.
                </li>
              </ul>

              {/* Managing Cookies */}
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">Managing Cookies:</h3>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                You can manage your cookie preferences through your browser settings. However, disabling cookies may
                affect the functionality of our website.
              </p>
            </section>

            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            {/* Section: Third-Party Links */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Third-Party Links</h2>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                of these websites and encourage you to review their privacy policies.
              </p>
            </section>

            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            {/* Section: Children's Privacy */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Minors Privacy</h2>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                Our services are not intended for individuals under the age of 16. We do not knowingly collect personal
                information from children under 16.
              </p>
            </section>

            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            {/* Section: Changes to This Privacy Policy */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Changes to This Privacy Policy</h2>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated
                revision date. We encourage you to review this policy regularly.
              </p>
            </section>

            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            {/* Section: Contact Us */}
            <section className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Contact Us</h2>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact
                us:
              </p>
              <address className="mb-4 not-italic text-neutral-600 dark:text-neutral-400">
                <strong>Sync Design</strong>
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
            </section>

            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            <p className="mt-8 text-center text-neutral-600 dark:text-neutral-400">
              <strong>Thank you for trusting Sync Design with your digital needs. Your privacy is our priority.</strong>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
