import { Elysia, t } from "elysia";

import { getInbox, sendToInbox } from "~/lib/redis";
import { toInbox } from "./handlers";

export const inboxRoutes = new Elysia({ prefix: "/inbox" })
  .post(
    "/",
    ({ body: { userId, chatId, text } }) => toInbox(userId, chatId, text),
    {
      body: t.Object({
        userId: t.String(),
        chatId: t.String(),
        text: t.String(),
      }),
    },
  )
  .get("/:chatId", ({ params: { chatId } }) => getInbox(chatId), {
    params: t.Object({
      chatId: t.String(),
    }),
  })
  .post(
    "/:chatId",
    ({ params: { chatId }, body: { message } }) => sendToInbox(chatId, message),
    {
      params: t.Object({
        chatId: t.String(),
      }),
      body: t.Object({
        message: t.Object({
          id: t.String(),
          senderId: t.String(),
          text: t.String(),
          timestamp: t.Number(),
        }),
      }),
    },
  )
  .ws("/:chatId", {
    params: t.Object({ chatId: t.String() }),
    open(ws) {
      console.log("Connected to chat socket");
      // ws.subscribe(`chat:${ws.data.params.chatId}`);
    },
    message(ws, message) {
      console.log("Received message: " + message);
      ws.send(message);
    },
    close(ws) {
      console.log("Disconnected from chat socket");

      // ws.unsubscribe(`chat:${ws.data.params.chatId}`);
    },
  });
