import { NotFoundError } from "elysia";

import { db, eq, schema } from "@local/db";

import {
  createClient,
  getRequestKV,
  getRequestSet,
  removeSingleRequest,
  setClassRoomKV,
  setRequestKV,
} from "~/lib/redis";
import {
  rosterByClassroomId,
  rosterByTeacherId,
  rosterQuery,
  teacherQuery,
  userByRosterId,
  userQuery,
  userRosterQuery,
} from "~/lib/sql";
import { getRequests } from "../requests/handlers";

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
    const [student] = await userRosterQuery.execute({ id: userId });
    if (!student) throw new NotFoundError("No roster found with that userId");
    const message = `Your FLEX class today is with ${student?.classrooms?.teacherName} in room ${student?.classrooms?.roomNumber}`;
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

export async function setAttendance(studentId: string) {
  try {
    const studentRaw = await userQuery.execute({ id: studentId });
    const student = studentRaw[0]!;
    const updated = await db.transaction(async (tx) => {
      await tx
        .update(schema.students)
        .set({ status: "transferredA" })
        .where(eq(schema.students.studentEmail, student?.email));

      const [updatedRequest] = await tx
        .select({
          timestamp: schema.requests.timestamp,
          newTeacher: schema.requests.newTeacher,
          currentTeacher: schema.requests.currentTeacher,
        })
        .from(schema.requests)
        .where(eq(schema.requests.studentId, student?.id));
      return updatedRequest!;
    });

    await removeSingleRequest(student?.id, updated.timestamp);
    await removeSingleRequest(updated.newTeacher, updated.timestamp);
    await removeSingleRequest(updated.currentTeacher, updated.timestamp);

    return new Response("OK", { status: 200 });
  } catch (e) {
    console.error(e);
    throw new NotFoundError("No roster found with that email");
  }
}
