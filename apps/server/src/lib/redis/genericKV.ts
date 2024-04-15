import { createClient } from "./client";

/**
 * Generic functions to set and get basic key value pairs in Redis
 * @param key - the key to set the data to
 * @returns - @type string or @type null
 */

export async function setKV(
  key: string,
  value: string,
): Promise<string | Error> {
  const client = createClient();
  const result = await client.set(key, value);
  await client.quit();
  return result;
}

export async function getKV(key: string): Promise<string | null> {
  const client = createClient();
  const result = await client.get(key);
  await client.quit();
  return result;
}

export async function getKeys(pattern: string) {
  const client = createClient();
  const result = await client.keys(pattern);
  await client.quit();
  return result;
}

export async function clearKV(key: string): Promise<number> {
  const client = createClient();
  const result = await client.del(key);
  await client.quit();
  return result;
}
