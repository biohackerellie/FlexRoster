import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema/schema.ts",
  out: "./src/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DIRECT_URL!,
  },
} satisfies Config;
