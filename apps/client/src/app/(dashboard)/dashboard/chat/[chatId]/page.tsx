import { notFound } from "next/navigation";

import { auth } from "@local/auth";
import { fetch } from "@local/eden";
import { messageArrayValidator } from "@local/validators";

import { ChatInput, Messages } from "@/components/chat";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PageProps {
  params: {
    chatId: string;
  };
}

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return { title: `Chat` };
}

export default async function ChatPage({ params }: PageProps) {
  const { chatId } = params;
  const { chat, initialMessages } = await allData(chatId);

  const { chatPartner, userId } = chat;
  console.log("chatPartner: ", chatPartner.name);

  return (
    <div className="flex h-full max-h-[calc(100vh-6rem)] flex-1 flex-col justify-between">
      <div className="flex justify-between border-b-2 border-gray-200 py-3 sm:items-center">
        <div className="relative flex items-center space-x-4">
          <div className="flex flex-col leading-tight">
            <div className="flex items-center text-lg text-muted-foreground">
              <span className="mr-3 font-semibold ">
                <PageBreadCrump />
              </span>
            </div>
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
        chatPartner={chatPartner}
      />
      <ChatInput userId={userId} chatId={chatId} chatPartner={chatPartner} />
    </div>
  );
}

async function getChatMessages(chatId: string) {
  try {
    const { data, error } = await fetch(`/api/inbox/:chatId`, {
      params: {
        chatId: chatId,
      },
    });

    if (error) {
      console.error(error);
      throw new Error(error.message, { cause: error.cause });
    }
    if (!data) {
      throw new Error("No data found");
    }

    const messages = messageArrayValidator.parse(data);
    const reversedMessages = messages.reverse();

    return reversedMessages;
  } catch (e) {
    console.log(e);
    throw new Error();
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
    console.log(chatId, "chatId");
    const [userId1, userId2] = chatId.split("--");

    if (userId !== userId1 && userId !== userId2) {
      console.log("user is not chatID user");
      notFound();
    }

    const chatPartnerId = userId === userId1! ? userId2! : userId1!;
    const chatPartnerRaw = await fetch("/api/users/:id", {
      params: {
        id: chatPartnerId,
      },
    });

    // if the current user is not found in the cache, set the user in the cache
    const userIdRaw = await fetch("/api/users/:id", {
      params: {
        id: userId,
      },
    });

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
    console.log(e);
    throw new Error();
  }
}

async function allData(chatId: string) {
  const [chat, initialMessages] = await Promise.all([
    usersCheck(chatId),
    getChatMessages(chatId),
  ]);
  return { chat, initialMessages };
}

const PageBreadCrump = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbPage>Chat</BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
