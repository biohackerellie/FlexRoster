/**
 * scripts for clearing students from the database
 */

import { db, eq, schema } from "@local/db";
import { logger } from "@local/utils";

async function deleteStudentUsers() {
  try {
    await db.delete(schema.users).where(eq(schema.users.role, "student"));
    logger.debug("Deleted all students");
    process.exit(0);
  } catch (error) {
    if (error instanceof Error) {
      logger.error(error.message);
      throw error;
    } else {
      logger.error("Failed to delete students");
      throw error;
    }
  }
}

deleteStudentUsers().catch((e) => {
  console.error(e);
  process.exit(1);
});
