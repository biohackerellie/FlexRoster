//@ts-nocheck - ignore typescript errors

import dns from "dns";
import { fileURLToPath } from "url";
import withMdx from "@next/mdx";
// import createJiti from "jiti";
import rehypePrettyCode from "rehype-pretty-code";
import remarkToc from "remark-toc";
import { getSingletonHighlighter as getHighlighter } from "shiki";

dns.setDefaultResultOrder("ipv4first");
// createJiti(fileURLToPath(import.meta.url))("./src/env");
// createJiti(fileURLToPath(import.meta.url))("@local/auth/env");

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
    rehypePlugins: [
      [
        rehypePrettyCode,
        /** @type {import("rehype-pretty-code").Options} */
        ({
          theme: { dark: "one-dark-pro", light: "min-light" },
          getHighlighter,
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className?.push("line--highlighted");
          },
          onVisitHighlightedWord(node, id) {
            node.properties.className = ["word"];
            node.properties["data-word-id"] = id;
          },
        }),
      ],
    ],
  },
})(nextConfig);
