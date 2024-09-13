import { unstable_after as after } from "next/server";
import { nanoid } from "nanoid";
import { z } from "zod";

import type { Logs, Message } from "@local/utils";
import { auth } from "@local/auth";
import { messageValidator } from "@local/utils";

import { client } from "@/lib/eden";
import { pusherServer } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const { chatId, text }: { chatId: string; text: string } = await req.json();

    if (!chatId) throw new Error("ChatId is required");
    const session = await auth();

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

    await pusherServer.trigger(
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
    after(() => {
      void profanityFilter(message.text, message.senderId, friendId!);
    });
    return new Response("success", { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return new Response(error.message, { status: 400 });
    }

    return new Response("Internal Server Error", { status: 500 });
  }
}

const profanityFilterSchema = z.object({
  isProfanity: z.boolean(),
  score: z.number(),
  flaggedFor: z.string(),
});

async function profanityFilter(
  message: string,
  messageFrom: string,
  messageTo: string,
) {
  const res = await fetch("https://vector.profanity.dev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  }).then((res) => res.json());

  const result = profanityFilterSchema.parse(res);
  if (result.isProfanity) {
    const email = {
      message: `Message from ${messageFrom} to ${messageTo} was flagged for profanity. The message was: ${message}`,
      subject: "FlexRoster Profanity Alert",
    };
    await client.api.inbox.profanity.post({ message: email });
  }
}
