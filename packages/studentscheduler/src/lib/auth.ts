import AzureADProvider from 'next-auth/providers/azure-ad';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from './db';
import { PgTable } from 'drizzle-orm/pg-core';
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
  DefaultUser,
  User,
} from 'next-auth';
import { eq } from 'drizzle-orm';
import { users, Role } from './db/schema';
import { CustomAdapter } from './db/adapter';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: Role;
      email: string;
    } & DefaultSession['user'];
  }
  interface User extends DefaultUser {
    id: string;
    role: Role;
    email: string;
  }
}

declare module 'next-auth/adapters' {
  export interface AdapterUser {
    role: Role;
  }
}

export const adapter = CustomAdapter(db);

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
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
            id: user.id,
            name: user.name,
            role: user.role,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  adapter: adapter,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.name,
          role: user.role,
          email: user.email,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
          name: token.name,
          email: token.email,
        },
      };
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: '/login',
  },
} satisfies NextAuthOptions;
