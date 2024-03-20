import { Elysia, t } from "elysia";

import { getLogs, newLog } from "~/lib/redis";

export const logRoutes = new Elysia({ prefix: "/logs" })
  .get("/all", () => getLogs())
  .post("/new", ({ body: { log } }) => newLog(log), {
    body: t.Object({
      log: t.Object({
        user: t.Nullable(t.String()),
        type: t.Union([
          t.Literal("error"),
          t.Literal("request"),
          t.Literal("attendance"),
          t.Literal("message"),
        ]),
        action: t.String(),
      }),
    }),
  });
