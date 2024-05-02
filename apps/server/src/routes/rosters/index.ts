import { Elysia, t } from "elysia";

import {
  getRosters,
  getRostersById,
  getTeacherRoster,
  setAttendance,
  setStudentRoster,
} from "./handlers";

export const rosterRoutes = new Elysia({ prefix: "/rosters" })
  .get("/all", () => getRosters())
  .get("/id/:id", ({ params: { id } }) => getRostersById(id), {
    params: t.Object({
      id: t.String(),
    }),
  })

  .get(
    "/teacher/roster/:userId",
    ({ params: { userId } }) => getTeacherRoster(userId),
    {
      params: t.Object({
        userId: t.String(),
      }),
    },
  )
  .post("/attendance/", ({ body: { studentId } }) => setAttendance(studentId), {
    body: t.Object({
      studentId: t.String(),
    }),
  });
