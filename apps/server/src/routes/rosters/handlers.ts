import { NotFoundError } from "elysia";

import type { AllStudents, Availability, TeacherRoster } from "@local/utils";
import { and, db, eq, schema } from "@local/db";
import {
  allStudentsArrayValidator,
  logger,
  teacherRosterArrayValidator,
} from "@local/utils";

import { getAlerts } from "~/lib/redis";
// import {
//   getKV,
//   getRequestKV,
//   removeSingleRequest,
//   setClassRoomKV,
//   setKV,
// } from "~/lib/redis";
import {
  allStudentsMap,
  DoesClassroomExist,
  rosterByClassroomId,
  rosterByTeacherId,
  teacherAvailableTodayQuery,
  teacherPendingRequestCount,
  userQuery,
  userRosterQuery,
} from "~/lib/sql";
import { chatHrefConstructor, getHashKey } from "~/lib/utils";

export async function getRosters() {
  try {
    let data: AllStudents[] = [];
    const dbData = await allStudentsMap.execute({});
    if (dbData?.length) {
      const parsedData = allStudentsArrayValidator.parse(dbData);
      data = parsedData;
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

interface TeacherData {
  teacherRoster: TeacherRoster[];
  chatCount: number;
  requestCount: number;
}
export async function getTeacherRoster(userId: string) {
  try {
    const data: TeacherData = {
      teacherRoster: [],
      chatCount: 0,
      requestCount: 0,
    };
    const today: Date | string = new Date();
    today.setHours(0, 0, 0, 0);
    const chatData = await getAlerts(userId);
    if (chatData) {
      data.chatCount = chatData.count;
    }
    const [requestData] = await teacherPendingRequestCount.execute({
      teacherId: userId,
    });
    if (requestData) data.requestCount = requestData.count;
    const dbData = await rosterByTeacherId.execute({ userId: userId });
    if (dbData?.length > 0) {
      const result = dbData.map((student) => {
        return {
          ...student,
          chatId: student.studentId
            ? `/dashboard/chat/${chatHrefConstructor(userId, student.studentId)}`
            : null,
        };
      });

      const parsedData = teacherRosterArrayValidator.parse(result);
      data.teacherRoster = parsedData;
    }

    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    throw new NotFoundError("No roster found with that email");
  }
}

export async function setAttendance(
  studentId: string,
  status: "arrived" | "default" | "transferredN",
) {
  try {
    const studentRaw = await userRosterQuery.execute({ id: studentId });
    const student = studentRaw[0]!;
    if (status === "arrived") {
      await db.transaction(async (tx) => {
        await tx
          .update(schema.students)
          .set({ status: "transferredA" })
          .where(eq(schema.students.id, student.students.id));
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
          .where(eq(schema.requests.studentId, student.user.id));
        return updatedRequest!;
      });
    } else if (status === "transferredN") {
      await db.transaction(async (tx) => {
        await tx
          .update(schema.students)
          .set({
            status: "transferredN",
          })
          .where(eq(schema.students.id, student.students.id));
        await tx
          .update(schema.requests)
          .set({ status: "approved" })
          .where(eq(schema.requests.studentId, studentId));

        const [updatedRequest] = await tx
          .select({
            timestamp: schema.requests.timestamp,
            newTeacher: schema.requests.newTeacher,
            currentTeacher: schema.requests.currentTeacher,
          })
          .from(schema.requests)
          .where(eq(schema.requests.studentId, studentId));
        return updatedRequest!;
      });
    } else {
      await db.transaction(async (tx) => {
        await tx
          .update(schema.students)
          .set({
            status: "default",
            classroomId: student.students.defaultClassroomId,
          })
          .where(eq(schema.students.id, student.students.id));
        await tx
          .update(schema.requests)
          .set({ status: "cancelled" })
          .where(eq(schema.requests.studentId, studentId));
        const [updatedRequest] = await tx
          .select({
            timestamp: schema.requests.timestamp,
            newTeacher: schema.requests.newTeacher,
            currentTeacher: schema.requests.currentTeacher,
          })
          .from(schema.requests)
          .where(eq(schema.requests.studentId, studentId));
        return updatedRequest!;
      });
    }

    return new Response("OK", { status: 200 });
  } catch (e) {
    console.error(e);
    throw new NotFoundError("No roster found with that email");
  }
}
