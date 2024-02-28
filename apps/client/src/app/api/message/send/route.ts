
import { nanoid } from "nanoid";
import { Publisher } from "@/lib/redis/actions";
import { auth } from "@local/auth";
import { sendToInbox} from "@/lib/redis/actions";



import { Message, messageValidator } from "@local/validators";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const { chatId, text } = await req.json();

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

    Publisher(`chat:${chatId}`, message);
		Publisher(`user:${friendId}:chats`,{ 
			...message,
			senderName: session.user.name,
		});

		sendToInbox(chatId, message);
		revalidatePath(`/chat/${chatId}`, 'page')
    return new Response("success", { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 400 });
    }
    return new Response("Internal Server Error", { status: 500 });
  }
}
