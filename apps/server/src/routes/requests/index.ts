import { Elysia, t } from "elysia";

import { getRequests, newRequest, requestApproval } from "./handlers";

export const requestRoutes = new Elysia({ prefix: "/requests" })
  .get(
    "/user/:userId",
    ({ params: { userId }, body: { userRole } }) =>
      getRequests(userId, userRole),
    {
      params: t.Object({
        userId: t.String(),
      }),
      body: t.Object({
        userRole: t.Union([
          t.Literal("student"),
          t.Literal("teacher"),
          t.Literal("admin"),
          t.Literal("secretary"),
        ]),
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
        studentId: t.Number(),
        teacherId: t.String(),
        newTeacherId: t.String(),
        status: t.Union([t.Literal("approved"), t.Literal("denied")]),
      }),
    },
  );
