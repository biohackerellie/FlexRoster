import NextAuth from 'next-auth';
import type { DefaultSession } from 'next-auth';
import azureAd from 'next-auth/providers/azure-ad';
import { env } from '../env';
import { db, InferSelectModel, pgTable, PgTableFn, schema } from '@local/db';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { Adapter } from '@auth/core/adapters';
export type { Session } from 'next-auth';

const { users, accounts, sessions, verificationTokens } = schema;
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      roles: string;
    } & DefaultSession['user'];
  }
}

declare module '@auth/core/adapters' {
  export interface AdapterUser extends InferSelectModel<typeof users> {
    role: 'student' | 'teacher' | 'admin' | 'secretary';
  }
}

type TableFnParams = Parameters<PgTableFn>;

function dumbAdapter(
  name: TableFnParams[0],
  columns: TableFnParams[1],
  extraConfig: TableFnParams[2]
) {
  switch (name) {
    case 'user':
      return users;
    case 'account':
      return accounts;
    case 'session':
      return sessions;
    case 'verificationToken':
      return verificationTokens;
    default:
      return pgTable(name, columns, extraConfig);
  }
}
export const adapter = DrizzleAdapter(
  db,
  dumbAdapter as PgTableFn<undefined>
) as Adapter;

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: env.NEXTAUTH_SECRET,
  adapter: adapter,
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
          role: profile.roles[0],
        };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },

  callbacks: {
    async redirect({ url, baseUrl }) {
      baseUrl ?? (baseUrl = '/');
      return baseUrl;
    },

    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: session.user.id,
        roles: session.user.role,
        email: session.user.email,
        name: session.user.name,
      },
    }),
  },
});
