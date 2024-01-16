import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DIRECT_URL: z.string().url(),
    DATABASE_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string().min(1),
    AZURE_AD_CLIENT_ID: z.string().min(1),
    AZURE_AD_CLIENT_SECRET: z.string().min(1),
    AZURE_AD_TENANT_ID: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_API_PORT: z.number().min(999).max(65535),
    NEXT_PUBLIC_HOST: z.string().url(),
    NEXT_PUBLIC_PORT: z.number().min(999).max(65535),
    NEXT_PUBLIC_NEXTAUTH_URL: z.string().url(),
    NEXT_PUBLIC_REDIS_IP: z.string().ip(),
    NEXT_PUBLIC_REDIS_PORT: z.number().min(999).max(65535),
  },
  runtimeEnv: {
    DIRECT_URL: process.env.DIRECT_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
    NEXT_PUBLIC_API_PORT: process.env.NEXT_PUBLIC_API_PORT,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_PORT: process.env.NEXT_PUBLIC_PORT,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_NEXTAUTH_URL: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
    AZURE_AD_CLIENT_ID: process.env.AZURE_AD_CLIENT_ID,
    AZURE_AD_CLIENT_SECRET: process.env.AZURE_AD_CLIENT_SECRET,
    AZURE_AD_TENANT_ID: process.env.AZURE_AD_TENANT_ID,
    NEXT_PUBLIC_REDIS_HOST: process.env.NEXT_PUBLIC_REDIS_HOST,
    NEXT_PUBLIC_REDIS_PORT: process.env.NEXT_PUBLIC_REDIS_PORT,
  },
});
