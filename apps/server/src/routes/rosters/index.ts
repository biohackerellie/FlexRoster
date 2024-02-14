import { Elysia, t } from "elysia";

import {
  getRosters,
  getRostersById,
  getStudentRoster,
  getTeacherRoster,
  setStudentRoster,
} from "./handlers";

export const rosterRoutes = new Elysia({ prefix: "/rosters" })
  .get("/", () => getRosters())
  .get("/:id", ({ params: { id } }) => getRostersById(id), {
    params: t.Object({
      id: t.String(),
    }),
  })
  .get("/student/:email", ({ params: { email } }) => getStudentRoster(email), {
    params: t.Object({
      email: t.String(),
    }),
  })
  .get(
    "/teacher/roster/:email",
    ({ params: { email } }) => getTeacherRoster(email),
    {
      params: t.Object({
        email: t.String(),
      }),
    },
  )

  .post(
    "/student/:email",
    ({ params: { email }, body: { roomNumber, teacherName } }) =>
      setStudentRoster(email, roomNumber, teacherName),
    {
      params: t.Object({
        email: t.String(),
      }),
      body: t.Object({
        roomNumber: t.String(),
        teacherName: t.String(),
      }),
    },
  );
