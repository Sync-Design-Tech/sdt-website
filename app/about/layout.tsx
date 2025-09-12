import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Sync Design Technologies',
  description: 'Discover our passionate team of experts in web development, design, and digital marketing.',
  alternates: {
    canonical: '/about',
  },
  keywords: [
    'about Sync Design Technologies',
    'our team',
    'technology agency London',
    'software company team',
    'digital agency about',
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
