import { NotFoundError } from "elysia";

import { classroomsQuery, roomByIdQuery } from "~/lib/sql";

export async function getClasses() {
  console.log("hi");
  try {
    const res = await classroomsQuery.execute();
    return res;
  } catch (e) {
    console.log(e);
    throw new NotFoundError("No classes found");
  }
}

export async function getClassById(id: string) {
  try {
    const result = await roomByIdQuery.execute({ id });
    return result[0];
  } catch (e) {
    throw new NotFoundError("No class found with that ID");
  }
}
