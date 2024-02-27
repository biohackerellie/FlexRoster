import { Elysia, t } from "elysia";

import { cachedTeachers, cachedUsers, setCachedUser } from "./handlers";

export const userRoutes = new Elysia({ prefix: "/users" })
  .onError(({ code, error }) => {
    return error;
  })
  .get("/teachers", () => cachedTeachers())
  .get("/cached/:id", ({ params: { id } }) => cachedUsers(id))
  .post("/cached", ({ body }) => setCachedUser(body), {
    body: t.Object({
      key: t.String(),
      object: t.Object({
        name: t.String(),
        role: t.String(),
      }),
    }),
  })
  .ws("/:userId", {
    params: t.Object({ userId: t.String() }),
    open(ws) {
      ws.subscribe(`user:${ws.data.params.userId}:chats`);
    },
    message(ws, message) {
      ws.publish(`user:${ws.data.params.userId}:chats`, message);
    },
    close(ws) {
      ws.unsubscribe(`user:${ws.data.params.userId}:chats`);
    },
  });
