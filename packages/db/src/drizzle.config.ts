import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema/schema.ts",
  out: "./src/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.PGHOST!,
    port: parseInt(process.env.PGPORT!),
    user: process.env.PGUSER!,
    password: process.env.PGPASSWORD!,
    database: process.env.PGDATABASE!,
    ssl: false,
  },
} satisfies Config;
