import { Elysia, t } from "elysia";

import {
  getRequests,
  getTeacherRequests,
  newRequest,
  requestApproval,
} from "./handlers";

export const requestRoutes = new Elysia({ prefix: "/requests" })
  .get("/student/:userId/", ({ params: { userId } }) => getRequests(userId), {
    params: t.Object({
      userId: t.String(),
    }),
  })
  .get(
    "/teacher/:userId",
    ({ params: { userId } }) => getTeacherRequests(userId),
    {
      params: t.Object({
        userId: t.String(),
      }),
    },
  )
  .post(
    "/new",
    ({ body: { userId, teacherId, dateRequested } }) =>
      newRequest({ userId, teacherId, dateRequested }),
    {
      body: t.Object({
        userId: t.String(),
        teacherId: t.String(),
        dateRequested: t.String(),
      }),
    },
  )
  .post(
    "/update/:requestId",
    ({
      params: { requestId },
      body: { studentId, teacherId, newTeacherId, status },
    }) =>
      requestApproval(requestId, studentId, teacherId, newTeacherId, status),
    {
      params: t.Object({
        requestId: t.String(),
      }),
      body: t.Object({
        studentId: t.String(),
        teacherId: t.String(),
        newTeacherId: t.String(),
        status: t.Union([t.Literal("approved"), t.Literal("denied")]),
      }),
    },
  );
