import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  shared: {
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
  },
  server: {
    DIRECT_URL: z.string(),
    DATABASE_URL: z.string(),
    NEXTAUTH_SECRET: z.string().min(1),
    AZURE_AD_CLIENT_ID: z.string().min(1),
    AZURE_AD_CLIENT_SECRET: z.string().min(1),
    AZURE_AD_TENANT_ID: z.string().min(1),
    REDIS_HOST1: z.string(),
    REDIS_HOST2: z.string(),
    REDIS_HOST3: z.string(),
    REDIS_PORT: z.string(),
  },
  client: {
    NEXT_PUBLIC_PUSHER_APP_HOST: z.string().url(),
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_API_PORT: z.string(),
    NEXT_PUBLIC_HOST: z.string().url(),
    NEXT_PUBLIC_PORT: z.string(),
    NEXT_PUBLIC_REDIS_IP: z.string(),
    NEXT_PUBLIC_REDIS_PORT: z.string(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DIRECT_URL: process.env.DIRECT_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    REDIS_HOST1: process.env.REDIS_HOST1,
    REDIS_HOST2: process.env.REDIS_HOST2,
    REDIS_HOST3: process.env.REDIS_HOST3,
    REDIS_PORT: process.env.REDIS_PORT,
    NEXT_PUBLIC_PUSHER_APP_HOST: process.env.NEXT_PUBLIC_PUSHER_APP_HOST,
    NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
    NEXT_PUBLIC_API_PORT: process.env.NEXT_PUBLIC_API_PORT,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_PORT: process.env.NEXT_PUBLIC_PORT,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    AZURE_AD_CLIENT_ID: process.env.AZURE_AD_CLIENT_ID,
    AZURE_AD_CLIENT_SECRET: process.env.AZURE_AD_CLIENT_SECRET,
    AZURE_AD_TENANT_ID: process.env.AZURE_AD_TENANT_ID,
    NEXT_PUBLIC_REDIS_IP: process.env.NEXT_PUBLIC_REDIS_IP,
    NEXT_PUBLIC_REDIS_PORT: process.env.NEXT_PUBLIC_REDIS_PORT,
  },
  skipValidation:
    !!process.env.CI ||
    !!process.env.SKIP_ENV_VALIDATION ||
    process.env.npm_lifecycle_event === "lint",
});
