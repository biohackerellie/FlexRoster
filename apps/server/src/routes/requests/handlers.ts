import { NotFoundError } from "elysia";

import type { Request } from "@local/validators";
import { db, eq, schema, sql } from "@local/db";
import { requestValidator } from "@local/validators";

import { getHash, getKeys, setHash, setHashHM } from "~/lib/redis";
import { getClassroomIdByTeacher } from "~/lib/sql";

export async function newRequest(requestId: string, request: Request) {
  console.log("requestId", requestId, "request", request);
  const requestData = requestValidator.parse(request);
  const res = await getHash(requestId);
  console.log("res", res);
  if (Object.keys(res).length > 0) {
    const status = res.status!;
    if (status !== "denied") {
      throw new Error("You have already made a request today");
    }
  } else {
    await setHashHM(requestId, requestData);
    return Response.json({ message: "Request sent" }, { status: 200 });
  }
}

export async function getRequests(userId: string) {
  const requestPattern = `request:${userId}:*`;
  const requestKeys = await getKeys(requestPattern);
  const incomingRequests = [];
  const outgoingRequests = [];
  if (requestKeys.length === 0) {
    return;
  }

  for (const key of requestKeys) {
    const rawRequest = await getHash(key);

    const request: Request = {
      status: rawRequest.status! as
        | "pending"
        | "approved"
        | "denied"
        | "checked in",
      id: rawRequest.id!,
      timestamp: parseInt(rawRequest.timestamp!, 10),
      studentId: parseInt(rawRequest.studentId!),
      studentName: rawRequest.studentName!,
      currentTeacherName: rawRequest.currentTeacherName!,
      newTeacherName: rawRequest.newTeacherName!,
      currentTeacher: rawRequest.currentTeacher!,
      newTeacher: rawRequest.newTeacher!,
    };
    if (request.newTeacher === userId) {
      incomingRequests.push(request);
    } else if (request.currentTeacher === userId) {
      outgoingRequests.push(request);
    }
  }
  return { incomingRequests, outgoingRequests };
}

export async function approveRequest(
  requestId: string,
  studentId: number,
  teacherId: string,
  newTeacherId: string,
) {
  try {
    console.log("requestId", requestId);
    const keys = await getKeys(`request:*`);
    console.log("keys", keys);
    for (const key of keys) {
      const rawRequest = await getHash(key);
      if (rawRequest.id === requestId) {
        await setHash(key, "status", "approved");
      }
    }
    // transfer part above works

    // remove student from current teacher json roster and add to new teacher json roster

    const newClassroomId = await getClassroomIdByTeacher.execute({
      teacherId: newTeacherId,
    });
    if (!newClassroomId)
      throw new NotFoundError("No classroom found with that teacherId");
    await db
      .update(schema.classRosters)
      .set({ classroomId: newClassroomId[0]?.classroomId })
      .where(eq(schema.classRosters.id, studentId));

    return new Response("OK", { status: 200 });
  } catch (e) {
    throw new NotFoundError("No requests found");
  }
}

// currently not working, deletes entire roster of the new teacher

export async function denyRequest(requestId: string, studentId: string) {
  try {
    const keys = await getKeys(`request:*:${studentId}`);
    for (const key of keys) {
      const rawRequest = await getHash(key);
      if (rawRequest.id === requestId) {
        await setHash(key, "status", "denied");
      }
    }
    return new Response("OK", { status: 200 });
  } catch (e) {
    throw new NotFoundError("No requests found");
  }
}
