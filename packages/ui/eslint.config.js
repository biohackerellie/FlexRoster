import baseConfig from "@local/eslint-config/base";
import reactConfig from "@local/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["node_modules"],
  },
  ...baseConfig,
  ...reactConfig,
];
