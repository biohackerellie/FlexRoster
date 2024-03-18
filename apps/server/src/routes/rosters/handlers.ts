import { NotFoundError } from "elysia";

import type { Request } from "@local/validators";
import { db, eq, schema, sql } from "@local/db";
import { requestValidator } from "@local/validators";

import type { cachedRoster } from "~/lib/types";
import {
  createClient,
  editJson,
  getHash,
  getJSON,
  getKeys,
  getKV,
  getRequestKV,
  getSortedSet,
  setClassRoomKV,
  setHash,
  setHashHM,
  setJSON,
  setKV,
  setRequestKV,
  setSortedSet,
} from "~/lib/redis";
import {
  rosterByClassroomId,
  rosterByTeacherId,
  rosterQuery,
  teacherQuery,
  userRosterQuery,
} from "~/lib/sql";

export async function getRosters() {
  try {
    return await rosterQuery.execute();
  } catch (e) {
    throw new NotFoundError("No rosters found");
  }
}

export async function getRostersById(id: string) {
  try {
    const results =
      (await rosterByClassroomId.execute({ classroomId: id })) ?? null;
    if (!results) throw new NotFoundError("No roster found with that ID");
    return results;
  } catch (e) {
    throw new NotFoundError("No roster found with that ID");
  }
}

export async function getStudentRoster(userId: string) {
  try {
    let teacherName = "";
    let roomNumber = "";
    let message = "";
    const client = createClient();

    const request = await client.hgetall(`request:${userId}`);

    if (Object.keys(request).length > 0) {
      const teacherID = request.newTeacher!;
      const result = await teacherQuery.execute({ id: teacherID });
      const teacher = result[0];
      teacherName = teacher?.user?.name!;
      roomNumber = teacher?.classrooms?.roomNumber!;
      message = `You transfered to FLEX room ${roomNumber} with ${teacherName}`;
    } else {
      const result = await userRosterQuery.execute({ id: userId });
      const roster = result[0];
      teacherName = roster?.classrooms?.teacherName!;
      roomNumber = roster?.classrooms?.roomNumber!;
      message = `Your FLEX class today is with ${teacherName} in room ${roomNumber}`;
    }
    return message;
  } catch (e) {
    console.log(e);
    throw new NotFoundError("No roster found with that userId");
  }
}

export async function setStudentRoster(
  email: string,
  roomNumber: string,
  teacherName: string,
) {
  try {
    console.log("step one");
    const previousRequest = await getRequestKV(email);
    console.log("previousRequest", previousRequest);
    if (previousRequest) {
      console.log("You have already requested a transfer today");
      return new Response("You have already requested a transfer today", {
        status: 301,
      });
    }
    await setClassRoomKV(email, `Room ${roomNumber} with ${teacherName}`);
    await setRequestKV(email);
    await db.insert(schema.transferLogs).values({
      studentEmail: email,
      roomNumber: roomNumber,
      teacherName: teacherName,
    });
    return new Response("OK", { status: 200 });
  } catch (e) {
    throw new NotFoundError("No roster found with that email");
  }
}

export async function getTeacherRoster(userId: string) {
  try {
    let results = [];
    const cache: string = await getJSON(`user:${userId}:roster`);

    if (!cache) {
      const data = await rosterByTeacherId.execute({ userId: userId });
      const studentsObj: Record<string, any> = {};
      for (const r of data) {
        const attendance = "not marked";
        const student = {
          ...r,
          attendance,
        };
        if (student.rosterId) {
          studentsObj[student.rosterId] = student;
        }
      }
      await setJSON(`user:${userId}:roster`, studentsObj);
    } else {
      console.log("cache hit");
      const parsedCache = JSON.parse(cache);
      results = parsedCache;
    }

    return results as cachedRoster[];
  } catch (e) {
    throw new NotFoundError("No roster found with that email");
  }
}

export async function setAttendance(
  userId: string,
  rosterId: string,
  status: string,
) {
  try {
    const path = `$.${rosterId}.attendance`;
    await editJson(`user:${userId}:roster`, `"${status}"`, path);
    return new Response("OK", { status: 200 });
  } catch (e) {
    console.log(e);
    throw new NotFoundError("No roster found with that email");
  }
}

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
    throw new NotFoundError("No requests found");
  }

  for (const key of requestKeys) {
    const rawRequest = await getHash(key);

    const request: Request = {
      status: rawRequest.status!,
      id: rawRequest.id!,
      timestamp: parseInt(rawRequest.timestamp!, 10),
      studentId: rawRequest.studentId!,
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

export async function approveRequest(requestId: string, approved: boolean) {
  const client = createClient();
  if (!approved) {
    const request = await setHash(`request:${requestId}`, "status", "denied");
  } else {
    const request = await setHash(`request:${requestId}`, "status", "approved");
  }
}
