import { Elysia, t } from "elysia";

import { env } from "~/env";
import { syncTeachers } from "./handlers";

export const scriptRoutes = new Elysia({ prefix: "/script" }).post(
  "/teachersync",
  ({ body }) => syncTeachers(body),
  {
    body: t.Array(
      t.Object({
        email: t.String(),
        name: t.String(),
        id: t.String(),
      }),
    ),
  },
);
