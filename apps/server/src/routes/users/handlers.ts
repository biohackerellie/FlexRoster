import { NotFoundError } from "elysia";

import { userQuery, userRosterQuery } from "~/lib/sql";

export async function getDBUser(id: string) {
  try {
    const user = await userQuery.execute({ id: id });
    const result = user[0] ?? null;
    if (result === null) {
      throw new NotFoundError("No user found with that ID");
    }
    return result;
  } catch (e) {
    throw new NotFoundError("No user found with that ID");
  }
}

export async function getStudent(id: string) {
  try {
    const results = await userRosterQuery.execute({ id: id });
    if (results.length === 0) {
      throw new NotFoundError("No student found with that ID");
    }
    const student = results[0];
    if (student?.classrooms === null) {
      throw new NotFoundError("No Classroom found for student");
    }
    return student;
  } catch (e) {
    throw new NotFoundError("No student found with that ID");
  }
}
