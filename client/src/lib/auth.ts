import NextAuth from 'next-auth';
import azureAd from 'next-auth/providers/azure-ad';
import { env } from '@/env.mjs';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  secret: env.NEXTAUTH_SECRET,
  providers: [
    azureAd({
      clientId: env.AZURE_AD_CLIENT_ID,
      clientSecret: env.AZURE_AD_CLIENT_SECRET,
      tenantId: env.AZURE_AD_TENANT_ID,
    }),
  ],
});
