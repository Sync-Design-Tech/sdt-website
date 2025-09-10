export const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.syncdesign.tech/#website',
      url: 'https://www.syncdesign.tech/',
      name: 'Sync Design Technologies',
      description:
        'Your All-in-One Digital Partner for Web, Apps, and Brand Success | Your Brand, Your Ideas, Your Identity',
      publisher: { '@id': 'https://www.syncdesign.tech/#organization' },
      inLanguage: 'en',
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.syncdesign.tech/#organization',
      name: 'Sync Design Technologies',
      url: 'https://www.syncdesign.tech/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.syncdesign.tech/icon.png',
      },
      email: 'info@syncdesign.tech',
      telephone: '+44 7490 462682',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'info@syncdesign.tech',
          telephone: '+44 7490 462682',
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
      '@id': 'https://www.syncdesign.tech/#professionalservice',
      name: 'Sync Design Technologies',
      url: 'https://www.syncdesign.tech/',
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
      provider: { '@id': 'https://www.syncdesign.tech/#organization' },
      telephone: '+44 7490 462682',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.syncdesign.tech/icon.png',
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
