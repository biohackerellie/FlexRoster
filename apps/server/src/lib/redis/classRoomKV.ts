import { createClient } from ".";

export async function setClassRoomKV(
  key: string,
  value: string,
): Promise<string | Error> {
  const client = createClient();
  const result = await client.set(`studentEmail:${key}`, value, "EX", 86400);
  await client.quit();
  return result;
}

export async function getClassRoomKV(key: string): Promise<string | null> {
  const client = createClient();
  const result = await client.get(`studentEmail:${key}`);
  await client.quit();
  return result;
}



export async function getRequestKV(key: string): Promise<string | null> {
  const client = createClient();
  const result = await client.get(`request:${key}`);
  await client.quit();
  return result;
}
