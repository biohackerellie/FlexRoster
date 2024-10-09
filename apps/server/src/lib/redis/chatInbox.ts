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

    // const messages = messageArrayValidator.parse(reversedDbMessages);
    return reversedDbMessages;
  } catch (e) {
    console.error(e);
    throw new NotFoundError();
  }
}

// send message to chat by chatId
export async function sendToInbox(chatId: string, message: Message) {
  try {
    const client = createClient();
    await client.zadd(
      `chat:${chatId}`,
      message.timestamp,
      JSON.stringify(message),
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

interface Alerts {
  messageAlerts: messageAlerts[];
  count: number;
}
export async function getAlerts(userId: string): Promise<Alerts> {
  const client = createClient();
  try {
    const chatIds = await client.keys(`chat:${userId}--*`);
    const moreChatIds = await client.keys(`chat:*--${userId}`);
    const allChatIds = [...chatIds, ...moreChatIds];

    const results: Alerts = {
      messageAlerts: [],
      count: 0,
    };
    for (const chatId of allChatIds) {
      //remove the chatId prefix
      const appendChatId = chatId.replace("chat:", "");

      // split the chatId to get the chatPartnerId
      const chatPartnerId = appendChatId
        .split("--")
        .find((id) => id !== userId);
      // const chatPartnerId = appendChatId.split("--")[1];
      if (!chatPartnerId) {
        continue;
      }

      const chatPartner = await userQuery.execute({ id: chatPartnerId });

      const chatPartnerName = chatPartner[0]?.name!;
      results.messageAlerts.push({
        chatPartnerId: chatPartnerId,
        chatPartnerName: chatPartnerName,
      });
    }
    await client.quit();
    results.count = results.messageAlerts.length;
    return results;
  } catch (e) {
    console.error(e);
    await client.quit();
    throw new NotFoundError();
  }
}
