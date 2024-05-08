import { Value } from "@sinclair/typebox/value";
import { Elysia, t } from "elysia";

import { NoRequestForUError } from "~/lib/utils/Errors";
import {
  getRequests,
  getTeacherRequests,
  newRequest,
  requestApproval,
} from "./handlers";

export const requestRoutes = new Elysia({ prefix: "/requests" })
  .error({ NoRequestForUError })
  .onError(({ code, set, error }) => {
    switch (code) {
      case "NoRequestForUError": {
        set.status = 401;
        return error;
      }
    }
  })
  .get("/student/:userId", ({ params: { userId } }) => getRequests(userId), {
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
    ({ body: { studentId, newTeacher, dateRequested } }) =>
      newRequest({ studentId, newTeacher, dateRequested }),
    {
      body: t.Object({
        studentId: t.String(),
        newTeacher: t.String(),
        dateRequested: t.Date(),
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
