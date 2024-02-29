"use server";

import { Message } from "@local/validators";

import { createClient } from "..";

export async function Publisher(
  channel: string,
  message: Message | string | object | number,
) {
  const client = createClient();

  return client.publish(channel, JSON.stringify(message));
}

export async function Subscriber() {
  const client = createClient();

  return {
    subscribe: (channel: string | string[]) =>
      client.subscribe(...channel, (err, count) => {
        if (err) {
          console.error("Error subscribing to channel", err);
        } else {
          console.log(`Subscribed to ${count} channels`);
        }
      }),
    on: (event: string, callback: any) => client.on(event, callback),
    unbind: (event: string, callback: any) => client.off(event, callback),
  };
}
