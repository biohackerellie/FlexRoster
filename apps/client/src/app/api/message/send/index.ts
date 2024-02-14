import { client } from "@local/eden";

export async function POST(req: Request) {
  const chat = client.api.sockets.chat.subscribe();
  chat.send("Hello, world!");
}
