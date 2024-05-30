/**
 * SQL queries for classrooms table
 */

import type { AnyColumn } from "@local/db";
import { and, db, eq, schema, sql } from "@local/db";

import { convertUTCDateToLocalDate } from "../utils";

const today = convertUTCDateToLocalDate(new Date());
today.setHours(0, 0, 0, 0);

export const todaysAvailability = db
  .select({
    available: schema.availability.available,
    id: schema.availability.classroomId,
  })
  .from(schema.availability)
  .where(eq(schema.availability.date, today))
  .as("todaysAvailability");

export const classroomsQuery = db // get all classrooms and associated teacher
  .select({
    id: schema.classrooms.id,
    roomNumber: schema.classrooms.roomNumber,
    teacherName: schema.classrooms.teacherName,
    teacherId: schema.classrooms.teacherId,
    available: sql<boolean>`${todaysAvailability.available ?? false}`,
    comment: schema.classrooms.comment,
  })
  .from(schema.classrooms)
  .leftJoin(todaysAvailability, eq(schema.classrooms.id, todaysAvailability.id))
  .prepare("classroomsQuery");

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
    teacherName: schema.users.name,
    teacherId: schema.users.id,
    available: sql<boolean>`${schema.availability.available ?? false}`,
  })
  .from(schema.classrooms)
  .innerJoin(schema.users, eq(schema.classrooms.teacherId, schema.users.id))
  .leftJoin(todaysAvailability, eq(schema.classrooms.id, todaysAvailability.id))
  .where(eq(schema.classrooms.id, sql.placeholder("id")))
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

const customCount = (column?: AnyColumn) => {
  if (column) {
    return sql<number>`cast(count(${column}) as integer)`;
  } else {
    return sql<number>`cast(count(*) as integer)`;
  }
};

export const countRosterByClassroomId = db
  .select({
    count: customCount(schema.students.classroomId),
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
  return classrooms;
}

export const ClassroomScheduleQuery = db
  .select()
  .from(schema.availability)
  .where(eq(schema.availability.classroomId, sql.placeholder("classroomId")))
  .prepare("ClassroomScheduleQuery");
