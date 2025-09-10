import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/context/providers';
import { Ubuntu } from 'next/font/google';
import { siteSchema } from '@/constants/schema';
import { MetadataProvider } from '@/context/metadata';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Sync Design Technologies',
  description:
    'Your All-in-One Digital Partner for technology, marketing, and design solutions for Brand Success | Your Brand, Your Ideas, Your Identity',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sync Design Technologies',
    description:
      'Your All-in-One Digital Partner for Web, Apps, and Brand Success | Your Brand, Your Ideas, Your Identity',
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
      <body className={cn('bg-white antialiased dark:bg-black', ubuntu.variable)}>
        <MetadataProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </MetadataProvider>
      </body>
    </html>
  );
}
