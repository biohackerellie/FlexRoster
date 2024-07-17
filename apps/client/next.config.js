import dns from "dns";
import { fileURLToPath } from "url";
import withMdx from "@next/mdx";
import createJiti from "jiti";
import remarkToc from "remark-toc";

dns.setDefaultResultOrder("ipv4first");
createJiti(fileURLToPath(import.meta.url))("./src/env");
createJiti(fileURLToPath(import.meta.url))("@local/auth/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  redirects: async () => [
    {
      source: "/help",
      destination: "/help/introduction",
      permanent: true,
    },
  ],
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

export default withMdx({
  options: {
    remarkPlugins: [
      [
        remarkToc,
        /** @type {import("remark-toc").Options} */
        ({
          tight: true,
        }),
      ],
    ],
  },
})(nextConfig);
