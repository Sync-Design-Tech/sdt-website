import { PHONE_NUMBER } from './constants';

export const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://syncdesign.tech/#website',
      url: 'https://syncdesign.tech/',
      name: 'Sync Design Technologies',
      description:
        'Your All-in-One Digital Partner for Web, Apps, and Brand Success | Your Brand, Your Ideas, Your Identity',
      publisher: { '@id': 'https://syncdesign.tech/#organization' },
      inLanguage: 'en',
    },
    {
      '@type': 'Organization',
      '@id': 'https://syncdesign.tech/#organization',
      name: 'Sync Design Technologies',
      url: 'https://syncdesign.tech/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://syncdesign.tech/icon.png',
      },
      email: 'info@syncdesign.tech',
      telephone: `${PHONE_NUMBER}`,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'info@syncdesign.tech',
          telephone: `${PHONE_NUMBER}`,
          availableLanguage: ['en'],
        },
      ],
      sameAs: [
        'https://github.com/Sync-Design-Tech',
        'https://www.linkedin.com/company/sync-design-tech/',
        'https://www.instagram.com/syncdesigntech/',
      ],
      foundingDate: '2020',
      slogan: 'Outsource Your Digital Transformation, Leave the Heavy Lifting to us.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '71-75 Shelton Street, Covent Garden',
        addressLocality: 'London',
        postalCode: 'WC2H 9JQ',
        addressCountry: 'GB',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://syncdesign.tech/#professionalservice',
      name: 'Sync Design Technologies',
      url: 'https://syncdesign.tech/',
      areaServed: 'GB',
      availableLanguage: ['en'],
      serviceType: [
        'Custom software development',
        'UI/UX design',
        'Digital marketing',
        'Graphic design',
        'SEO/SEA optimization',
        'Hardware solutions',
      ],
      provider: { '@id': 'https://syncdesign.tech/#organization' },
      telephone: `${PHONE_NUMBER}`,
      logo: {
        '@type': 'ImageObject',
        url: 'https://syncdesign.tech/icon.png',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '71-75 Shelton Street, Covent Garden',
        addressLocality: 'London',
        postalCode: 'WC2H 9JQ',
        addressCountry: 'GB',
      },
    },
  ],
} as const;
