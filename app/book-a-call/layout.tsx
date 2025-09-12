import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Call | SDT',
  description: 'Arrange a meeting with Sync Design Technologies to discuss your software, design, or marketing needs.',
  alternates: {
    canonical: '/book-a-call',
  },
  keywords: [
    'book a call',
    'schedule meeting',
    'consultation',
    'software consultation',
    'design consultation',
    'marketing consultation',
  ],
};

export default function BookACallLayout({ children }: { children: React.ReactNode }) {
  return children;
}
