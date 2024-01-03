import './src/env.js';
import '@student_scheduler/auth/env';

/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: true,
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === 'production',
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: [
    '@student_scheduler/auth',
    '@student_scheduler/api',
    '@student_scheduler/db',
  ],
  experimental: {
    serverComponentsExternalPackages: ['@trpc/server'],
  },

  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};
