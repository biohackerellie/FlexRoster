/**
 * Script to remove dupliacte users from the db by email
 */

import { db, eq, schema } from "@local/db";
import { logger } from "@local/utils";

async function removeDuplicates() {
  try {
    const users = await db.query.students.findMany({});
    const emails = users.map((user) => user.studentEmail);
    const duplicateEmails = emails.filter(
      (email, index) =>
        emails.indexOf(email) !== index && emails.lastIndexOf(email) === index,
    );
    if (duplicateEmails.length === 0) {
      logger.info("No duplicates found");
      process.exit(0);
    }
    logger.info(`Found ${duplicateEmails.length} duplicate emails`);
    let count = 0;
    await db.transaction(async (tx) => {
      for (const email of duplicateEmails) {
        const user = users.find((user) => user.studentEmail === email)!;
        const id = user.id;
        await tx.delete(schema.students).where(eq(schema.students.id, id));
        count++;
      }
    });
    logger.success(`Completed ${count} users removed`);
    process.exit(0);
  } catch (error) {
    logger.error("error", error);
    throw new Error();
  }
}

removeDuplicates().catch((e) => {
  logger.error(e);
  process.exit(1);
});
