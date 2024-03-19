import { Elysia, t } from "elysia";

import {
  approveRequest,
  denyRequest,
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
  .get("/all", () => getRosters())
  .get("/id/:id", ({ params: { id } }) => getRostersById(id), {
    params: t.Object({
      id: t.String(),
    }),
  })
  .get(
    "/student/id/:userId",
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
  .get(
    "/request/user/:userId",
    ({ params: { userId } }) => getRequests(userId),
    {
      params: t.Object({
        userId: t.String(),
      }),
    },
  )
  .post(
    "/request/id/:requestId",
    ({ params: { requestId }, body: { request } }) =>
      newRequest(requestId, request),

    {
      params: t.Object({
        requestId: t.String(),
      }),
      body: t.Object({
        request: t.Object({
          status: t.Union([
            t.Literal("pending"),
            t.Literal("approved"),
            t.Literal("denied"),
            t.Literal("checked in"),
          ]),
          id: t.String(),
          timestamp: t.Number(),
          studentId: t.String(),
          studentName: t.String(),
          currentTeacher: t.String(),
          currentTeacherName: t.String(),
          newTeacher: t.String(),
          newTeacherName: t.String(),
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
  .post(
    "/request/approve/:requestId",
    ({ params: { requestId }, body: { studentId, teacherId, newTeacherId } }) =>
      approveRequest(requestId, studentId, teacherId, newTeacherId),
    {
      params: t.Object({
        requestId: t.String(),
      }),
      body: t.Object({
        studentId: t.String(),
        teacherId: t.String(),
        newTeacherId: t.String(),
      }),
    },
  )
  .post(
    "/request/deny/:requestId",
    ({ params: { requestId }, body: { studentId } }) =>
      denyRequest(requestId, studentId),
    {
      params: t.Object({
        requestId: t.String(),
      }),
      body: t.Object({
        studentId: t.String(),
      }),
    },
  );
