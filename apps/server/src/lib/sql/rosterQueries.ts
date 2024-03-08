/**
 * Roster table queries
 */

import { db, eq, schema, sql } from "@local/db";

// get all rosters
export const rosterQuery = db
  .select()
  .from(schema.classRosters)
  .prepare("roster");

export const rosterByTeacherId = db
  .select()
  .from(schema.classRosters)
  .leftJoin(
    schema.classrooms,
    eq(schema.classRosters.classroomId, schema.classrooms.id),
  )
  .where(eq(schema.classrooms.teacherId, sql.placeholder("teacherId")))
  .prepare("rosterByTeacherId");

export const rosterByClassroomId = db
  .select({
    rosterId: schema.classRosters.id,
    studentEmail: schema.classRosters.studentEmail,
    classroomId: schema.classrooms.id,
    roomNumber: schema.classrooms.roomNumber,
    teacherName: schema.classrooms.teacherName,
    teacherId: schema.classrooms.teacherId,
    available: schema.classrooms.available,
  })
  .from(schema.classRosters)
  .innerJoin(
    schema.classrooms,
    eq(schema.classRosters.classroomId, schema.classrooms.id),
  )
  .where(eq(schema.classRosters.classroomId, sql.placeholder("classroomId")))
  .prepare("rosterByClassroomId");
