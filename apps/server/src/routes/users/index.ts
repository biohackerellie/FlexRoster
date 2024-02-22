import { Elysia, t } from "elysia";

import { cachedUsers, setCachedUser } from "./handlers";

export const userRoutes = new Elysia({ prefix: "/users" })
  .onError(({ code, error }) => {
    return new Response(error.toString());
  })
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
  .ws("/:friendId", {
    params: t.Object({ friendId: t.String() }),
    open(ws) {
      ws.subscribe(`user:${ws.data.params.friendId}:chats`);
    },
    message(ws, message) {
      ws.publish(`user:${ws.data.params.friendId}:chats`, message);
    },
    close(ws) {
      ws.unsubscribe(`user:${ws.data.params.friendId}:chats`);
    },
  });
