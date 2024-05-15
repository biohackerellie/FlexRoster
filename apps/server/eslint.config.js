import baseConfig, { restrictEnvAccess } from "@local/eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [
      "dist/**",
      "src/scripts/**",
      "bin/**",
      "node_modules/**",
      "./src/scripts/**/*",
      "./src/scripts/nightly/**",
      "src/scripts/nightly/**",
      "./src/lib/utils/formatters.ts",
      "apps/server/src/scripts/nightly/syncClassrooms.ts,",
    ],
    rules: {
      "@typescript-eslint/prefer-optional-chain": "off",
    },
  },
  ...baseConfig,
  ...restrictEnvAccess,
];
