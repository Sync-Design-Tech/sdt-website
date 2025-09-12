import { Login } from '@/components/login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Log in | SDT',
  description:
    "Log in to use SDT's AI tools. Enhance your web design projects with our advanced AI solutions tailored for web design agencies.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: '/login',
  },
  keywords: ['login', 'account access', 'SDT login'],
};

export default function LoginPage() {
  return (
    <main className="">
      <Login />
    </main>
  );
}
