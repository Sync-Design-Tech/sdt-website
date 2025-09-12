import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Sync Design Technologies',
  description:
    'Elevate your digital presence with our comprehensive services: custom software development, UI/UX design, digital marketing, and more.',
  alternates: {
    canonical: '/services',
  },
  keywords: [
    'custom software development',
    'UI UX design agency',
    'digital marketing services',
    'graphic design agency',
    'SEO SEA optimization',
    'hardware solutions',
    'technology agency London',
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
