import { notFound } from "next/navigation";
import { auth } from "@local/auth";
import { Message, messageArrayValidator } from "@local/validators";
import { getInbox, getCachedUsers, setCachedUsers } from "@/lib/redis/actions";
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

const dynamic = "force-dynamic";

export async function generateMetadata() {
  return { title: `Chat` };
}

export default async function ChatPage({ params }: PageProps) {
  const { chatId } = params;
	const {chat, initialMessages} = await allData(chatId);
	const { chatPartner, userId } = chat;
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
	try {
  const res = await getInbox(chatId);
	console.log("res: ", res);
  if (!res) {
    throw new Error("Unable to get chat messages");
  }

  const dbMessages = res.map((message) => JSON.parse(message) as Message);
  const reversedMessages = dbMessages.reverse();

  const messages = messageArrayValidator.parse(reversedMessages);

  return messages;
} catch (e) {
	throw new Error("Unable to get chat messages");
}
}

/**
 *  chat verification
 *  @param chatId
 *  @validates user session, chatId, and chat partner, throws error if chat is between 2 students
 *  @overload notFound
 */

async function usersCheck(chatId: string) {
	try{
  const session = await auth();

  if (!session) notFound();
  const { user } = session;
  const userId = user.id!;


  const [userId1, userId2] = chatId.split("--");

  if (userId !== userId1 && userId !== userId2) {
    notFound();
  }


  const chatPartnerId = userId === userId1 ? userId2 : userId1;
  const chatPartnerRaw = await getCachedUsers(chatPartnerId);


  let userIdRaw = await getCachedUsers(userId);

  if (!userIdRaw) {
    console.log("userIdRaw error");
    await setCachedUsers({
      key: `user:${userId}`,
      object: { name: user.name!, role: user.roles },
    });
    userIdRaw = await getCachedUsers(userId);
  }




  const chatPartner = Object.values(chatPartnerRaw!)[0] as cacheUser;

  const primaryUser = Object.values(userIdRaw!)[0] as cacheUser;
  if (primaryUser.role === "student" && chatPartner.role === "student") {
    return notFound();
  }

  return { chatPartner, userId };
}catch(e){
	console.log(e);
	throw new Error("Error getting chat messages");
}
}

async function allData(chatId: string) {
  const [chat, initialMessages] = await Promise.all([
    usersCheck(chatId),
    getChatMessages(chatId),
  ]);
  return { chat, initialMessages };
}
