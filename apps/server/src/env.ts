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
    SERVER_HOST: z.string().min(1),
    SERVER_PORT: z.string(),
    REDIS_HOST: z.string(),
    REDIS_PORT: z.string(),
    EMAIL_API: z.string(),
    EMAIL_API_KEY: z.string(),
    ONEROSTER_CLIENT_ID: z.string(),
    ONEROSTER_CLIENT_SECRET: z.string(),
    ONEROSTER_BASE_URL: z.string(),
    ONEROSTER_APPNAME: z.string(),
    XSRF_TOKEN: z.string(),
    AZURE_STUDENT_GROUP: z.string(),
    AZURE_TEACHER_GROUP: z.string(),
    AZURE_HELPDESK_GROUP: z.string(),
    AZURE_OTHERUSERS_GROUP: z.string(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DIRECT_URL: process.env.DIRECT_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    AZURE_AD_CLIENT_ID: process.env.AZURE_AD_CLIENT_ID,
    AZURE_AD_CLIENT_SECRET: process.env.AZURE_AD_CLIENT_SECRET,
    AZURE_AD_TENANT_ID: process.env.AZURE_AD_TENANT_ID,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    SERVER_HOST: process.env.SERVER_HOST,
    SERVER_PORT: process.env.SERVER_PORT,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    ONEROSTER_CLIENT_ID: process.env.ONEROSTER_CLIENT_ID,
    ONEROSTER_CLIENT_SECRET: process.env.ONEROSTER_CLIENT_SECRET,
    ONEROSTER_BASE_URL: process.env.ONEROSTER_BASE_URL,
    ONEROSTER_APPNAME: process.env.ONEROSTER_APPNAME,
    XSRF_TOKEN: process.env.XSRF_TOKEN,
    EMAIL_API: process.env.EMAIL_API,
    EMAIL_API_KEY: process.env.EMAIL_API_KEY,
    AZURE_STUDENT_GROUP: process.env.AZURE_STUDENT_GROUP,
    AZURE_TEACHER_GROUP: process.env.AZURE_TEACHER_GROUP,
    AZURE_HELPDESK_GROUP: process.env.AZURE_HELPDESK_GROUP,
    AZURE_OTHERUSERS_GROUP: process.env.AZURE_OTHERUSERS_GROUP,
    SECRETARIES: process.env.SECRETARIES,
    PREFERRED_NAMES: process.env.PREFERRED_NAMES,
    EXCLUDED_TEACHERS: process.env.EXCLUDED_TEACHERS,
    SEMESTER_CLASS_NAME: process.env.SEMESTER_CLASS_NAME,
    IS_REDIS_CLUSTER: process.env.IS_REDIS_CLUSTER,
    TECH_DEPARTMENT_EMAILS: process.env.TECH_DEPARTMENT_EMAILS,
  },
  skipValidation:
    !!process.env.CI ||
    !!process.env.SKIP_ENV_VALIDATION ||
    process.env.npm_lifecycle_event === "lint",
});
