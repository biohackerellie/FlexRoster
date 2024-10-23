import { MicrosoftEntraId } from "arctic";

const tenantId = process.env.AZURE_AD_TENANT_ID!;
const clientId = process.env.AZURE_AD_CLIENT_ID!;
const clientSecret = process.env.AZURE_AD_CLIENT_SECRET!;
const redirectUri = process.env.CLIENT_HOST + "/api/auth/callback/azure-ad";

export const entraId = new MicrosoftEntraId(
  tenantId,
  clientId,
  clientSecret,
  redirectUri,
);
