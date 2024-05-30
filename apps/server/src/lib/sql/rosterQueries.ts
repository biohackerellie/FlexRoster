import type { PgSelect } from "@local/db";
import { and, db, eq, InferSelectModel, schema, sql } from "@local/db";

import { todaysAvailability } from "./classroomQueries";

/**
 * Roster table queries
 */

// get all rosters
export const rosterQuery = db.select().from(schema.students).prepare("roster");

export const allStudentsMap = db
  .select({
    rosterId: schema.students.id,
    studentEmail: schema.students.studentEmail,
    studentName: schema.students.studentName,
    status: schema.students.status,
    teacherName: schema.classrooms.teacherName,
  })
  .from(schema.students)
  .innerJoin(
    schema.classrooms,
    eq(schema.students.classroomId, schema.classrooms.id),
  )
  .prepare("allStudentsMap");

export const rosterByIDQuery = db
  .select()
  .from(schema.students)
  .where(eq(schema.students.id, sql.placeholder("id")))

  .prepare("rosterByID");

export const rosterByTeacherId = db
  .select({
    studentEmail: schema.students.studentEmail,
    studentName: schema.students.studentName,
    status: schema.students.status,
    studentId: schema.users.id,
    roomNumber: schema.classrooms.roomNumber,
    teacherName: schema.classrooms.teacherName,
    classroomId: schema.classrooms.id,
    comment: schema.classrooms.comment,
  })
  .from(schema.students)
  .innerJoin(
    schema.classrooms,
    eq(schema.students.classroomId, schema.classrooms.id),
  )
  .leftJoin(schema.users, eq(schema.students.studentEmail, schema.users.email))
  .where(eq(schema.classrooms.teacherId, sql.placeholder("userId")))
  .prepare("rosterByTeacherId");

export const rosterByClassroomId = db
  .select({
    rosterId: schema.students.id,
    studentEmail: schema.students.studentEmail,
    classroomId: schema.classrooms.id,
    roomNumber: schema.classrooms.roomNumber,
    teacherName: schema.classrooms.teacherName,
    teacherId: schema.classrooms.teacherId,
    available: sql<boolean>`${schema.availability.available ?? false}`,
  })
  .from(schema.students)
  .innerJoin(
    schema.classrooms,
    eq(schema.students.classroomId, schema.classrooms.id),
  )
  .leftJoin(todaysAvailability, eq(schema.classrooms.id, todaysAvailability.id))
  .where(
    and(
      eq(schema.students.classroomId, sql.placeholder("classroomId")),
      eq(schema.availability.classroomId, sql.placeholder("classroomId")),
    ),
  )
  .prepare("rosterByClassroomId");

export const allStudentDetails = db
  .select()
  .from(schema.students)
  .leftJoin(schema.users, eq(schema.students.studentEmail, schema.users.email))
  .leftJoin(
    schema.classrooms,
    eq(schema.students.classroomId, schema.classrooms.id),
  )
  .where(eq(schema.students.id, sql.placeholder("id")))
  .prepare("allStudentDetails");
