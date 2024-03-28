import type { NextAuthConfig } from "next-auth";
import azureAd from "next-auth/providers/azure-ad";

import { env } from "../env";

export default {
  providers: [
    azureAd({
      clientId: env.AZURE_AD_CLIENT_ID,
      clientSecret: env.AZURE_AD_CLIENT_SECRET,
      tenantId: env.AZURE_AD_TENANT_ID,
      profile(profile) {
        return {
          id: profile.oid,
          name: profile.name,
          email: profile.email,
          role: profile.roles[0] || "student",
        };
      },
      allowDangerousEmailAccountLinking: true,
    }),
  ],

  trustHost: true,
  debug: true,
  basePath: "/api/auth",

  callbacks: {
    async redirect({ url, baseUrl }) {
      baseUrl ?? (baseUrl = "/");
      return baseUrl;
    },

    session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.roles = token.roles as typeof session.user.roles;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
