import NextAuth from 'next-auth';
import 'auth/core/types';
import azureAd from 'next-auth/providers/azure-ad';
import { env } from '../env';

declare module 'next-auth' {
  interface Session {
    roles: string;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  secret: env.NEXTAUTH_SECRET,

  providers: [
    azureAd({
      clientId: env.AZURE_AD_CLIENT_ID,
      clientSecret: env.AZURE_AD_CLIENT_SECRET,
      tenantId: env.AZURE_AD_TENANT_ID,
      async profile(profile) {
        return {
          ...profile,
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
    async jwt({ token, account }) {
      if (account?.id_token) {
        const [header, payload, sig] = account.id_token.split('.');
        if (!payload) {
          throw new Error('No payload in id_token');
        }
        const idToken = JSON.parse(
          Buffer.from(payload, 'base64').toString('utf8')
        );
        token.roles = idToken.roles;
      }
      return token;
    },

    async session({ session, token }) {
      // @ts-expect-error
      session.roles = token.roles[0];
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 5 * 24 * 60 * 60, // 5 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
});
