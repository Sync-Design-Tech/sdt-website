/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/:path*',
      has: [
        {
          type: 'host',
          value: 'syncdesign.tech',
        },
      ],
      destination: 'https://www.syncdesign.tech/:path*',
      permanent: true,
    },
  ],
  images: {
    remotePatterns: [
      { hostname: 'assets.aceternity.com' },
      { hostname: 'images.unsplash.com' },
      { hostname: 's3maintenance.co.uk' },
      { hostname: 's3websitedata.s3.eu-west-2.amazonaws.com' },
      { hostname: 'made4living.co.uk' },
      { hostname: 'cassvensi.co.uk' },
    ],
  },
};

export default nextConfig;
