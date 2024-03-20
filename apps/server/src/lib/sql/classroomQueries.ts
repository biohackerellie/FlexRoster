import type { AnyColumn } from "@local/db";
import { db, eq, schema, sql } from "@local/db";

export const classroomsQuery = db
  .select()
  .from(schema.classrooms)
  .innerJoin(schema.users, eq(schema.classrooms.teacherId, schema.users.id))
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
  .innerJoin(schema.users, eq(schema.classrooms.teacherId, schema.users.id))
  .where(eq(schema.classrooms.id, sql.placeholder("id")))
  .prepare("roomById");

export const getClassroomIdByTeacher = db
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
    count: customCount(schema.classRosters.classroomId),
  })
  .from(schema.classRosters)
  .where(eq(schema.classRosters.classroomId, sql.placeholder("classroomId")))
  .prepare("countRosterByClassroomId");

export async function classroomsWithRosterCount() {
  const classrooms = [];
  const rawClassrooms = await allClassrooms.execute();
  for (const room of rawClassrooms) {
    const countData = await countRosterByClassroomId.execute({
      classroomId: room.id,
    });

    const count = countData[0]!.count ?? 0;

    classrooms.push({ ...room, count });
  }
  return classrooms;
}
