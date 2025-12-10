import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
   remotePatterns: [
    {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/thumbnail'
    },
    {
        protocol: 'https',
        hostname: '"api.microlink.io"',
        port: '',
        pathname: '/',
      },
   ]
  }
};

export default nextConfig;
