/**
 * scripts for clearing students from the database
 */

import { db, eq, schema } from "@local/db";

async function deleteStudentUsers() {
  try {
    await db.delete(schema.users).where(eq(schema.users.role, "student"));
    console.log("Deleted all students");
    process.exit(0);
  } catch (error) {
    throw new Error();
  }
}

deleteStudentUsers();
