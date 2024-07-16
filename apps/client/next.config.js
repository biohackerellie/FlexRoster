import dns from "dns";
import { fileURLToPath } from "url";
import createJiti from "jiti";
import nextra from "nextra";

dns.setDefaultResultOrder("ipv4first");
createJiti(fileURLToPath(import.meta.url))("./src/env");
createJiti(fileURLToPath(import.meta.url))("@local/auth/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: ["@local/server", "@local/auth", "@local/ui"],
  serverExternalPackages: ["@local/utils", "@local/db"],

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

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});
export default withNextra(nextConfig);
