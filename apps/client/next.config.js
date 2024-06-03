import dns from "dns";
import { fileURLToPath } from "url";
import createJiti from "jiti";

dns.setDefaultResultOrder("ipv4first");
createJiti(fileURLToPath(import.meta.url))("./src/env");
createJiti(fileURLToPath(import.meta.url))("@local/auth/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: ["@local/server", "@local/db", "@local/auth", "@local/ui"],
  serverExternalPackages: ["@local/utils"],

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: {
    ppr: true,
    reactCompiler: {
      compilationMode: "annotation",
    },
    after: true,
  },
};

export default nextConfig;
