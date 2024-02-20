import { db, eq, schema } from "@local/db";

import { env } from "~/env";
import { ClassResponse } from "~/lib/types";
import { fetcher, icAuth } from "../lib/utils";

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
        await tx.insert(schema.classrooms).values({
          id: room.id,
          roomNumber: room.roomNumber,
          teacherName: formatTeacherNames(room.teacher),
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

function formatTeacherNames(teacherName: string) {
  const formattedTeacherName = teacherName?.split(", ").reverse().join(" ");
  console.log("formattedTeacherName", formattedTeacherName);
  //remove the middle initial from 'firstname middleinitial lastname'
  const teacher = formattedTeacherName
    ?.split(" ")
    .filter((name) => name.length > 1)
    .join("-");

  return teacher;
}
