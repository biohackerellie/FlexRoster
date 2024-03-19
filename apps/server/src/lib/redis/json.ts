import { createClient } from "./client";

/**
 * Function to set passed in JSON data to Redis
 * @param key - the key to set the data to
 * @param data - the json data to set
 */

export async function setJSON(
  key: string,
  data: any,
  path?: string,
): Promise<void> {
  const client = createClient();
  const pathString = path ?? "$";
  await client.call("JSON.SET", key, pathString, JSON.stringify(data));
  await client.quit();
}

export async function getJSON<T>(key: string, path?: string): Promise<T> {
  const client = createClient();
  const pathString = path ?? "$.*";
  const data = await client.call("JSON.GET", key, pathString);
  await client.quit();
  return data as T;
}

export async function editJson(
  key: string,
  data: string,
  path: string,
): Promise<void> {
  const client = createClient();

  await client.call("JSON.SET", key, path, data);
  await client.quit();
}

export async function deleteJson(key: string, path: string) {
  const client = createClient();
  await client.call("JSON.DEL", key, path);
  await client.quit();
}
