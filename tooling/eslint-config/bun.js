/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: ["plugin:@next/next/core-web-vitals"],
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "@typescript-eslint/require-await": "off",
    },
  },
];
