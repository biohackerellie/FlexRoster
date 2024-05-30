import { db, eq, schema } from "@local/db";
import { logger } from "@local/utils";

async function deleteTeacherUsers() {
  try {
    await db.delete(schema.users).where(eq(schema.users.role, "teacher"));
    logger.debug("Deleted all teachers");
    process.exit(0);
  } catch (error) {
    throw new Error();
  }
}

deleteTeacherUsers().catch((e) => {
  console.error(e);
  process.exit(1);
});
