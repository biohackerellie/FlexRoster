import { notFound } from "next/navigation";

import { auth } from "@local/auth";
import { client } from "@local/eden";
import { Message, messageArrayValidator } from "@local/validators";

import { ChatInput, Messages } from "@/components/chat";

type cacheUser = {
  name: string;
  role: string;
};

interface PageProps {
  params: {
    chatId: string;
  };
}

export async function generateMetadata() {
  return { title: `Chat` };
}

export default async function ChatPage({ params }: PageProps) {
  const { chatId } = params;
  const initialMessages = await getChatMessages(chatId);
  const { chatPartner, userId } = await usersCheck(chatId);
  console.log("chatPartner: ", chatPartner.name);
  console.log("initialMessages: ", initialMessages);
  return (
    <div className="flex h-full max-h-[calc(100vh-6rem)] flex-1 flex-col justify-between">
      <div className="flex justify-between border-b-2 border-gray-200 py-3 sm:items-center">
        <div className="relative flex items-center space-x-4">
          <div className="flex flex-col leading-tight">
            <div className="flex items-center text-xl">
              <span className="mr-3 font-semibold text-gray-700">
                {chatPartner.name}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Messages
        chatId={chatId}
        initialMessages={initialMessages}
        sessionId={userId}
        chatPartner={chatPartner!}
      />
      <ChatInput userId={userId} chatId={chatId} chatPartner={chatPartner!} />
    </div>
  );
}

async function getChatMessages(chatId: string) {
  const res = await client.api.inbox[`${chatId}`]?.get();

  if (!res) {
    throw new Error("Unable to get chat messages");
  }
  if (res.error) {
    console.error("Error getting chat messages", res.error);
    throw new Error("Unable to get chat messages");
  }
  const dbMessages = res.data.map((message) => JSON.parse(message) as Message);
  const reversedMessages = dbMessages.reverse();
  console.log("reversedMessages: ", reversedMessages);
  const messages = messageArrayValidator.parse(reversedMessages);
  console.log("messages: ", messages);
  return messages;
}

/**
 *  chat verification
 *  @param chatId
 *  @validates user session, chatId, and chat partner, throws error if chat is between 2 students
 *  @overload notFound
 */

async function usersCheck(chatId: string) {
  // get user session
  const session = await auth();

  if (!session) notFound();
  const { user } = session;
  const userId = user.id!;

  // get the 2 users from the chat id
  const [userId1, userId2] = chatId.split("--");

  // check if the curent user is one of the 2 users, if not throw error
  if (userId !== userId1 && userId !== userId2) {
    notFound();
  }

  // get the user data from the cache
  const chatPartnerId = userId === userId1 ? userId2 : userId1;
  const chatPartnerRaw =
    await client.api.users.cached[`${chatPartnerId}`]?.get()!;

  // if the current user is not found in the cache, set the user in the cache
  let userIdRaw = await client.api.users.cached[`${userId}`]?.get()!;

  if (userIdRaw.error) {
    console.log("userIdRaw error");
    await client.api.users.cached.post({
      key: `user:${userId}`,
      object: { name: user.name!, role: user.roles },
    });
    userIdRaw = await client.api.users.cached[`${userId}`]?.get()!;
  }

  if (chatPartnerRaw.error || userIdRaw.error) {
    console.log("Error getting chat partner", chatPartnerRaw.error);
    return notFound();
  }

  // get the user data from the cache and validate the role
  const chatPartner = Object.values(chatPartnerRaw.data)[0] as cacheUser;

  const primaryUser = Object.values(userIdRaw.data)[0] as cacheUser;
  if (primaryUser.role === "student" && chatPartner.role === "student") {
    return notFound();
  }

  return { chatPartner, userId };
}

async function allData(chatId: string) {
  const [chat, initialMessages] = await Promise.all([
    usersCheck(chatId),
    getChatMessages(chatId),
  ]);
  return { chat, initialMessages };
}
