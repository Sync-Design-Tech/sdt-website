import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Logo } from './logo';
import { CONSTANTS } from '@/constants/links';

export function Footer() {
  const pages = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Services',
      href: '/services',
      altHref: '/#services',
    },
    {
      title: 'About us',
      href: '/about',
      altHref: '/#aboutus',
    },
    {
      title: 'Contact',
      href: '/contact',
      altHref: '/#contact',
    },
    // {
    //   title: "Blog",
    //   href: "#",
    // },
  ];

  const socials = [
    // {
    //   title: "Facebook",
    //   href: "#",
    // },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/syncdesigntech/?igsh=MW9iMDh5YWNydm1yNA%3D%3D',
    },
    {
      title: 'Github',
      href: 'https://github.com/Sync-Design-Tech',
    },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/company/sync-design-tech/?viewAsMember=true',
    },
  ];
  const legals = [
    {
      title: 'Privacy Policy',
      href: '/privacy-policy',
    },
    {
      title: 'Terms of Service',
      href: '/terms-of-services',
    },
    {
      title: 'Cookie Policy',
      href: '/cookies',
    },
  ];

  const signups = [
    {
      title: 'Sign Up',
      href: '/login',
    },
    {
      title: 'Login',
      href: '/login',
    },
    {
      title: 'Book a demo',
      href: '/book-a-call',
    },
  ];
  return (
    <div className="relative w-full overflow-hidden border-t border-neutral-100 bg-white px-8 py-20 dark:border-white/[0.1] dark:bg-neutral-950">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between text-sm text-neutral-500 sm:flex-row md:px-8">
        <div>
          <div className="mb-4 mr-0 md:mr-4 md:flex">
            <Logo />
          </div>

          <div className="ml-2 mt-2">&copy; copyright Sync Design Tech Limited 2024. All rights reserved.</div>
        </div>
        <div className="mt-10 grid grid-cols-2 items-start gap-10 sm:mt-0 md:mt-0 lg:grid-cols-4">
          <div className="flex w-full flex-col justify-center space-y-4">
            <p className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300">
              Pages
            </p>
            <ul className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300">
              {pages.map((page, idx) => (
                <li key={'pages' + idx} className="list-none">
                  <Link className="hover:text-text-neutral-800 transition-colors" href={page.href}>
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <p className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300">
              Socials
            </p>
            <ul className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300">
              {socials.map((social, idx) => (
                <li key={'social' + idx} className="list-none">
                  <Link className="hover:text-text-neutral-800 transition-colors" href={social.href}>
                    {social.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <p className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300">
              Legal
            </p>
            <ul className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300">
              {legals.map((legal, idx) => (
                <li key={'legal' + idx} className="list-none">
                  <Link className="hover:text-text-neutral-800 transition-colors" href={legal.href}>
                    {legal.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <p className="hover:text-text-neutral-800 font-bold text-neutral-600 transition-colors dark:text-neutral-300">
              Register
            </p>
            <ul className="hover:text-text-neutral-800 list-none space-y-4 text-neutral-600 transition-colors dark:text-neutral-300">
              {signups.map((auth, idx) => (
                <li key={'auth' + idx} className="list-none">
                  <Link className="hover:text-text-neutral-800 transition-colors" href={auth.href}>
                    {auth.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="inset-x-0 mt-20 bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-center text-5xl font-bold uppercase text-transparent dark:from-neutral-950 dark:to-neutral-800 md:text-9xl lg:text-[12rem] xl:text-[13rem]">
        {/* <span style={{fontFamily:"bauhaus", fontWeight:".2rem"}}> */}
        Sync Design
        {/* </span> */}
      </p>
    </div>
  );
}
