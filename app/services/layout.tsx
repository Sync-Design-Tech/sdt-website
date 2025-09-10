import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Sync Design Technologies',
  description:
    'Elevate your digital presence with our comprehensive services: custom software development, UI/UX design, digital marketing, and more.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
