import type { DefaultSession, User } from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from 'next-auth';
import { db, eq, users, Role } from '@student_scheduler/db';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
    };
    roles: Role;
  }
  interface CustomUser extends User {
    id: string;
    role: Role;
    email: string;
  }
}
export type { Session } from 'next-auth';
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID as string,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
      tenantId: process.env.AZURE_AD_TENANT_ID,
      //@ts-expect-error
      authorizationUrl: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/oauth2/v2.0/authorize`,
      async authorize(credentials: { email: string }) {
        const user = await db
          .select()
          .from(users)
          .where(eq(users.email, credentials.email))
          .then((res) => res[0] ?? null);
        if (user) {
          console.log('user: ', user);
          return {
            email: user.email,

            name: user.name,
            role: user.role,
          };
        } else {
          return null;
        }
      },
      async profile(profile) {
        return {
          ...profile,
          id: profile.oid,
          email: profile.email,
          name: profile.name,
          role: profile.roles[0] as Role,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, account }) => {
      if (account?.id_token) {
        const [header, payload, sig] = account.id_token.split('.');
        const idToken = JSON.parse(
          Buffer.from(payload, 'base64').toString('utf8')
        );

        token.roles = idToken.roles;
      }
      return token;
    },
    session: async ({ session, user, token }) => {
      // @ts-expect-error
      session.roles = token.roles[0] as Role;
      return session;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: '/login',
  },
});
