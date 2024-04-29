import { db, eq, schema, sql } from "@local/db";

import { setJSON } from "~/lib/redis";
import { rosterByTeacherId } from "~/lib/sql";

export async function CacheRosters() {
  try {
    const teachers = await db
      .select()
      .from(schema.users)
      .where(eq(schema.users.role, "teacher"));
    if (teachers.length === 0) {
      throw new Error("No teachers found");
    }
    let count = 0;
    for (const teacher of teachers) {
      const data = await rosterByTeacherId.execute({ userId: teacher.id });
      const studentsObj: Record<string, any> = {};
      for (const r of data) {
        const attendance = "not marked";
        const student = {
          ...r,
          attendance,
        };
        if (student.rosterId) {
          studentsObj[student.rosterId] = student;
        }
      }
      await setJSON(`user:${teacher.id}:roster`, studentsObj);
      count++;
    }
    console.log(`Completed. ${count} rosters cached.`);
    process.exit(0);
  } catch (error: any) {
    throw new Error(error);
  }
}
CacheRosters().catch((e) => {
  console.error(e);
  process.exit(1);
});
