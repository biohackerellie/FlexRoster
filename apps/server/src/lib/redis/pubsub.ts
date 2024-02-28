import { Message } from "@local/validators";

import { createClient } from "./client";

export async function Publisher(
  channel: string,
  message: Message | string | object | number,
) {
  const client = createClient();
  return () => client.publish(channel, JSON.stringify(message));
}

export function Subscriber(channel: string, callback: any) {
  const client = createClient();
  client.subscribe(channel);
  client.on("message", (channel, message) => {
    return message;
  });
}
