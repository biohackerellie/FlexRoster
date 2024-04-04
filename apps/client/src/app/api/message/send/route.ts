import { nanoid } from "nanoid";

import type { Logs } from "@local/validators";
import { auth } from "@local/auth";
import { client } from "@local/eden";
import { Message, messageValidator } from "@local/validators";

import { pusherServer } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const { chatId, text }: { chatId: string; text: string } = await req.json();
    console.log(chatId, text);
    if (!chatId) throw new Error("ChatId is required");
    const session = await auth();
    console.log("session", session);
    const [userId1, userId2] = chatId.split("--");
    if (!session) {
      throw new Error("You are not logged in");
    }

    const timestamp = Date.now();
    if (session.user.id !== userId1 && session.user.id !== userId2) {
      return new Response("Unauthorized", { status: 401 });
    }
    const friendId = session.user.id === userId1 ? userId2 : userId1;
    const messageData: Message = {
      senderId: session.user.id,
      text,
      timestamp: timestamp,
      id: nanoid(),
    };
    const message = messageValidator.parse(messageData);
    const log: Logs = {
      user: message.senderId,
      type: "message",
      action: `${session.user.name} sent a message to ${friendId} that says: ${message.text}`,
    };
    console.log(message);
    const push = await pusherServer.trigger(
      toPusherKey(`chat:${chatId}`),
      "incoming-message",
      message,
    );

    await pusherServer.trigger(
      toPusherKey(`user:${friendId}:chats`),
      "new-message",
      {
        ...message,
        senderName: session.user.name,
      },
    );

    await client.api.inbox({ chatId: chatId }).post({ message });
    await client.api.logs.new.post({ log });
    return new Response("success", { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return new Response(error.message, { status: 400 });
    }
    return new Response("Internal Server Error", { status: 500 });
  }
}
