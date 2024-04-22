/* eslint-disable no-restricted-properties */
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  shared: {
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),

    RUNTIME: z.enum(["bun", "edge"]).default("bun"),
  },
  server: {
    DIRECT_URL: z.string(),
    DATABASE_URL: z.string(),
    NEXTAUTH_SECRET: z.string().min(1),
    AZURE_AD_CLIENT_ID: z.string().min(1),
    AZURE_AD_CLIENT_SECRET: z.string().min(1),
    AZURE_AD_TENANT_ID: z.string().min(1),
    CLIENT_HOST: z.string().min(1),
    SERVER_HOST: z.string().min(1),
    SERVER_PORT: z.string(),
    REDIS_HOST1: z.string(),
    REDIS_HOST2: z.string(),
    REDIS_HOST3: z.string(),
    REDIS_PORT: z.string(),
    ONEROSTER_CLIENT_ID: z.string(),
    ONEROSTER_CLIENT_SECRET: z.string(),
    ONEROSTER_BASE_URL: z.string(),
    ONEROSTER_TOKEN_URL: z.string(),
    XSRF_TOKEN: z.string(),
    LHS_SOURCE_ID: z.string(),
    IC_CLASS_QUERY: z.string(),
    IC_BASE_QUERY: z.string(),
    WORKING_DIR: z.string().default("./"),
    AZURE_STUDENT_QUERY: z.string(),
    AZURE_TEACHER_QUERY: z.string(),
    AZURE_HELPDESK_QUERY: z.string(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DIRECT_URL: process.env.DIRECT_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    AZURE_AD_CLIENT_ID: process.env.AZURE_AD_CLIENT_ID,
    AZURE_AD_CLIENT_SECRET: process.env.AZURE_AD_CLIENT_SECRET,
    AZURE_AD_TENANT_ID: process.env.AZURE_AD_TENANT_ID,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    CLIENT_HOST: process.env.CLIENT_HOST,
    SERVER_HOST: process.env.SERVER_HOST,
    SERVER_PORT: process.env.SERVER_PORT,
    REDIS_HOST1: process.env.REDIS_HOST1,
    REDIS_HOST2: process.env.REDIS_HOST2,
    REDIS_HOST3: process.env.REDIS_HOST3,
    REDIS_PORT: process.env.REDIS_PORT,
    ONEROSTER_CLIENT_ID: process.env.ONEROSTER_CLIENT_ID,
    ONEROSTER_CLIENT_SECRET: process.env.ONEROSTER_CLIENT_SECRET,
    ONEROSTER_BASE_URL: process.env.ONEROSTER_BASE_URL,
    ONEROSTER_TOKEN_URL: process.env.ONEROSTER_TOKEN_URL,
    XSRF_TOKEN: process.env.XSRF_TOKEN,
    LHS_SOURCE_ID: process.env.LHS_SOURCE_ID,
    IC_CLASS_QUERY: process.env.IC_CLASS_QUERY,
    IC_BASE_QUERY: process.env.IC_BASE_QUERY,
    WORKING_DIR: process.env.WORKING_DIR,
    AZURE_STUDENT_QUERY: process.env.AZURE_STUDENT_QUERY,
    AZURE_TEACHER_QUERY: process.env.AZURE_TEACHER_QUERY,
    AZURE_HELPDESK_QUERY: process.env.AZURE_HELPDESK_QUERY,
  },
  skipValidation:
    !!process.env.CI ||
    !!process.env.SKIP_ENV_VALIDATION ||
    process.env.npm_lifecycle_event === "lint",
});
