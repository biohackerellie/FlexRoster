import { Elysia, t } from "elysia";

import {
  getRosters,
  getRostersById,
  getTeacherRoster,
  setAttendance,
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
  .post(
    "/attendance",
    ({ body: { studentId, status } }) => setAttendance(studentId, status),
    {
      body: t.Object({
        studentId: t.String(),
        status: t.Union([
          t.Literal("arrived"),
          t.Literal("default"),
          t.Literal("transferredN"),
        ]),
      }),
    },
  );
