/**
 * SQL queries for classrooms table
 */

import type { AnyColumn } from "@local/db";
import { and, db, eq, gte, schema, sql } from "@local/db";
import { logger } from "@local/utils";

import { convertUTCDateToLocalDate } from "../utils";

const today = convertUTCDateToLocalDate(new Date());
today.setHours(0, 0, 0, 0);

export const todaysAvailability = db
  .select({
    available: sql<boolean>`BOOL_OR(${schema.availability.available})`.as(
      "available",
    ),
    id: schema.availability.classroomId,
  })
  .from(schema.availability)
  .where(eq(schema.availability.date, today))
  .groupBy(schema.availability.classroomId)
  .as("todaysAvailability");

export const availabilityQuery = db
  .select()
  .from(schema.availability)
  .prepare("availabilityQuery");

export const classroomsQuery = db // get all classrooms and associated teacher
  .select({
    id: schema.classrooms.id,
    roomNumber: schema.classrooms.roomNumber,
    teacherName: schema.classrooms.teacherName,
    teacherId: schema.classrooms.teacherId,
    available: sql<boolean>`COALESCE(${todaysAvailability.available}, FALSE)`,
    comment: schema.classrooms.comment,
  })
  .from(schema.classrooms)
  .leftJoin(todaysAvailability, eq(schema.classrooms.id, todaysAvailability.id))
  .prepare("classroomsQuery");

// aggragate the classroom data to include array of dates to each classroom
export async function aggregateClassroomData() {
  const classrooms = await classroomsQuery.execute();
  const dates = await availabilityQuery.execute();
  const result = classrooms.map((classroom) => {
    const availableDates = dates
      .filter((date) => date.classroomId === classroom.id)
      .map((date) => date.date);
    return { ...classroom, availableDates };
  });
  return result;
}

export const teacherAvailableTodayQuery = db
  .select({
    available: schema.availability.available,
  })
  .from(schema.availability)
  .where(
    and(
      eq(schema.availability.teacherId, sql.placeholder("teacherId")),
      eq(schema.availability.date, today),
    ),
  )

  .prepare("teacherAvailableTodayQuery");
export const roomByIdQuery = db // get classroom by userId
  .select({
    id: schema.classrooms.id,
    roomNumber: schema.classrooms.roomNumber,
    teacherName: schema.classrooms.teacherName,
    teacherId: schema.classrooms.teacherId,
    comment: schema.classrooms.comment,
    available: sql<boolean>`COALESCE(${todaysAvailability.available}, FALSE)`,
  })
  .from(schema.classrooms)
  .leftJoin(todaysAvailability, eq(schema.classrooms.id, todaysAvailability.id))
  .where(eq(schema.classrooms.teacherId, sql.placeholder("id")))
  .prepare("roomById");

export const getClassroomIdByTeacher = db // returns classroomId by teacherId
  .select({
    classroomId: schema.classrooms.id,
  })
  .from(schema.classrooms)
  .where(eq(schema.classrooms.teacherId, sql.placeholder("teacherId")))
  .prepare("getClassroomIdByTeacher");

export const allClassrooms = db
  .select()
  .from(schema.classrooms)
  .prepare("allClassrooms");

export const countRosterByClassroomId = db
  .select({
    count: sql<number>`cast(count(${schema.students.id}) as integer)`,
  })
  .from(schema.students)
  .where(eq(schema.students.classroomId, sql.placeholder("classroomId")))
  .prepare("countRosterByClassroomId");

export async function classroomsWithRosterCount() {
  const classrooms = [];
  const rawClassrooms = await classroomsQuery.execute();
  for (const room of rawClassrooms) {
    const countData = await countRosterByClassroomId.execute({
      classroomId: room.id,
    });

    const count = countData[0]!.count ?? 0;

    classrooms.push({ ...room, count });
  }
  logger.debug("total", classrooms.length);
  return classrooms;
}

export const ClassroomScheduleQuery = db
  .select()
  .from(schema.availability)
  .where(eq(schema.availability.classroomId, sql.placeholder("classroomId")))
  .prepare("ClassroomScheduleQuery");

// export const DoesClassroomExist = db
//   .select({
//     exists: sql<boolean>`exists(${schema.classrooms.id})`.as("exists"),
//   })
//   .from(schema.classrooms)
//   .where(eq(schema.classrooms.teacherId, sql.placeholder("id")))
//   .prepare("DoesClassroomExist");

export async function DoesClassroomExist(userId: string) {
  let exists = false;
  await db
    .select({
      exists: sql<number>`1`.as("exists"),
    })
    .from(schema.classrooms)
    .where(eq(schema.classrooms.teacherId, userId))
    .execute()
    .then((data) => {
      if (data.length > 0) {
        exists = true;
      }
    });
  return exists;
}
