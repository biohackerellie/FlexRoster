import { NotFoundError } from "elysia";

import type { StudentDashboardData } from "@local/validators";
import { db, eq, schema } from "@local/db";
import {
  formatTeacherNames,
  studentClassesArrayValidator,
  StudentDashboardDataValidator,
} from "@local/validators";

import type { RosterResponse } from "~/lib/types";
import { env } from "~/env";
import { clearKV, getKV, setKV } from "~/lib/redis";
import {
  classroomsQuery,
  getClassroomIdByTeacher,
  roomByIdQuery,
  rosterByIDQuery,
  userRosterQuery,
} from "~/lib/sql";
import {
  chatHrefConstructor,
  fetcher,
  formatClasses,
  getHashKey,
  icAuth,
} from "~/lib/utils";

type insertClassRoster = typeof schema.students.$inferInsert;

export async function getClasses(id: string) {
  try {
    let returnData: StudentDashboardData = {
      classes: [],
      currentClass: "",
    };

    const studentCacheKey = `StudentCache-${id}`;
    const cachedStudentData = await getKV(studentCacheKey);
    console.log(cachedStudentData);
    if (cachedStudentData) {
      const validatedStudentData = StudentDashboardDataValidator.parse(
        JSON.parse(cachedStudentData),
      );
      return validatedStudentData;
    }

    const classesKey = `AvailableClasses`;
    const cachedClasses = await getKV(classesKey);

    if (cachedClasses) {
      const validatedClasses = studentClassesArrayValidator.parse(
        JSON.parse(cachedClasses),
      );

      returnData.classes = formatClasses(validatedClasses, id);
    } else {
      const dbData = await classroomsQuery.execute({});
      console.log(dbData);
      if (dbData?.length) {
        const parsedData = studentClassesArrayValidator.parse(dbData);
        await setKV(classesKey, JSON.stringify(parsedData), 1200);
        returnData.classes = formatClasses(parsedData, id);
      }
    }
    console.log("now we here");
    const [student] = await userRosterQuery.execute({ id: id });
    if (student) {
      const teacherName = formatTeacherNames(student.classrooms.teacherName);
      returnData.currentClass = `Your FLEX class today is room ${student.classrooms.roomNumber} with ${teacherName}`;
    }

    const validatedReturnData = StudentDashboardDataValidator.parse(returnData);
    await setKV(studentCacheKey, JSON.stringify(validatedReturnData), 1200);

    return validatedReturnData;
  } catch (e) {
    console.error(e);
    throw new NotFoundError("No classes found");
  }
}

export async function getClassById(id: string) {
  try {
    const result = await roomByIdQuery.execute({ id });
    return result[0];
  } catch (e) {
    throw new NotFoundError("No class found with that ID");
  }
}

/**
 * Reset a single class roster by classroomID
 * @param id - classroomID
 * @returns void
 */

export async function resetOneClass(userId: string) {
  try {
    const classroomId = await getClassroomIdByTeacher.execute({
      teacherId: userId,
    });
    if (!classroomId || classroomId.length === 0) {
      console.info("No classroom found for this teacher");
      return;
    }
    const id = classroomId[0]?.classroomId!;
    const studentsToDelete = await rosterByIDQuery.execute({ id: id });
    if (studentsToDelete.length === 0) {
      console.info("No students to delete");
      return;
    }
    const token = await icAuth();
    const defaultRoster: insertClassRoster[] = [];

    const data = await fetcher<RosterResponse>(
      `${env.IC_BASE_QUERY}/classes/${id}/students?limit=100&ext_basic=true`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-XSRF-TOKEN": env.XSRF_TOKEN,
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const mappedStudents = data.users.map((s) => {
      const fullName = `${s.givenName} ${s.familyName}`;
      return {
        studentEmail: s.email,
        studentName: fullName,
        classroomId: id,
      };
    });
    for (const s of mappedStudents) {
      defaultRoster.push(s);
    }
    await db.transaction(async (tx) => {
      await tx
        .delete(schema.students)
        .where(eq(schema.students.classroomId, id));
      await tx.insert(schema.students).values(defaultRoster);
    });
  } catch (e) {
    console.error(e instanceof Error ? e.message : e);
    throw e;
  }
}

export async function createComment(id: string, comment: string) {
  try {
    await clearKV(`TeacherRoster-${id}`);

    await db
      .update(schema.classrooms)
      .set({ comment: comment })
      .where(eq(schema.classrooms.teacherId, id));
  } catch (e) {
    throw new NotFoundError();
  }
}

export async function deleteComment(id: string) {
  try {
    await clearKV(`TeacherRoster-${id}`);
    await db
      .update(schema.classrooms)
      .set({ comment: null })
      .where(eq(schema.classrooms.teacherId, id));
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    console.log("something went wrong 👌");
    throw e;
  }
}

export async function setAvailability(id: string, status: boolean) {
  try {
    await clearKV(`TeacherRoster-${id}`);
    await db
      .update(schema.classrooms)
      .set({ available: status })
      .where(eq(schema.classrooms.teacherId, id));
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    console.log("something went wrong 👌");
    throw e;
  }
}
