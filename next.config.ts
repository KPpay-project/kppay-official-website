/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dfwty72r9/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Exclude problematic dependencies from production build
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (!isServer && process.env.NODE_ENV === 'production') {
      // Ignore Sanity Studio in production builds
      config.resolve.alias = {
        ...config.resolve.alias,
        '@sanity/vision': false,
        'sanity': false,
        'next-sanity/studio': false,
      };
    }
    return config;
  },
};

export default nextConfig;
