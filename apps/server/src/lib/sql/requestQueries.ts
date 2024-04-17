import { db, eq, gte, or, schema, sql } from "@local/db";

export const userRequestQuery = db
  .select()
  .from(schema.requests)
  .where(
    or(
      eq(schema.requests.studentId, sql.placeholder("userId")),
      eq(schema.requests.newTeacher, sql.placeholder("userId")),
      eq(schema.requests.currentTeacher, sql.placeholder("userId")),
    ),
  )
  .prepare("userRequestQuery");

const today = new Date();
today.setHours(0, 0, 0, 0);

export const studentRequestsQuery = db
  .select()
  .from(schema.requests)
  .innerJoin(schema.users, eq(schema.requests.studentId, schema.users.id))
  .innerJoin(
    schema.students,
    eq(schema.users.email, schema.students.studentEmail),
  )
  .leftJoin(
    schema.classrooms,
    eq(schema.requests.newTeacher, schema.classrooms.teacherId),
  )
  .where(gte(schema.requests.dateRequested, today.toISOString()))
  .prepare("studentRequestsQuery");
