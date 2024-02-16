import { createClient } from ".";

export async function getInbox(chatId: string) {
  const client = createClient();
  return await client.zrange(`chat:${chatId}:messages`, "0", "-1");
}

export async function sendToInbox(
  chatId: string,
  timestamp: number,
  message: string,
) {
  const client = createClient();
  return await client.zadd(
    `chat:${chatId}:messages`,
    timestamp,
    JSON.stringify(message),
  );
}
