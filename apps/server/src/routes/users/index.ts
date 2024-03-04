import { Elysia, t } from "elysia";

import {
  cachedTeachers,
  cachedUsers,
  getDBUser,
  getStudent,
  setCachedUser,
	
} from "./handlers";

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
  .get("/:id", ({ params: { id } }) => getDBUser(id), {
    params: t.Object({ id: t.String() }),
  })
  .get("/student/:id", ({ params: { id } }) => getStudent(id), {
    params: t.Object({ id: t.String() }),
  });
