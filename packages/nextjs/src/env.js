import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  shared: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
  },
  server: {
    ONEROSTER_CLIENT_ID: z.string(),
    ONEROSTER_CLIENT_SECRET: z.string(),
    ONEROSTER_TOKEN_URL: z.string(),
    ONEROSTER_BASE_URL: z.string(),
    XSRF_TOKEN: z.string(),
    LHS_SOURCE_ID: z.string(),
    IC_CLASS_QUERY: z.string(),
  },
  client: {
    NEXT_PUBLIC_HOST: z.string(),
    NEXT_PUBLIC_REDIS_HOST: z.string(),
    NEXT_PUBLIC_REDIS_PORT: z.number(),
  },

  runtimeEnv: {
    ONEROSTER_BASE_URL: process.env.ONEROSTER_BASE_URL,
    ONEROSTER_CLIENT_ID: process.env.ONEROSTER_CLIENT_ID,
    ONEROSTER_CLIENT_SECRET: process.env.ONEROSTER_CLIENT_SECRET,
    ONEROSTER_TOKEN_URL: process.env.ONEROSTER_TOKEN_URL,
    XSRF_TOKEN: process.env.XSRF_TOKEN,
    LHS_SOURCE_ID: process.env.LHS_SOURCE_ID,
    IC_CLASS_QUERY: process.env.IC_CLASS_QUERY,
    NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
    NEXT_PUBLIC_REDIS_HOST: process.env.NEXT_PUBLIC_REDIS_HOST,
    NEXT_PUBLIC_REDIS_PORT: process.env.NEXT_PUBLIC_REDIS_PORT,
  },
  skipValidation:
    !!process.env.CI ||
    !!process.env.SKIP_VALIDATION ||
    process.env.npm_lifecycle_event === 'lint',
});
