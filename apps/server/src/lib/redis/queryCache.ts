import { createClient } from "./client";

export function getHashKey(_filter: string | null | undefined) {
  const hasher = new Bun.CryptoHasher("sha256");
  let retKey = "";
  if (_filter) {
    const text = JSON.stringify(_filter);
    retKey = hasher.update(text).digest("hex");
  }
  return "CACHE_" + retKey;
}

export async function GetCache(hashKey: string) {
  const client = createClient();
  const data = await client.get(hashKey);
  let result = null;
  if (data) {
    result = data;
  }

  await client.quit();
  return result;
}

export async function SetCache<TData>(
  hashKey: string,
  data: TData,
): Promise<void> {
  const client = createClient();
  await client.set(hashKey, JSON.stringify(data), "EX", 120);
  await client.quit();
}
