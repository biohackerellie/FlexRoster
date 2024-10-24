import { cookies } from "next/headers";
import { cache } from "react";
import type { SessionValidationResult } from "@local/utils";
import { client } from "../eden";
import { MicrosoftEntraId } from "arctic";

export const getSession = cache(async (): Promise<SessionValidationResult> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value ?? null;
  if (token === null) {
    return { session: null, user: null };
  }
  const { data } = await client.api.auth.validate.post({ token });
  return data!;
});

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
