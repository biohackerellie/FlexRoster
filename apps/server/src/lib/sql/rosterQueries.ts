/**
 * Roster table queries
 */

import { db, eq, InferSelectModel, schema, sql } from "@local/db";

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
    rosterId: schema.students.id,
    studentEmail: schema.students.studentEmail,
    studentName: schema.students.studentName,
    status: schema.students.status,
    studentId: schema.users.id,
    classroomId: schema.classrooms.id,
    roomNumber: schema.classrooms.roomNumber,
    teacherName: schema.classrooms.teacherName,
    teacherId: schema.classrooms.teacherId,
    available: schema.classrooms.available,
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
    available: schema.classrooms.available,
  })
  .from(schema.students)
  .innerJoin(
    schema.classrooms,
    eq(schema.students.classroomId, schema.classrooms.id),
  )
  .where(eq(schema.students.classroomId, sql.placeholder("classroomId")))
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
