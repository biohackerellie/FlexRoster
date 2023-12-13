import NextAuth from 'next-auth';
import AzureAD from '@auth/core/providers/azure-ad';
import { DrizzleAdapter } from '@auth/drizzle-adapter';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    AzureAD({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
      //@ts-expect-error
      authorizationUrl: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/oauth2/v2.0/authorize`,
    }),
  ],
});
