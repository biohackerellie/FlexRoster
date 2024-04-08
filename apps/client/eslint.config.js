import baseConfig from "@local/eslint-config/base";
import nextjsConfig from "@local/eslint-config/nextjs";
import reactConfig from "@local/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**", "node_modules/**", "src/hooks/**", "*.config.*"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
];
