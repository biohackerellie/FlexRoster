import { Elysia, t } from "elysia";

import {
  approveRequest,
  denyRequest,
  getRequests,
  newRequest,
} from "./handlers";

export const requestRoutes = new Elysia({ prefix: "/requests" })
  .get("/user/:userId", ({ params: { userId } }) => getRequests(userId), {
    params: t.Object({
      userId: t.String(),
    }),
  })
  .post(
    "/id/:requestId",
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
          studentId: t.Number(),
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
    "/approve/:requestId",
    ({ params: { requestId }, body: { studentId, teacherId, newTeacherId } }) =>
      approveRequest(requestId, studentId, teacherId, newTeacherId),
    {
      params: t.Object({
        requestId: t.String(),
      }),
      body: t.Object({
        studentId: t.Number(),
        teacherId: t.String(),
        newTeacherId: t.String(),
      }),
    },
  )
  .post(
    "/deny/:requestId",
    ({ params: { requestId }, body: { studentId } }) =>
      denyRequest(requestId, studentId),
    {
      params: t.Object({
        requestId: t.String(),
      }),
      body: t.Object({
        studentId: t.Number(),
      }),
    },
  );
