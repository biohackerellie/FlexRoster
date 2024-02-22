import { revalidatePath } from "next/cache";
import { nanoid } from "nanoid";

import { auth } from "@local/auth";
import { client } from "@local/eden";
import { Message, messageValidator } from "@local/validators";

export async function POST(req: Request) {
  try {
    const { chatId, text } = await req.json();
    console.log(chatId, text);
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

    const chat = await client.api.inbox[`${chatId}`]?.subscribe();
    chat?.send(message);

    const friendchat = await client.api.users[`${friendId}`]?.subscribe();

    friendchat?.send(message);

    console.log("sent message");
    await client.api.inbox[`${chatId}`]?.post({
      timestamp: timestamp,
      message: text,
    });
    console.log("posted message to redis");
    return new Response("success", { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return new Response(error.message, { status: 400 });
    }
    return new Response("Internal Server Error", { status: 500 });
  }
}
