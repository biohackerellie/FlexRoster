import { createClient } from "./redis";

export async function getInbox(mailbox: string) {
  const client = createClient();
  const result = await client.xrange(`chat:${mailbox}`, "-", "+");
  return result;
}

export async function sendToInbox(
  mailbox: string,
  message: string,
  sender: string,
): Promise<string | Error> {
  const client = createClient();

  const result = await client.xadd(
    `chat:${mailbox}`,
    "*",
    "sender",
    sender,
    "message",
    message,
  );
  if (result) {
    return "OK";
  } else {
    return new Error("Failed to send message");
  }
}
