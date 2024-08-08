import type { Metadata } from "next";
import * as React from "react";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";
import { Loader2 } from "lucide-react";

import { auth } from "@local/auth";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@local/ui/breadcrumb";
import { Skeleton } from "@local/ui/skeleton";

import { ChatInput, Messages } from "@/components/chat";
import { client } from "@/lib/eden";

interface PageProps {
  params: {
    chatId: string;
  };
}

export const metadata: Metadata = {
  title: "FLEX | Chat",
};

export default async function ChatPage({ params }: PageProps) {
  const { chatId } = params;
  const { chat, initialMessages } = await allData(chatId);

  const { chatPartner, userId } = chat!;

  return (
    <div className="flex h-full max-h-[calc(100vh-6rem)] flex-1 flex-col justify-between">
      <div className="flex justify-between border-b-2 border-gray-200 py-3 sm:items-center">
        <div className="relative flex items-center space-x-4">
          <div className="flex flex-col leading-tight">
            <div className="flex items-center text-xl">
              <span className="mr-3 font-semibold text-neutral-300">
                {chatPartner.name}
              </span>
            </div>
          </div>
        </div>
      </div>
      <React.Suspense
        fallback={
          <Skeleton className="z-20 flex h-full flex-1 animate-pulse flex-col-reverse gap-4 overflow-y-auto p-3" />
        }
      >
        <Messages
          chatId={chatId}
          initialMessages={initialMessages}
          sessionId={userId}
          chatPartner={chatPartner}
        />
      </React.Suspense>
      <div></div>
      <React.Suspense
        fallback={<Loader2 className="text-primary-500 h-6 w-6 animate-spin" />}
      >
        <ChatInput userId={userId} chatId={chatId} chatPartner={chatPartner} />
      </React.Suspense>
    </div>
  );
}

async function getChatMessages(chatId: string) {
  noStore();
  try {
    const { data, error } = await client.api.inbox({ chatId: chatId }).get();

    if (error) {
      console.error(error.value);
      switch (error.status) {
        case 400:
          throw error.value;
        default:
          throw error.value;
      }
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
