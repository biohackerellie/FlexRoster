import type { DefaultSession, NextAuthConfig } from "next-auth";
import azureAd from "next-auth/providers/azure-ad";
import Google from "next-auth/providers/google";

import { env } from "../env";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      roles: "student" | "teacher" | "admin" | "secretary";
    } & DefaultSession["user"];
  }
  interface JWT {
    id: string;
    roles: "student" | "teacher" | "admin" | "secretary";
  }
  interface User {
    id?: string | undefined;
    roles: "student" | "teacher" | "admin" | "secretary";
  }
}

export default {
  providers: [
    env.DEMO
      ? Google({
          clientId: env.GOOGLE_CLIENT_ID,
          clientSecret: env.GOOGLE_CLIENT_SECRET,
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code",
            },
          },
          allowDangerousEmailAccountLinking: true,
        })
      : azureAd({
          clientId: env.AZURE_AD_CLIENT_ID,
          clientSecret: env.AZURE_AD_CLIENT_SECRET,
          tenantId: env.AZURE_AD_TENANT_ID,
          profile(profile) {
            return {
              id: profile.oid,
              name: profile.name,
              email: profile.email,
              roles: profile.roles[0] || "student",
            };
          },
          allowDangerousEmailAccountLinking: true,
        }),
  ],

  trustHost: true,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    jwt({ token, user, profile }) {
      if (user) {
        token.id = user.id as string;
        token.email = user.email;
        token.name = user.name;
        // @ts-expect-error - roles is not defined in the user object because authjs is garbage
        token.roles = profile?.roles[0] || "student";
      }
      return token;
    },

    session({ session, token }) {
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.name = token.name as string;
      session.user.roles = token.roles as typeof session.user.roles;

      return session;
    },
  },
} satisfies NextAuthConfig;
