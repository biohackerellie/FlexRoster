import { notFound } from "next/navigation";

import { auth } from "@local/auth";
import { client } from "@local/eden";
import { Message, messageArrayValidator } from "@local/validators";

import { ChatInput, Messages } from "@/components/chat";
import { formatTeacherNames } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { chatId: string };
}) {
  const session = await auth();
  if (!session) notFound();
  const [studentId, teacherName] = params.chatId.split("--");
  const { user } = session;
  if (!teacherName) notFound();
  const formattedTeacherName = formatTeacherNames(teacherName);

  return { title: `Chat with ${formattedTeacherName}` };
}

interface PageProps {
  params: {
    chatId: string;
  };
}

async function getChatMessages(chatId: string) {
  try {
    const res = await client.api.inbox[`${chatId}`]?.get();
    if (!res) {
      throw new Error("Unable to get chat messages");
    }
    if (res.error) {
      console.error("Error getting chat messages", res.error);
      throw new Error("Unable to get chat messages");
    }
    const dbMessages = res.data.map(
      (message) => JSON.parse(message) as Message,
    );
    const reversedMessages = dbMessages.reverse();
    console.log("reversedMessages", reversedMessages);
    const messages = messageArrayValidator.parse(reversedMessages);
    console.log("messages", messages);
    return messages;
  } catch (error) {
    return [];
  }
}

export default async function ChatPage({ params }: PageProps) {
  const { chatId } = params;
  const session = await auth();
  if (!session) notFound();
  const { user } = session;

  const [studentId, teacher] = chatId.split("--");
  const teacherName = formatTeacherNames(teacher!);
  const initialMessages = await getChatMessages(chatId);

  return (
    <div className="flex h-full max-h-[calc(100vh-6rem)] flex-1 flex-col justify-between">
      <div className="flex justify-between border-b-2 border-gray-200 py-3 sm:items-center">
        <div className="relative flex items-center space-x-4">
          <div className="flex flex-col leading-tight">
            <div className="flex items-center text-xl">
              <span className="mr-3 font-semibold text-gray-700">
                {teacherName}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Messages
        chatId={chatId}
        initialMessages={initialMessages}
        sessionId={user.id}
        teacherName={teacherName!}
      />
      <ChatInput chatId={chatId} chatPartner={teacherName!} />
    </div>
  );
}
