import { NotFoundError } from "elysia";

import { db, eq, schema, sql } from "@local/db";

import {
  createClient,
  getRequestKV,
  removeSingleRequest,
  setClassRoomKV,
  setRequestKV,
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
    console.error(e);
    throw new NotFoundError("No roster found with that userId");
  }
}

export async function setStudentRoster(
  email: string,
  roomNumber: string,
  teacherName: string,
) {
  try {
    const previousRequest = await getRequestKV(email);
    if (previousRequest) {
      console.error("You have already requested a transfer today");
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
    const data = await rosterByTeacherId.execute({ userId: userId });
    return data;
  } catch (e) {
    throw new NotFoundError("No roster found with that email");
  }
}

export async function setAttendance(rosterId: number) {
  try {
    const updated = await db.transaction(async (tx) => {
      await tx
        .update(schema.classRosters)
        .set({ arrived: true })
        .where(eq(schema.classRosters.id, rosterId));

      const [updatedRequest] = await tx
        .select({
          timestamp: schema.requests.timestamp,
          newTeacher: schema.requests.newTeacher,
          currentTeacher: schema.requests.currentTeacher,
        })
        .from(schema.requests)
        .where(eq(schema.requests.studentId, rosterId));
      return updatedRequest!;
    });

    await removeSingleRequest(rosterId, updated.timestamp);
    await removeSingleRequest(updated.newTeacher, updated.timestamp);
    await removeSingleRequest(updated.currentTeacher, updated.timestamp);

    return new Response("OK", { status: 200 });
  } catch (e) {
    console.error(e);
    throw new NotFoundError("No roster found with that email");
  }
}
