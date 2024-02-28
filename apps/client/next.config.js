import { fileURLToPath } from "url";
import _jiti from "jiti";
import dns from "dns";


dns.setDefaultResultOrder('ipv4first');
const jiti = _jiti(fileURLToPath(import.meta.url));
jiti("./src/env");
jiti("@local/auth/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: ["@local/eden","@local/db", "@local/auth"],
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  webpack: (config, { webpack }) => {

    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
      }),
    );

    return config;
  },
  experimental: {
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;
