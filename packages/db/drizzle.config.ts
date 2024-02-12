import type { Config } from 'drizzle-kit';

export default {
  schema: './src/schema',
  out: './dist',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DIRECT_URL as string,
  },
} satisfies Config;
