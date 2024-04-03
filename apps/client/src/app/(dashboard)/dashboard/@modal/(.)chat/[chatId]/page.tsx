import { notFound } from "next/navigation";

import { auth } from "@local/auth";
import { client } from "@local/eden";

import { ChatInput, Messages } from "@/components/chat";
import Modal from "@/components/ui/modal";

interface PageProps {
  params: {
    chatId: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { chatId: string };
}) {
  const session = await auth();
  if (!session) return { title: `Chat` };
  const [userId1, userId2] = params.chatId.split("--");
  const { user } = session;

  const chatPartnerId = user.id === userId1 ? userId2! : userId1!;

  const { data: chatPartnerRaw, error } = await client.api
    .users({ id: chatPartnerId })
    .get();
  if (error) {
    console.error(error);
  }
  if (!chatPartnerRaw) {
    return { title: `Chat` };
  }

  return { title: `FLEX | ${chatPartnerRaw.name} chat` };
}

export default async function ChatPage({ params }: PageProps) {
  const { chatId } = params;
  const { chat, initialMessages } = await allData(chatId);
  if (!chat) {
    return notFound();
  }
  const { chatPartner, userId } = chat;

  return (
    <Modal>
      <div className="max-w-screen flex max-h-screen  w-full min-w-0 flex-col justify-between overflow-scroll p-2">
        <span className="mr-3 font-semibold ">{chatPartner.name}</span>
        <Messages
          chatId={chatId}
          initialMessages={initialMessages!}
          sessionId={userId}
          chatPartner={chatPartner}
        />
        <ChatInput userId={userId} chatId={chatId} chatPartner={chatPartner} />
      </div>
    </Modal>
  );
}

async function getChatMessages(chatId: string) {
  try {
    const { data, error } = await client.api.inbox({ chatId: chatId }).get();

    if (error) {
      console.error(error.value);
    }
    if (!data) {
      return [];
    }
    return data;
  } catch (e) {
    console.error(e);
  }
}

/**
 *  chat verification
 *  @param chatId
 *  @validates user session, chatId, and chat partner, throws error if chat is between 2 students
 *  @overload notFound
 */

async function usersCheck(chatId: string) {
  try {
    const session = await auth();

    if (!session) notFound();
    const { user } = session;

    const userId = user.id;
    const [userId1, userId2] = chatId.split("--");

    if (userId !== userId1 && userId !== userId2) {
      notFound();
    }

    const chatPartnerId = userId === userId1! ? userId2! : userId1!;
    const chatPartnerRaw = await client.api.users({ id: chatPartnerId }).get();

    // if the current user is not found in the cache, set the user in the cache
    const userIdRaw = await client.api.users({ id: userId }).get();

    if (!chatPartnerRaw || !userIdRaw) {
      return notFound();
    }

    if (chatPartnerRaw.error || userIdRaw.error) {
      return notFound();
    }
    const chatPartner = chatPartnerRaw.data;
    const primaryUser = userIdRaw.data;
    if (primaryUser.role === "student" && chatPartner.role === "student") {
      return notFound();
    }

    return { chatPartner, userId };
  } catch (e) {
    console.error(e);
  }
}

async function allData(chatId: string) {
  const [chat, initialMessages] = await Promise.all([
    usersCheck(chatId),
    getChatMessages(chatId),
  ]);
  return { chat, initialMessages };
}
