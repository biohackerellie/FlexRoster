import type { Config } from "tailwindcss";

import baseConfig from "@local/tailwind-config/web";

export default {
  content: ["./src/**/*.tsx"],
  presets: [baseConfig],
} satisfies Config;