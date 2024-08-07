import { NotFoundError } from "elysia";

import type { Message, messageAlerts } from "@local/utils";
import { messageArrayValidator, messageValidator } from "@local/utils";

import { createClient } from ".";
import { userQuery } from "../sql";

/**
 * Messaging using Redis Streams
 */

// get messages from chat by chatId
export async function getInbox(chatId: string): Promise<Message[]> {
  try {
    const client = createClient();

    const results: string[] = await client.zrange(`chat:${chatId}`, 0, -1);
    await client.quit();
    const dbMessages = results.map((message) => JSON.parse(message) as Message);

    const reversedDbMessages = dbMessages.reverse();

    const messages = messageArrayValidator.parse(reversedDbMessages);
    return messages;
  } catch (e) {
    console.error(e);
    throw new NotFoundError();
  }
}

// send message to chat by chatId
export async function sendToInbox(chatId: string, message: any) {
  try {
    const messageData = messageValidator.parse(message);
    const client = createClient();
    await client.zadd(
      `chat:${chatId}`,
      messageData.timestamp,
      JSON.stringify(messageData),
    );
    await client.quit();

    return "success";
  } catch (e) {
    console.error(e);
    throw new NotFoundError();
  }
}

/**
 * get entire inbox for user by userId searching partial chatIds and returning the chatId + other user's name
 * @returns {Array<messageAlerts>}
 */
export async function getAlerts(userId: string): Promise<messageAlerts[]> {
  const client = createClient();
  try {
    const chatIds = await client.keys(`chat:${userId}--*`);
    const moreChatIds = await client.keys(`chat:*--${userId}`);
    const allChatIds = [...chatIds, ...moreChatIds];

    const results = [];
    for (const chatId of allChatIds) {
      //remove the chatId prefix
      const appendChatId = chatId.replace("chat:", "");

      // split the chatId to get the chatPartnerId
      const chatPartnerId = appendChatId
        .split("--")
        .find((id) => id !== userId);

      if (!chatPartnerId) {
        continue;
      }

      const chatPartner = await userQuery.execute({ id: chatPartnerId });

      const chatPartnerName = chatPartner[0]?.name!;
      results.push({
        chatPartnerId: chatPartnerId,
        chatPartnerName: chatPartnerName,
      });
    }
    await client.quit();

    return results;
  } catch (e) {
    console.error(e);
    await client.quit();
    throw new NotFoundError();
  }
}
