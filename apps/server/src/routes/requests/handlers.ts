import { NotFoundError } from "elysia";

import type { Logs, Request } from "@local/validators";
import { db, eq, schema, sql } from "@local/db";
import { requestArrayValidator, requestValidator } from "@local/validators";

import {
  clearKV,
  deleteSet,
  getKV,
  getRequestSet,
  newLog,
  newRequestSet,
  removeSingleRequest,
  setKV,
} from "~/lib/redis";
import {
  getClassroomIdByTeacher,
  userQuery,
  userRequestQuery,
  userRosterQuery,
} from "~/lib/sql";
import { getHashKey } from "~/lib/utils";
import { NoRequestForUError } from "~/lib/utils/Errors";

type selectRequest = typeof schema.requests.$inferSelect;
type insertRequest = typeof schema.requests.$inferInsert;
type newRequestProps = Partial<insertRequest>;

export async function newRequest({
  studentId,
  newTeacher,
  dateRequested,
}: newRequestProps) {
  try {
    const studentRequestKey = getHashKey(`requests:${studentId}`);
    await clearKV(studentRequestKey);
    const dbRequests = await getRequests(studentId!);
    if (dbRequests && dbRequests.length > 0) {
      for (const r of dbRequests) {
        if (r.dateRequested === dateRequested!) {
          if (r.status !== "denied") {
            throw new NoRequestForUError(
              "You already have a request for that date 🤡",
            );
          }
        }
      }
    }
    const studentRaw = await userRosterQuery.execute({ id: studentId });
    if (studentRaw.length === 0) {
      throw new NotFoundError("No student found with that ID");
    }
    const student = studentRaw[0];
    const currentTeacher = student?.classrooms?.teacherId ?? " ";
    const currentTeacherName = student?.classrooms?.teacherName ?? " ";
    const newTeacherRaw = await userQuery.execute({ id: newTeacher });
    if (newTeacherRaw.length === 0) {
      throw new NotFoundError("No teacher found with that ID");
    }
    const newTeacherData = newTeacherRaw[0];

    const timestamp = Date.now().toString();
    const requestData: insertRequest = {
      status: "pending",
      studentName: student?.user.name!,
      studentId: student?.user.id!,
      dateRequested: dateRequested!,
      currentTeacher: currentTeacher,
      currentTeacherName,
      newTeacher: newTeacher!,
      newTeacherName: newTeacherData?.name!,
      timestamp,
    };
    const validatedRequest = requestValidator.parse(requestData);

    await db.insert(schema.requests).values(validatedRequest);

    const log: Logs = {
      type: "request",
      action: `${student?.user?.name} requested to transfer to ${newTeacherData?.name} from ${currentTeacherName} at ${timestamp}`,
      user: studentId!,
    };
    await newLog(log);
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      throw new Error(e.message);
    } else {
      throw new Error("Unknown error");
    }
  }
}

export async function getTeacherRequests(userId: string) {
  try {
    const incomingRequests = [];
    const outgoingRequests = [];
    // const cacheRequests = await getRequestSet(userId);
    // console.log("cacheRequests", cacheRequests);
    // if (cacheRequests) {
    //   for (const request of cacheRequests) {
    //     if (request.newTeacher === userId) {
    //       incomingRequests.push(request);
    //     } else if (request.currentTeacher === userId) {
    //       outgoingRequests.push(request);
    //     }
    //   }
    //   return { incomingRequests, outgoingRequests };
    // } else {
    const requests = await userRequestQuery.execute({ userId: userId });
    console.log("requests", requests);
    if (requests.length === 0) {
      return;
    }
    for (const request of requests) {
      if (request.status === "pending") {
        await newRequestSet(userId, request);
        if (request.newTeacher === userId) {
          incomingRequests.push(request);
        } else if (request.currentTeacher === userId) {
          outgoingRequests.push(request);
        }
      }
    }
    return { incomingRequests, outgoingRequests };
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error("Unknown error");
    }
  }
}

export async function getRequests(userId: string) {
  try {
    const cacheRequests = await getKV(`requests:${userId}`);

    if (cacheRequests) {
      const validatedData = requestArrayValidator.parse(
        JSON.parse(cacheRequests),
      );
      return validatedData;
    } else {
      const requests = await userRequestQuery.execute({ userId: userId });
      if (requests.length === 0) {
        return;
      }
      const validatedRequests = requestArrayValidator.parse(requests);
      await setKV(`requests:${userId}`, JSON.stringify(validatedRequests));
      return requests;
    }
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error("Unknown error");
    }
  }
}

/**
 * Function for approving or denying a request
 */

export async function requestApproval(
  requestId: string,
  studentId: string,
  teacherId: string,
  newTeacherId: string,
  status: "approved" | "denied",
) {
  try {
    // clear student request cache

    const [student] = await userRosterQuery.execute({ id: studentId });
    if (!student) throw new NotFoundError("No student found with that ID");

    // get new teacher's roster
    const newClassroomId = await getClassroomIdByTeacher.execute({
      teacherId: newTeacherId,
    });
    if (!newClassroomId)
      throw new NotFoundError("No classroom found with that teacherId");

    // update request status
    const updated: string | undefined = await db.transaction(async (tx) => {
      if (status === "approved") {
        // if approved update student's classroomId in db
        await tx
          .update(schema.students)
          .set({
            classroomId: newClassroomId[0]?.classroomId,
            status: "transferredN",
          })
          .where(eq(schema.students.studentEmail, student.user.email));
      }
      // update request status in db
      await tx
        .update(schema.requests)
        .set({ status: status })
        .where(eq(schema.requests.id, parseInt(requestId)));
      const [request] = await tx
        .select({ timestamp: schema.requests.timestamp })
        .from(schema.requests)
        .where(eq(schema.requests.id, parseInt(requestId)));
      return request?.timestamp;
    });
    // clear request cache
    await removeSingleRequest(student.user.id, updated);
    await removeSingleRequest(teacherId, updated);
    await removeSingleRequest(newTeacherId, updated);
    // log request approval
    const log: Logs = {
      user: newTeacherId,
      type: "request",
      action: `User ${newTeacherId} ${status} request ${requestId} for student ${student.user.id} from teacher ${teacherId} to teacher ${newTeacherId}`,
    };
    await newLog(log);

    return new Response("OK", { status: 200 });
  } catch (e) {
    throw new NotFoundError("No requests found");
  }
}
