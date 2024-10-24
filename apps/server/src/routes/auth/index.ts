import { Elysia, t } from "elysia";
import { createSession, validateSessionToken } from "./handlers";

export const authRoutes = new Elysia({ prefix: "/auth" })
  .post("/validate", ({ body: { token } }) => validateSessionToken(token), {
    body: t.Object({
      token: t.String(),
    }),
  })
  .post(
    "/session/new",
    ({ body: { userId, role }, cookie: { session } }) =>
      createSession(userId, role, session),
    {
      body: t.Object({
        userId: t.String(),
        role: t.String(),
      }),
    },
  );
