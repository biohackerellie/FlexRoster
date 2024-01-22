import { createClient } from './redis';

export async function setClassRoomKV(
  key: string,
  value: string,
  expires: number | 86400 // 1 day
): Promise<string | Error> {
  const client = createClient();
  const result = await client.set(`studentEmail:${key}`, value, 'EX', expires);
  return result;
}

export async function getClassRoomKV(key: string): Promise<string | null> {
  const client = createClient();
  const result = await client.get(`studentEmail:${key}`);

  return result;
}
