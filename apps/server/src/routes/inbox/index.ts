import { Elysia, t } from "elysia";

import { getInbox, sendToInbox } from "~/lib/redis";

export const inboxRoutes = new Elysia({ prefix: "/inbox" })
  .get("/:chatId", ({ params: { chatId } }) => getInbox(chatId), {
    params: t.Object({
      chatId: t.String(),
    }),
  })
  .post(
    "/:chatId",
    ({ params: { chatId }, body: { timestamp, message } }) =>
      sendToInbox(chatId, timestamp, message),
    {
      params: t.Object({
        chatId: t.String(),
      }),
      body: t.Object({
        timestamp: t.Number(),
        message: t.String(),
      }),
    },
  )
  .ws("/:chatId", {
    params: t.Object({ chatId: t.String() }),
    open(ws) {
      console.log("Connected to chat socket");
      ws.subscribe(`chat:${ws.data.params.chatId}`);
    },
    message(ws, message) {
      console.log("Received message: " + message);
      ws.publish(`chat:${ws.data.params.chatId}`, message);
    },
    close(ws) {
      console.log("Disconnected from chat socket");
      ws.unsubscribe(`chat:${ws.data.params.chatId}`);
    },
  });
