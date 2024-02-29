import { client } from "@local/eden";

const ChatClient = (chatId: string) => client.api.inbox[chatId]?.subscribe();

export default ChatClient;
