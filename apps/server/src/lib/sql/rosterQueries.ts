/**
 * Roster table queries
 */

import { db, eq, schema, sql } from "@local/db";

// get all rosters
export const rosterQuery = db.select().from(schema.students).prepare("roster");

export const rosterByIDQuery = db
  .select()
  .from(schema.students)
  .where(eq(schema.students.id, sql.placeholder("id")))
  .prepare("rosterByID");

export const rosterByTeacherId = db
  .select({
    rosterId: schema.students.id,
    transferred: schema.students.transferred,
    arrived: schema.students.arrived,
    studentEmail: schema.students.studentEmail,
    studentName: schema.students.studentName,
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

export const userByRosterId = db
  .select({
    id: schema.users.id,
    email: schema.users.email,
    name: schema.users.name,
  })
  .from(schema.students)
  .innerJoin(schema.users, eq(schema.students.studentEmail, schema.users.email))
  .where(eq(schema.students.id, sql.placeholder("rosterId")))
  .prepare("userByRosterId");
