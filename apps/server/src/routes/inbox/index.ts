import { Elysia, t } from "elysia";

import { getAlerts, getInbox, sendToInbox } from "~/lib/redis";
import sendEmail from "~/lib/utils/sendEmail";

const T = t.Union([t.String(), t.Number()]);

export const inboxRoutes = new Elysia({ prefix: "/inbox" })
  .onError({ as: "scoped" }, ({ code, error, set }) => {
    switch (code) {
      case "NOT_FOUND":
        set.status = 404;
        return "Not found 😒";
      case "INTERNAL_SERVER_ERROR":
        set.status = 500;
        return "Internal server error 😒";
      case "VALIDATION":
        set.status = 400;
        return error.message;
      default:
        set.status = 500;
        return error.message;
    }
  })
  .get("/alerts/:userId", ({ params: { userId } }) => getAlerts(userId), {
    params: t.Object({
      userId: t.String(),
    }),
  })
  .get("/:chatId", ({ params: { chatId } }) => getInbox(chatId), {
    params: t.Object({
      chatId: t.String(),
    }),
  })
  .post("/profanity", ({ body: { message } }) => sendEmail(message), {
    body: t.Object({
      message: t.Object({
        to: t.Optional(t.String()),
        message: t.String(),
        subject: t.String(),
      }),
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
          senderId: t.String(),
          text: t.String(),
          timestamp: T,
          id: t.Optional(t.String()),
        }),
      }),
    },
  );
