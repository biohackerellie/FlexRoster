import { db, eq, schema, sql } from "@local/db";

export const classroomsQuery = db
  .select()
  .from(schema.classrooms)
  .leftJoin(schema.users, eq(schema.classrooms.teacherId, schema.users.id))
  .prepare("classrooms");

export const roomByIdQuery = db
  .select({
    id: schema.classrooms.id,
    roomNumber: schema.classrooms.roomNumber,
    teacherName: schema.users.name,
    teacherId: schema.users.id,
    available: schema.classrooms.available,
  })
  .from(schema.classrooms)
  .where(eq(schema.classrooms.id, sql.placeholder("id")))
  .prepare("roomById");
