import { createClient } from "./client";

export async function getHash(key: string) {
  const client = createClient();
  const result = await client.hgetall(key);
  await client.quit();
  return result;
}

export async function setHashHM(key: string, value: any) {
  const client = createClient();
  const result = await client.hmset(key, value);
  if (result !== "OK") {
    throw new Error("Failed to set hash");
  }
  await client.quit();
  return result;
}

export async function setHash(key: string, field: string, value: string) {
  const client = createClient();
  const result = await client.hset(key, field, value);
  await client.quit();
  return result;
}
