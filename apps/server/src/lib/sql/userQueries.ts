import { db, eq, schema, sql } from "@local/db";

/**
 * Query single user by id and return the user with their classroom
 */
export const teacherQuery = db
  .select()
  .from(schema.users)
  .leftJoin(schema.classrooms, eq(schema.classrooms.teacherId, schema.users.id))
  .where(eq(schema.users.id, sql.placeholder("id")))
  .prepare("teacher");

/**
 * Query single user by id
 */
export const userQuery = db
  .select({
    id: schema.users.id,
    name: schema.users.name,
    email: schema.users.email,
    role: schema.users.role,
  })
  .from(schema.users)
  .where(eq(schema.users.id, sql.placeholder("id")))
  .prepare("user");

/**
 * single user by email
 */

/**
 * Query single user by id and return the user with their classroom and classRoster
 * @param id - user id
 * @returns User with Classroom
 */
export const userRosterQuery = db
  .select()
  .from(schema.users)
  .innerJoin(
    schema.students,
    eq(schema.students.studentEmail, schema.users.email),
  )
  .innerJoin(
    schema.classrooms,
    eq(schema.students.defaultClassroomId, schema.classrooms.id),
  )
  .where(eq(schema.users.id, sql.placeholder("id")))
  .prepare("userRoster");
