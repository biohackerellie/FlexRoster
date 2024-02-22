import { NotFoundError } from "elysia";

import { db, eq, schema } from "@local/db";

export async function getClasses() {
  console.log("hi");
  try {
    return await db.query.classrooms.findMany({
      with: {
        users: true,
      },
    });
  } catch (e) {
    console.log(e);
    throw new NotFoundError("No classes found");
  }
}

export async function getClassById(id: string) {
  try {
    return await db.query.classrooms.findMany({
      where: eq(schema.classrooms.id, id),
    });
  } catch (e) {
    throw new NotFoundError("No class found with that ID");
  }
}
