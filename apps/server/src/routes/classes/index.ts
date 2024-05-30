import { Elysia, t } from "elysia";

import { classroomsWithRosterCount } from "~/lib/sql";
import {
  createComment,
  deleteAvailability,
  deleteComment,
  getAvailability,
  getClassById,
  getClasses,
  resetOneClass,
  setAvailability,
} from "./handlers";

export const classRoutes = new Elysia({ prefix: "/classes" })
  .onError(({ code, error, set }) => {
    if (code === "NOT_FOUND") {
      set.status = 404;

      return { error: "No classes found" };
    }
  })
  .get("/all/:id", ({ params: { id } }) => getClasses(id), {
    params: t.Object({
      id: t.String(),
    }),
  })
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
  })
  .patch(
    "/comments/create/:id",
    ({ params: { id }, body: { comment }, error }) =>
      createComment(id, comment).catch(error),
    {
      params: t.Object({
        id: t.String(),
      }),
      body: t.Object({
        comment: t.String(),
      }),
    },
  )
  .post("/comments/delete", ({ body: { id } }) => deleteComment(id), {
    body: t.Object({
      id: t.String(),
    }),
  })
  .post(
    "/availability",
    ({ body: { teacherId, classroomId, dates } }) =>
      setAvailability(teacherId, classroomId, dates),
    {
      body: t.Object({
        classroomId: t.String(),
        teacherId: t.String(),
        dates: t.Array(t.Date()),
      }),
    },
  )
  .get("/availability/:id", ({ params: { id } }) => getAvailability(id), {
    params: t.Object({
      id: t.String(),
    }),
  })
  .delete(
    "/availability",
    ({ body: { id, date } }) => deleteAvailability(id, date),
    {
      body: t.Object({
        id: t.String(),
        date: t.Date(),
      }),
    },
  );
