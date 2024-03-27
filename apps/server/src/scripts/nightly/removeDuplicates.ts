/**
 * Script to remove dupliacte users from the db by email
 */

import { db, eq, schema } from "@local/db";

async function removeDuplicates() {
  try {
    const users = await db.query.classRosters.findMany({});
    const emails = users.map((user) => user.studentEmail);
    const duplicateEmails = emails.filter(
      (email, index) =>
        emails.indexOf(email) !== index && emails.lastIndexOf(email) === index,
    );
    if (duplicateEmails.length === 0) {
      console.log("No duplicates found");
      process.exit(0);
    }
    console.log(`Found ${duplicateEmails.length} duplicate emails`);
    let count = 0;
    await db.transaction(async (tx) => {
      for (const email of duplicateEmails) {
        const user = users.find((user) => user.studentEmail === email)!;
        const id = user.id;
        await tx
          .delete(schema.classRosters)
          .where(eq(schema.classRosters.id, id));
        count++;
      }
    });
    console.log(`Completed ${count} users removed`);
    process.exit(0);
  } catch (error) {
    console.log("error", error);
    throw new Error();
  }
}

removeDuplicates();
