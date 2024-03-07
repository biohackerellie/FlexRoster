import { createClient } from ".";

async function setToken(
  key: string,
  value: string,
  expires: number | 3600,
): Promise<string | Error> {
  const client = createClient();
  const result = await client.set(key, value, "EX", expires);
  client.quit();
  return result;
}

async function getToken(key: string): Promise<string | null> {
  const client = createClient();
  const result = await client.get(key);
  client.quit();
  return result;
}

export { setToken, getToken };
