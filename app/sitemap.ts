import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://syncdesign.tech';

  const routes: Array<{ url: string; lastModified: string; priority?: number }> = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString(), priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString(), priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date().toISOString(), priority: 1.0 },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString(), priority: 1.0 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date().toISOString(), priority: 0.8 },
    { url: `${baseUrl}/terms-of-services`, lastModified: new Date().toISOString(), priority: 0.8 },
    { url: `${baseUrl}/cookies`, lastModified: new Date().toISOString(), priority: 0.8 },
    { url: `${baseUrl}/book-a-call`, lastModified: new Date().toISOString(), priority: 0.8 },
  ];

  return routes.map(({ url, lastModified, priority }) => ({ url, lastModified, priority }));
}
