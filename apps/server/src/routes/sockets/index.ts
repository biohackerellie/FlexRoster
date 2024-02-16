import { get } from "http";
import { Elysia, t } from "elysia";

import { db, schema } from "@local/db";

import { createClient, getInbox, sendToInbox } from "~/lib/redis";

type User = typeof schema.users.$inferSelect;
interface WebSocketConnection {
  ws: any;
  id: string;
}

const users = new Map<User["email"], WebSocketConnection>();
const client = createClient();
const subscriberClient = client.duplicate();

export const socketRoutes = new Elysia({
  prefix: "/sockets",
  websocket: {},
}).ws("/chat/:user", {
  params: t.Object({
    user: t.String(),
  }),
  async open(ws) {
    console.log(ws.data.params.user + " " + "Connected to chat socket");
    const channelName = `notify:${ws.data.params.user}`;
    subscriberClient.subscribe(channelName);
    subscriberClient.on("message", (channel, message) => {
      if (channel === channelName) {
        ws.send(message);
      }
    });

    const inbox = await getInbox(ws.data.params.user);
    ws.send(JSON.stringify({ type: "history", messages: inbox }));
    users.set(ws.data.params.user, { ws, id: ws.id });
  },
  async message(ws, message) {
    console.log("Received message: " + message);
    const { sender, content, recipient } = message;
    console.log("Received message: " + sender, content, recipient);
    const recipientChannel = `notify:${recipient}`;
    await client.publish(
      recipientChannel,
      JSON.stringify({ type: "chat", sender, content }),
    );

    const result = await sendToInbox(recipient, content, sender);
    if (result !== "OK") {
      console.error("Failed to send message");
    }
  },
  close(ws) {
    client.unsubscribe(`notify:${ws.data.params.user}`);
    users.delete(ws.data.params.user);
  },
  body: t.Object({
    sender: t.String(),
    content: t.String(),
    recipient: t.String(),
  }),

  response: t.String(),
});
