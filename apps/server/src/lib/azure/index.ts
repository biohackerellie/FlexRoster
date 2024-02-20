import { env } from "~/env";
import { getToken, setToken } from "../redis/";
import { fetcher } from "../utils";

interface TokenResponse {
  access_token: string;
  expires_in: number;
}

/**
 * Authenticates with Azure AD and returns the access token.
 * If a token is already stored in Redis, it will be used.
 * Otherwise, a new token will be fetched and stored in Redis.
 * @returns The access token for Azure AD.
 */
export async function azureAuth(): Promise<string> {
  const token = await getToken("azureToken");

  if (token === null) {
    const newToken = await fetchNewToken();
    await setToken("azureToken", newToken.access_token, newToken.expires_in);
    return newToken.access_token;
  } else {
    return token;
  }
}

/**
 * Fetches a new access token from Azure AD.
 * @returns The token response containing the access token and expiration time.
 */
async function fetchNewToken(): Promise<TokenResponse> {
  const body = new URLSearchParams({
    client_id: env.AZURE_AD_CLIENT_ID,
    scope: "https://graph.microsoft.com/.default",
    client_secret: env.AZURE_AD_CLIENT_SECRET,
    grant_type: "client_credentials",
  });
  const data = await fetcher<TokenResponse>(
    `https://login.microsoftonline.com/${env.AZURE_AD_TENANT_ID}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    },
  );
  return data;
}

export default azureAuth;
