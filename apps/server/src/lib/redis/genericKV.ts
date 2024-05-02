import { getHashKey } from "~/lib/utils";
import { createClient } from "./client";

/**
 * Generic functions to set and get basic key value pairs in Redis
 * @param key - the key to set the data to
 * @returns - @type string or @type null
 */

export async function setKV(
  key: string,
  value: string,
  ex?: number,
): Promise<string | Error> {
  const hashedKey = getHashKey(key);
  const client = createClient();
  const expires = ex ? ex : 1200;
  const result = await client.set(hashedKey, value, "EX", expires);
  await client.quit();
  return result;
}

export async function getKV(key: string): Promise<string | null> {
  const hashedKey = getHashKey(key);
  const client = createClient();
  const result = await client.get(hashedKey);
  await client.quit();
  return result;
}

export async function getKeys(pattern: string) {
  const client = createClient();
  const result = await client.keys(pattern);
  await client.quit();
  return result;
}

export async function clearKV(key: string): Promise<void> {
  const hashedKey = getHashKey(key);
  const client = createClient();
  let exists = false;
  if (await client.exists(hashedKey)) {
    exists = true;
    await client.del(hashedKey);
  }
  console.log(exists);

  await client.quit();
  return;
}
