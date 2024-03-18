import { NotFoundError } from "elysia";

import { messageValidator } from "@local/validators";

import { createClient } from ".";

export async function getInbox(chatId: string) {
  try {
    const client = createClient();

    const messages = await client.xrange(`chat:${chatId}:messages`, "0", "+");
    await client.quit();
    const transformedMessages = messages.map(
      ([id, fieldsArray]: [string, string[]]) => {
        const messageObject: Record<string, any> = {};
        for (let i = 0; i < fieldsArray.length; i += 2) {
          messageObject[fieldsArray[i]!] = fieldsArray[i + 1];
        }
        return {
          id,
          ...messageObject,
        };
      },
    );
    console.log(transformedMessages);
    return transformedMessages;
  } catch (e) {
    console.log(e);
    throw new NotFoundError();
  }
}

export async function sendToInbox(chatId: string, message: any) {
  const messageData = messageValidator.parse(message);
  const client = createClient();
  const messageId = await client.xadd(
    `chat:${chatId}:messages`,
    "*",
    "senderId",
    messageData.senderId,
    "text",
    messageData.text,
    "timestamp",
    messageData.timestamp,
  );
  await client.quit();
  return messageId;
}
