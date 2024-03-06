import { NotFoundError } from "elysia";

import { db, eq, schema, sql } from "@local/db";

import { getCachedUsers, setCachedUsers } from "~/lib/redis";

export async function getDBUser(id: string) {
  try {
    const user = await userQuery.execute({ id: id });
    return user;
  } catch (e) {
    throw new NotFoundError("No user found with that ID");
  }
}

export const userQuery = db.query.users
  .findFirst({
    where: eq(schema.users.id, sql.placeholder("id")),
  })
  .prepare("user");

export const studentQuery = db.query.users
  .findFirst({
    where: eq(schema.users.id, sql.placeholder("id")),
    with: {
      classRosters: {
        with: {
          classroom: true,
        },
      },
    },
  })
  .prepare("student");

export const teacherQuery = db.query.users
  .findFirst({
    where: eq(schema.users.id, sql.placeholder("id")),
    with: {
      classrooms: true,
    },
  })
  .prepare("teacher");

export async function getStudent(id: string) {
  try {
    const student = await studentQuery.execute({ id: id });
    return student;
  } catch (e) {
    throw new NotFoundError("No student found with that ID");
  }
}
