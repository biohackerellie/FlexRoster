import { Elysia, t } from "elysia";

import { getDBUser, getStudent } from "./handlers";

export const userRoutes = new Elysia({ prefix: "/users" })

  .get("/:id", ({ params: { id } }) => getDBUser(id), {
    params: t.Object({ id: t.String() }),
  })
  .get("/student/:id", ({ params: { id } }) => getStudent(id), {
    params: t.Object({ id: t.String() }),
  });
