/** @type {import('next').NextConfig} */
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

module.exports = nextConfig;
