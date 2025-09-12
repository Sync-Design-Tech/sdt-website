import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Sync Design Technologies',
  description: 'Get in touch with us to discover how we can help your business grow with our digital solutions.',
  alternates: {
    canonical: '/contact',
  },
  keywords: [
    'contact Sync Design Technologies',
    'contact technology agency',
    'software development contact',
    'digital marketing contact',
    'London tech agency contact',
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
