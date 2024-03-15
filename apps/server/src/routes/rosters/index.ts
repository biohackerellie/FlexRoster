import { Elysia, t } from "elysia";

import {
  getRequests,
  getRosters,
  getRostersById,
  getStudentRoster,
  getTeacherRoster,
  newRequest,
  setAttendance,
  setStudentRoster,
} from "./handlers";

export const rosterRoutes = new Elysia({ prefix: "/rosters" })
  .get("/", () => getRosters())
  .get("/:id", ({ params: { id } }) => getRostersById(id), {
    params: t.Object({
      id: t.String(),
    }),
  })
  .get(
    "/student/:userId",
    ({ params: { userId } }) => getStudentRoster(userId),
    {
      params: t.Object({
        userId: t.String(),
      }),
    },
  )
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
    "/attendance/",
    ({ body: { userId, rosterId, status } }) =>
      setAttendance(userId, rosterId, status),
    {
      body: t.Object({
        userId: t.String(),
        rosterId: t.String(),
        status: t.String(),
      }),
    },
  )
  .get("/request/:userId", ({ params: { userId } }) => getRequests(userId), {
    params: t.Object({
      userId: t.String(),
    }),
  })
  .post(
    "/request/:requestId",
    ({ params: { requestId }, body: { request } }) =>
      newRequest(requestId, request),

    {
      params: t.Object({
        requestId: t.String(),
      }),
      body: t.Object({
        request: t.Object({
          id: t.String(),
          status: t.String(),
          timestamp: t.Number(),
          studentId: t.String(),
          currentTeacher: t.String(),
          newTeacher: t.String(),
        }),
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
  )
  .onError(({ error, set }) => {
    set.status = 500;
    return error;
  });
