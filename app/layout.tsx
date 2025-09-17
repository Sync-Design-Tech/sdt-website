import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/context/providers';
import { Ubuntu } from 'next/font/google';
import { siteSchema } from '@/constants/schema';
import { MetadataProvider } from '@/context/metadata';
import { LayoutWrapper } from './layout-wrapper';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.syncdesign.tech'),
  title: 'Sync Design Technologies',
  description:
    'Your All-in-One Digital Partner for technology, marketing, and design solutions for Brand Success | Your Brand, Your Ideas, Your Identity',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'technology agency London',
    'custom software development',
    'UI UX design',
    'digital marketing agency',
    'branding and design',
    'Sync Design Technologies',
  ],
  robots: {
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Sync Design Technologies',
    description:
      'Your All-in-One Digital Partner for Web, Apps, and Brand Success | Your Brand, Your Ideas, Your Identity',
    type: 'website',
    url: 'https://www.syncdesign.tech/',
    siteName: 'Sync Design Technologies',
    images: [
      {
        url: '/logos/sdt-open-graph.png',
        width: 1200,
        height: 630,
        alt: 'Sync Design Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sync Design Technologies',
    description:
      'Your All-in-One Digital Partner for Web, Apps, and Brand Success | Your Brand, Your Ideas, Your Identity',
    images: ['/logos/sdt-open-graph.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
      </head>
      <body className={cn('bg-white antialiased dark:bg-black', ubuntu.variable)} suppressHydrationWarning>
        <MetadataProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <LayoutWrapper>{children}</LayoutWrapper>
          </ThemeProvider>
        </MetadataProvider>
      </body>
    </html>
  );
}
