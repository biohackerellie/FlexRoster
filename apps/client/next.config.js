/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['eden'],
  // experimental: {
  //   // this includes files from the monorepo base two directories up
  //   outputFileTracingRoot: path.join(__dirname, '../../'),
  // },
};

module.exports = nextConfig;
