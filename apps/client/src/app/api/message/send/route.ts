import { nanoid } from "nanoid";

import { auth } from "@local/auth";
import { pusherServer } from "@local/pusher";
import { Message, messageValidator } from "@local/validators";

import { sendToInbox } from "@/lib/redis/actions";
import { toPusherKey } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const { chatId, text } = await req.json();
    console.log("hi");
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
      id: nanoid(),
      senderId: session.user.id,
      text,
      timestamp,
    };
    const message = messageValidator.parse(messageData);

    await pusherServer.trigger(
      toPusherKey(`chat:${chatId}`),
      "incoming-message",
      message,
    );
    console.log("sending message", message);

    await sendToInbox(chatId, message);

    return new Response("success", { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return new Response(error.message, { status: 400 });
    }
    return new Response("Internal Server Error", { status: 500 });
  }
}
