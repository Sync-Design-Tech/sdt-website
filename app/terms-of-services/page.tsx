import { Metadata } from 'next';
import { PHONE_NUMBER } from '@/constants/constants';

export const metadata: Metadata = {
  title: 'Terms of Service | SDT',
  description:
    'Review the Terms of Service for SDT and understand the conditions and guidelines for using our digital technology and marketing services.',
};

export default function TermsOfServicePage() {
  return (
    <main className="mt-20">
      <div id="terms-of-service" className="w-full bg-white px-4 pb-20 dark:bg-neutral-950 md:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          <div className="flex w-full flex-col">
            <h1 className="my-8 text-center text-3xl font-bold text-black dark:text-white md:text-left md:text-5xl">
              Sync Design Technologies - Terms of Service
            </h1>
            <p className="mb-4 text-center text-neutral-600 dark:text-neutral-400 md:text-left">
              <em>Last Updated: October 2024</em>
            </p>
            <hr className="my-8 border-neutral-300 dark:border-neutral-700" />

            <Section
              title="1. Acceptance of Terms"
              content="By accessing and using the services provided by Sync Design Tech Limited ('we,' 'us,' or 'our'), you ('User') agree to be bound by these Terms of Service ('Terms'). If you do not agree to these Terms, please refrain from using our services."
            />

            <Section
              title="2. Our Services"
              content="Sync Design Tech provides technology solutions including app and website development, digital marketing, graphic design, and branding services. Detailed descriptions of our services are available on our website."
            />

            <Section
              title="3. User Obligations"
              content={
                <>
                  <p>As a condition of using our services, you agree to:</p>
                  <ul className="mb-4 list-inside list-disc text-neutral-600 dark:text-neutral-400">
                    <li>Provide accurate and complete information when requested.</li>
                    <li>Comply with all applicable laws and regulations.</li>
                    <li>Respect our intellectual property rights and those of third parties.</li>
                  </ul>
                </>
              }
            />

            <Section
              title="4. Prohibited Uses"
              content={
                <>
                  <p>
                    You agree not to use our services for any unlawful or prohibited activities, including but not
                    limited to:
                  </p>
                  <ul className="mb-4 list-inside list-disc text-neutral-600 dark:text-neutral-400">
                    <li>Engaging in any form of harassment or offensive behavior.</li>
                    <li>Transmitting harmful or malicious code.</li>
                    <li>Infringing upon any intellectual property rights.</li>
                    <li>Attempting to gain unauthorized access to our systems.</li>
                  </ul>
                </>
              }
            />

            <Section
              title="5. Intellectual Property"
              content={
                <>
                  <p>
                    All content, features, and functionality (including but not limited to information, software, text,
                    displays, images, video, and audio) are owned by Sync Design Tech or its licensors and are protected
                    by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, or create derivative works of any material from our
                    services without prior written permission.
                  </p>
                </>
              }
            />

            <Section
              title="6. Termination"
              content="We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties."
            />

            <Section
              title="7. Disclaimer of Warranties"
              content="Our services are provided 'as is' and 'as available' without any warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted or error-free."
            />

            <Section
              title="8. Limitation of Liability"
              content="To the fullest extent permitted by law, Sync Design Tech and its affiliates, licensors, service providers, employees, agents, officers, or directors shall not be liable for damages of any kind arising out of or in connection with your use of our services."
            />

            <Section
              title="9. Indemnification"
              content="You agree to defend, indemnify, and hold harmless Sync Design Tech and its affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, or expenses arising out of or relating to your violation of these Terms or your use of our services."
            />

            <Section
              title="10. Governing Law"
              content="These Terms are governed by and construed in accordance with the laws of England and Wales. Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts located in England."
            />

            <Section
              title="11. Changes to Terms"
              content="We may revise these Terms at any time by updating this page. By continuing to use our services after changes are made, you agree to be bound by the revised Terms."
            />

            <Section
              title="12. Contact Information"
              content={
                <>
                  <p>For any questions about these Terms, please contact us at:</p>
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
                Thank you for choosing Sync Design Tech. We appreciate your business and look forward to working with
                you.
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
