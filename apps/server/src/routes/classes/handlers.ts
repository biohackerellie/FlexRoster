import { NotFoundError } from "elysia";
import { nanoid } from "nanoid";

import type { Availability, StudentDashboardData } from "@local/utils";
import { and, db, eq, schema } from "@local/db";
import {
  availabilityArrayValidator,
  formatTeacherNames,
  logger,
  studentClassesArrayValidator,
  StudentDashboardDataValidator,
} from "@local/utils";

import {
  aggregateClassroomData,
  roomByIdQuery,
  userRosterQuery,
} from "~/lib/sql";
import { convertUTCDateToLocalDate, formatClasses } from "~/lib/utils";

export async function getClasses(id: string) {
  const today = convertUTCDateToLocalDate(new Date());
  today.setHours(0, 0, 0, 0);
  try {
    const returnData: StudentDashboardData = {
      classes: [],
      currentClass: "",
    };

    // const studentCacheKey = `StudentCache-${id}`;
    // const cachedStudentData = await getKV(studentCacheKey);

    // if (cachedStudentData) {
    //   const validatedStudentData = StudentDashboardDataValidator.parse(
    //     JSON.parse(cachedStudentData),
    //   );
    //   return validatedStudentData;
    // }

    // const classesKey = `AvailableClasses`;
    // const cachedClasses = await getKV(classesKey);

    // if (cachedClasses) {
    //   const validatedClasses = studentClassesArrayValidator.parse(
    //     JSON.parse(cachedClasses),
    //   );

    //   returnData.classes = formatClasses(validatedClasses, id);
    // } else {
    const dbData = await aggregateClassroomData();

    if (dbData?.length) {
      const parsedData = studentClassesArrayValidator.parse(dbData);
      returnData.classes = formatClasses(parsedData, id);
    }

    const [student] = await userRosterQuery.execute({ id: id });
    logger.debug(student);
    if (student) {
      const teacherName = formatTeacherNames(student.classrooms.teacherName);
      returnData.currentClass = `Your FLEX class today is room ${student.classrooms.roomNumber} with ${teacherName}`;
    }

    const validatedReturnData = StudentDashboardDataValidator.parse(returnData);
    // await setKV(studentCacheKey, JSON.stringify(validatedReturnData), 1200);

    return validatedReturnData;
  } catch (e) {
    console.error(e);
    throw new NotFoundError("No classes found");
  }
}

export async function getClassById(id: string) {
  try {
    const [result] = await roomByIdQuery.execute({ id: id });
    return result;
  } catch (e) {
    throw new NotFoundError("No class found with that ID");
  }
}

export async function createComment(id: string, comment: string) {
  try {
    // await clearKV(`TeacherRoster-${id}`);

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
    await db
      .update(schema.classrooms)
      .set({ comment: null })
      .where(eq(schema.classrooms.teacherId, id));
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    logger.error("something went wrong 👌");
    throw e;
  }
}

export async function setAvailability(
  teacherId: string,
  classroomId: string,
  dates: Date[],
) {
  try {
    // await clearKV(`TeacherRoster-${teacherId}`);
    logger.debug("passed in dates", dates);
    const existingAvailability = await db
      .select()
      .from(schema.availability)
      .where(eq(schema.availability.teacherId, teacherId));
    let existingDatesSet: Date[] = [];
    if (existingAvailability.length > 0) {
      existingDatesSet = existingAvailability.map((a) =>
        convertUTCDateToLocalDate(a.date),
      );
    }

    logger.debug("existing dates", existingDatesSet);
    const availability: Availability[] = [];
    for (const date of dates) {
      if (!existingDatesSet.includes(date)) {
        availability.push({
          id: nanoid(),
          teacherId: teacherId,
          classroomId: classroomId,
          date: new Date(date),
          available: true,
        });
      }
    }
    logger.debug("availability", availability);
    const parsed = availabilityArrayValidator.parse(availability);
    await db.insert(schema.availability).values(parsed);
    return new Response("Availability set", { status: 200 });
  } catch (e) {
    if (e instanceof Error) {
      logger.error(e.message);
    }
    logger.error("something went wrong 👌");
    throw e;
  }
}

export async function getAvailability(id: string) {
  try {
    const result = await db
      .select()
      .from(schema.availability)
      .where(eq(schema.availability.teacherId, id));

    return result;
  } catch (e) {
    throw new NotFoundError("No availability found");
  }
}

export async function deleteAvailability(id: string, date: Date) {
  try {
    // await clearKV(`TeacherRoster-${id}`);

    const deleteDate = convertUTCDateToLocalDate(date);
    await db
      .delete(schema.availability)
      .where(
        and(
          eq(schema.availability.teacherId, id),
          eq(schema.availability.date, deleteDate),
        ),
      );
    return new Response("Availability deleted", { status: 200 });
  } catch (e) {
    if (e instanceof Error) {
      logger.error(e.message);
    }
    throw e;
  }
}

export async function createClassroom(
  teacherId: string,
  roomNumber: string,
  teacherName: string,
) {
  try {
    logger.debug(
      "creating classroom with: ",
      teacherId,
      roomNumber,
      teacherName,
    );

    const test = await db.insert(schema.classrooms).values({
      teacherId: teacherId,
      roomNumber: roomNumber,
      teacherName: teacherName,
      id: nanoid(),
    });
    logger.debug("test", test);
    return new Response("Classroom created", { status: 200 });
  } catch (e) {
    if (e instanceof Error) {
      logger.error(e.message);
    }
    throw e;
  }
}
