import { NotFoundError } from "elysia";

import type { AllStudents, TeacherRoster } from "@local/validators";
import { db, eq, schema } from "@local/db";
import {
  allStudentsArrayValidator,
  teacherRosterArrayValidator,
} from "@local/validators";

import {
  getKV,
  getRequestKV,
  removeSingleRequest,
  setClassRoomKV,
  setKV,
} from "~/lib/redis";
import {
  allStudentsMap,
  rosterByClassroomId,
  rosterByTeacherId,
  userQuery,
  userRosterQuery,
} from "~/lib/sql";
import { chatHrefConstructor, getHashKey } from "~/lib/utils";

export async function getRosters() {
  try {
    let data: AllStudents[] = [];
    const cacheKey = getHashKey("ALlStudents");
    const cachedData = await getKV(cacheKey);
    if (cachedData) {
      const cacheArray = JSON.parse(cachedData);

      if (cacheArray?.length) {
        const validated = allStudentsArrayValidator.parse(cacheArray);
        data = validated;
      }
    } else {
      const dbData = await allStudentsMap.execute({});
      if (dbData?.length) {
        const parsedData = allStudentsArrayValidator.parse(dbData);
        await setKV(cacheKey, JSON.stringify(parsedData), 120);
        data = parsedData;
      }
    }
    if (!data) throw new NotFoundError("No rosters found");
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
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

export async function getTeacherRoster(userId: string) {
  try {
    let data: TeacherRoster[] = [];
    const cacheKey = `TeacherRoster-${userId}`;
    const cachedData = await getKV(cacheKey);
    if (cachedData) {
      const cacheArray = JSON.parse(cachedData);
      if (cacheArray?.length) {
        const validated = teacherRosterArrayValidator.parse(cacheArray);
        data = validated;
      }
    } else {
      const dbData = await rosterByTeacherId.execute({ userId: userId });
      if (dbData?.length) {
        const result = dbData.map((student) => {
          return {
            ...student,
            teacherId: userId,
            chatId: student.studentId
              ? `/dashboard/chat/${chatHrefConstructor(userId, student.studentId)}`
              : null,
          };
        });
        const parsedData = teacherRosterArrayValidator.parse(result);
        await setKV(cacheKey, JSON.stringify(parsedData), 1200);
        data = parsedData;
      }
    }
    if (!data) throw new NotFoundError("No rosters found");
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
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
      await tx
        .update(schema.requests)
        .set({ status: "arrived" })
        .where(eq(schema.requests.studentId, studentId));

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
