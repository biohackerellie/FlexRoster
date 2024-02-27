import { Message, messageValidator } from "@local/validators";

import { createClient } from ".";

export async function getInbox(chatId: string) {
  const client = createClient();
  console.log("chatId", chatId);
  return await client.zrange(`chat:${chatId}:messages`, "0", "-1");
}

export async function sendToInbox(
  chatId: string,

  message: any,
) {
  const messageData = messageValidator.parse(message);
  const client = createClient();
  const parsedMessage = JSON.stringify(messageData);

  return await client.zadd(
    `chat:${chatId}:messages`,
    messageData.timestamp,
    parsedMessage,
  );
}
