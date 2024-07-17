import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import baseConfig from "@local/tailwind-config/web";

export default {
  content: [
    ...baseConfig.content,
    "../../packages/ui/**/*.{ts,tsx}",
    "./mdx-components.tsx",
  ],
  presets: [baseConfig],
  theme: {
    extend: {
      fontFamily: {
        cal: ["var(--font-cal)", ...fontFamily.sans],
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
    },
  },
} satisfies Config;
