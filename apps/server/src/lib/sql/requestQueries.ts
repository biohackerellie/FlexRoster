import { db, eq, or, schema, sql } from "@local/db";

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
