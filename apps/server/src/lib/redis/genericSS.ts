import { createClient } from "./client";

export async function getSortedSet(key: string) {
  const client = createClient();
  const result = await client.zrange(key, 0, -1);
  await client.quit();
  return result;
}

export async function setSortedSet(key: string, value: string) {
  const client = createClient();
  const result = await client.zadd(key, "*", value);
  await client.quit();
  return result;
}
