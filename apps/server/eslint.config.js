import baseConfig, { restrictEnvAccess } from "@local/eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**", "src/scripts/**"],
    rules: {
      "@typescript-eslint/prefer-optional-chain": "off",
    },
  },
  ...baseConfig,
  ...restrictEnvAccess,
];
