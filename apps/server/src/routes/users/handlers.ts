import { NotFoundError } from "elysia";

import { db, eq, schema, sql } from "@local/db";

import { getCachedUsers, setCachedUsers } from "~/lib/redis";

export async function cachedUsers(id: string) {
  try {
    const res = await getCachedUsers(id);
    if (!res) {
      throw new Error("Unable to get chat messages");
    }
    return res;
  } catch (e) {
    throw new NotFoundError("No user found with that ID");
  }
}

export async function setCachedUser(body: {
  key: string;
  object: { name: string; role: string };
}) {
  try {
    return await setCachedUsers(body);
  } catch (e) {
    throw new NotFoundError("Error adding user to cache");
  }
}

export async function cachedTeachers() {
  try {
    return await getCachedUsers();
  } catch (e) {
    throw new NotFoundError("No teachers found");
  }
}

export async function getDBUser(id: string) {
  try {
    const user = await userQuery.execute({ id: id });
    return user;
  } catch (e) {
    throw new NotFoundError("No user found with that ID");
  }
}

const userQuery = db.query.users
  .findFirst({
    where: eq(schema.users.id, sql.placeholder("id")),
  })
  .prepare("user");

const studentQuery = db.query.users
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

export async function getStudent(id: string) {
  try {
    const student = await studentQuery.execute({ id: id });
    return student;
  } catch (e) {
    throw new NotFoundError("No student found with that ID");
  }
}


