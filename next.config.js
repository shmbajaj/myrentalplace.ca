/** @type {import('next').NextConfig} */
// TODO: remove these temporary fixes
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname:
          '80fb29193e49ee2fd504-d0f6d041df1ee747e1fc6df6df0d002b.ssl.cf1.rackcdn.com',
      },
      {
        protocol: 'https',
        port: '',
        hostname: 'bit.ly',
      },
      {
        protocol: 'https',
        port: '',
        hostname: 'flowbite.s3.amazonaws.com',
        pathname: '/docs/gallery/square/**',
      },
    ],
  },
};

module.exports = nextConfig;
