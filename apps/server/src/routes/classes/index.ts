import { Elysia, t } from "elysia";

import { classroomsWithRosterCount } from "~/lib/sql";
import { getClassById, getClasses, resetOneClass } from "./handlers";

export const classRoutes = new Elysia({ prefix: "/classes" })

  .get("/all", () => getClasses())
  .get("/id/:id", ({ params: { id } }) => getClassById(id), {
    params: t.Object({
      id: t.String(),
    }),
  })
  .get("/secretary", () => classroomsWithRosterCount())
  .post("/refresh/:id", ({ params: { id } }) => resetOneClass(id), {
    params: t.Object({
      id: t.String(),
    }),
  });
