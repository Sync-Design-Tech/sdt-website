import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Sync Design Technologies',
  description: 'Discover our passionate team of experts in web development, design, and digital marketing.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
