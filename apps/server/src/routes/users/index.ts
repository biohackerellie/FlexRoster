import { Elysia, t } from "elysia";

import { getDBUser, getStudent, getStudentDetails, newUser } from "./handlers";

export const userRoutes = new Elysia({ prefix: "/users" })

  .get("/:id", ({ params: { id } }) => getDBUser(id), {
    params: t.Object({ id: t.String() }),
  })
  .get("/student/:id", ({ params: { id } }) => getStudent(id), {
    params: t.Object({ id: t.String() }),
  })
  .get("/student/details/:id", ({ params: { id } }) => getStudentDetails(id), {
    params: t.Object({ id: t.String() }),
  })
  .post("/new", ({ body: {id, email, role, name} }) => newUser(id, email, role, name), {
    body: t.Object({
      id: t.String(),
      email: t.String(),
      role: t.Union([t.Literal("student"), t.Literal("teacher"), t.Literal("admin"), t.Literal("secretary")]),
      name: t.String(),
    }),
})

