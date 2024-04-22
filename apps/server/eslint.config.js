import baseConfig, { restrictEnvAccess } from "@local/eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**", "src/scripts/**"],
  },
  ...baseConfig,
  ...restrictEnvAccess,
];
