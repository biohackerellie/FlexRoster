import { NotFoundError } from "elysia";

import type { Logs, Request } from "@local/validators";
import { db, eq, schema, sql } from "@local/db";

import {
  getHash,
  getKeys,
  getRequestSet,
  newLog,
  newRequestSet,
  removeSingleRequest,
  setHash,
} from "~/lib/redis";
import {
  getClassroomIdByTeacher,
  userQuery,
  userRequestQuery,
  userRosterQuery,
} from "~/lib/sql";

interface newRequestProps {
  userId: string;
  teacherId: string;
  dateRequested: string;
}

type insertRequest = typeof schema.requests.$inferInsert;




export async function newRequest({
  userId,
  teacherId,
  dateRequested,
}: newRequestProps) {
  try {

    const res = await getRequestSet(userId);
    if (res && res.length > 0) {
      const status = res[0]?.status!;
      if (status !== "denied") {
        return new Response("Invalid", { status: 401 });
      }
    } else {
      const studentRaw = await userRosterQuery.execute({ id: userId });
      if (studentRaw.length === 0) {
        throw new NotFoundError("No student found with that ID");
      }
      const student = studentRaw[0];
      const currentTeacher = student?.classrooms?.teacherId!;
      const currentTeacherName = student?.classrooms?.teacherName!;
      const newTeacherRaw = await userQuery.execute({ id: teacherId });
      if (newTeacherRaw.length === 0) {
        throw new NotFoundError("No teacher found with that ID");
      }
      const newTeacher = newTeacherRaw[0];

      const timestamp = Date.now().toString();
      const requestData: insertRequest = {
        status: "pending",
        studentName: student?.user?.name!,
        studentId: student?.classRosters?.id!,
        dateRequested,
        currentTeacher,
        currentTeacherName,
        newTeacher: teacherId,
        newTeacherName: newTeacher?.name!,
        timestamp,
      };
      const insertRequest = async (request: insertRequest) => {
        return db.insert(schema.requests).values(request);
      };
      await insertRequest(requestData);
      const log: Logs = {
        type: "request",
        action: `${student?.user?.name} requested to transfer to ${newTeacher?.name} from ${currentTeacherName} at ${timestamp}`,
        user: userId,
      };
      await newLog(log);
      return Response.json({ message: "Request sent" }, { status: 200 });
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      throw new Error(e.message);
    } else {
      throw new Error("Unknown error");
    }
  }
}

export async function getRequests(
  userId: string,
  userRole: "student" | "teacher" | "admin" | "secretary",
) {
  try {
    let incomingRequests = [];
    let outgoingRequests = [];
    const cacheRequests = await getRequestSet(userId);
    if (cacheRequests) {
      if (userRole === "teacher") {
        for (const request of cacheRequests) {
          if (request.newTeacher === userId) {
            incomingRequests.push(request);
          } else if (request.currentTeacher === userId) {
            outgoingRequests.push(request);
          }
        }
        return { incomingRequests, outgoingRequests };
      } else {
        return cacheRequests;
      }
    } else {
      const requests = await userRequestQuery.execute({ userId: userId });

      if (requests.length === 0) {
        return;
      }
      for (const request of requests) {
        await newRequestSet(userId, request);
        if (userRole === "teacher") {
          if (request.newTeacher === userId) {
            incomingRequests.push(request);
          } else if (request.currentTeacher === userId) {
            outgoingRequests.push(request);
          }
        }
      }
      if (userRole === "teacher") {
        return { incomingRequests, outgoingRequests };
      } else {
        return requests;
      }
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
  studentId: number,
  teacherId: string,
  newTeacherId: string,
  status: "approved" | "denied",
) {
  try {
    // clear student request cache
    await removeSingleRequest(studentId);

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
          .update(schema.classRosters)
          .set({ classroomId: newClassroomId[0]?.classroomId })
          .where(eq(schema.classRosters.id, studentId));
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
    // clear teacher request cache
    await removeSingleRequest(teacherId, updated);
    await removeSingleRequest(newTeacherId, updated);
    // log request approval
    const log: Logs = {
      user: newTeacherId,
      type: "request",
      action: `User ${newTeacherId} ${status} request ${requestId} for student ${studentId} from teacher ${teacherId} to teacher ${newTeacherId}`,
    };
    await newLog(log);

    return new Response("OK", { status: 200 });
  } catch (e) {
    throw new NotFoundError("No requests found");
  }
}
