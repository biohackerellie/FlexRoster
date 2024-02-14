import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema/schema.ts",
  out: "./src/drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DIRECT_URL as string,
  },
} satisfies Config;
