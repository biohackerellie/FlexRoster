/**
 * Synchronizes the roster by fetching class data from the server and inserting it into the database.
 * Only classes with titles containing "STEAM-B" are considered.
 * Teacher names containing "Brandi Fox" are skipped.
 * The teacher names are formatted and stored in the database.
 */
import { db, eq, like, schema } from "@local/db";
import { findUserIdByName, formatTeacherNames } from "@local/validators";

import { env } from "~/env";
import { ClassResponse } from "~/lib/types";
import { fetcher, icAuth } from "../../lib/utils";

type SelectUser = typeof schema.users.$inferSelect;

async function syncRoster() {
  try {
    const token = await icAuth();

    const data = await fetcher<ClassResponse>(`${env.IC_CLASS_QUERY}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-XSRF-TOKEN": env.XSRF_TOKEN,
        Authorization: `Bearer ${token}` as string,
      },
    });

    // Swap out STEAM value either STEAM-A for first semester or STEAM-B for second semester

    const filteredClasses = data.classes.filter((cls) =>
      cls.title.includes("STEAM-B"),
    );
    console.log(filteredClasses);
    const classTitles = filteredClasses.map((cls) => {
      return {
        id: cls.sourcedId,
        teacher: cls.classCode,
        roomNumber: cls.location || "unknown",
      };
    });
    const allTeachers = await db.query.users.findMany({
      where: eq(schema.users.role, "teacher"),
    });

    let count = 0;
    await db.transaction(async (tx) => {
      for (const room of classTitles) {
        // if room.teacher contains "Brandi Fox" in any order, skip entry
        if (
          room.teacher.includes("Brandi Fox") ||
          room.teacher.includes("Fox, Brandi")
        ) {
          continue;
        }
        let teacherName = formatTeacherNames(room.teacher);
        let user = null;
        if (teacherName) {
          user = findUserIdByName(teacherName, allTeachers);
        }

        // get teacher id from users table for corresponding teacher name

        await tx.insert(schema.classrooms).values({
          id: room.id,
          roomNumber: room.roomNumber,
          teacherName: teacherName,
          teacherId: user,
        });
        count++;
        console.log(count);
      }
    });
    console.log("Completed");
    process.exit(0);
  } catch (error) {
    throw new Error();
  }
}

syncRoster();
