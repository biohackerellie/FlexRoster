import baseConfig from "@local/eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**", "src/constants.ts"],
  },
  ...baseConfig,
];
