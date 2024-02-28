import { get } from "http";
import { Elysia, t } from "elysia";

import { db, schema } from "@local/db";

import { createClient, getInbox, sendToInbox } from "~/lib/redis";
import { Subscriber } from "~/lib/redis/pubsub";

type User = typeof schema.users.$inferSelect;
interface WebSocketConnection {
  ws: any;
  id: string;
}

const client = createClient();

export const socketRoutes = new Elysia({
  prefix: "/sockets",
  websocket: {},
}).ws("/:channel", {
  params: t.Object({
    channel: t.String(),
  }),

  open(ws) {
    ws.subscribe(ws.data.params.channel);
    client.subscribe(ws.data.params.channel);
    client.on("message", (channel, message) => {
      ws.send(message);
    });
  },
  message(ws, message) {
    ws.publish(ws.data.params.channel, message);
  },
  close(ws) {
    ws.unsubscribe(ws.data.params.channel);
    client.unsubscribe(ws.data.params.channel);
  },
});
