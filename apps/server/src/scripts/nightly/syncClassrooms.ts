/**
 * Synchronizes the roster by fetching class data from the server and inserting it into the database.
 * Only classes with titles containing "STEAM-B" are considered.
 * Teacher names containing "Brandi Fox" are skipped.
 * The teacher names are formatted and stored in the database.
 */
import { db, eq, schema } from "@local/db";
import { findUserIdByName, formatTeacherNames } from "@local/validators";

import type { ClassResponse } from "~/lib/types";
import { env } from "~/env";
import { fetcher, icAuth } from "../../lib/utils";

async function syncClassrooms() {
  try {
    const token = await icAuth();

    const existingClassrooms = await db.select().from(schema.classrooms);
    const allTeachers = await db
      .select()
      .from(schema.users)
      .where(eq(schema.users.role, "teacher"));

    let newCount = 0;
    let deletedCount = 0;
    let updatedCount = 0;

    const data = await fetcher<ClassResponse>(`${env.IC_CLASS_QUERY}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-XSRF-TOKEN": env.XSRF_TOKEN,
        Authorization: `Bearer ${token}`,
      },
    });

    // #todo - change class title to env/config variable #153
    // Swap out STEAM value either STEAM-A for first semester or STEAM-B for second semester

    const filteredClasses = data.classes.filter((cls) =>
      cls.title.includes("STEAM-B"),
    );

    const fetchedClasses = filteredClasses.map((cls) => {
      return {
        id: cls.sourcedId,
        teacher: cls.classCode,
        roomNumber: cls.location || "unknown",
      };
    });
    if (existingClassrooms.length === 0 || !existingClassrooms) {
      console.info(
        "No classrooms found in local db, adding all classrooms from Infinite Campus",
      );
      await db.transaction(async (tx) => {
        for (const room of fetchedClasses) {
          if (
            excludedTeachers.some((name) =>
              room.teacher.toLowerCase().includes(name.toLowerCase()),
            )
          ) {
            console.info(`Skipping ${room.teacher}`);
            continue;
          }
          let teacherName = formatTeacherNames(room.teacher);
          // if teacherName is givenName in prefferedNames, replace teacherName with prefferedName
          const prefferedName = prefferedNames.find(
            (name) => name.givenName === teacherName,
          );
          if (prefferedName) {
            teacherName = prefferedName.prefferedName;
          }
          let user = null;
          if (teacherName) {
            user = findUserIdByName(teacherName, allTeachers);
          }
          if (!user) {
            console.error(`Could not find user for ${teacherName}`);
            continue;
          }
          await tx
            .insert(schema.classrooms)
            .values({
              id: room.id,
              roomNumber: room.roomNumber,
              teacherName: teacherName,
              teacherId: user,
            })
            .onConflictDoUpdate({
              target: schema.classrooms.id,
              set: {
                roomNumber: room.roomNumber,
                teacherName: teacherName,
                teacherId: user,
              },
            });
          newCount++;
        }
      });
      console.log(`Added ${newCount} classrooms`);
      console.log("Completed");
      process.exit(0);
    } else {
      // classes that exist in local db but no longer in Infinite Campus
      const existingClassIds = new Set(existingClassrooms.map((c) => c.id));
      const existingClassNumbers = new Set(
        existingClassrooms.map((c) => c.roomNumber),
      );
      const classroomsToDelete = existingClassrooms.filter(
        (classroom) => !fetchedClasses.some((c) => c.id === classroom.id),
      );

      // Get classes that need to be updated if a teacher has changed their room number
      const classesToUpdate = fetchedClasses.filter((fetchedClass) =>
        existingClassrooms.some(
          (existingClass) =>
            existingClass.id === fetchedClass.id &&
            existingClass.roomNumber !== fetchedClass.roomNumber,
        ),
      );

      const classesToInsert = fetchedClasses.filter((c) => {
        !existingClassrooms.some((classroom) => classroom.id === c.id);
      });

      await db.transaction(async (tx) => {
        if (classroomsToDelete.length > 0) {
          for (const classroom of classroomsToDelete) {
            await tx
              .delete(schema.classrooms)
              .where(eq(schema.classrooms.id, classroom.id));
            deletedCount++;
          }
        }
        if (classesToUpdate.length > 0) {
          for (const c of classesToUpdate) {
            await tx
              .update(schema.classrooms)
              .set({ roomNumber: c.roomNumber })
              .where(eq(schema.classrooms.id, c.id));
            updatedCount++;
          }
        }
        if (classesToInsert.length > 0) {
          for (const room of classesToInsert) {
            if (
              excludedTeachers.some((name) =>
                room.teacher.toLowerCase().includes(name.toLowerCase()),
              )
            ) {
              console.info(`Skipping ${room.teacher}`);
              continue;
            }
            let teacherName = formatTeacherNames(room.teacher);
            // if teacherName is givenName in prefferedNames, replace teacherName with prefferedName
            const prefferedName = prefferedNames.find(
              (name) => name.givenName === teacherName,
            );
            if (prefferedName) {
              teacherName = prefferedName.prefferedName;
            }
            let user = null;
            if (teacherName) {
              user = findUserIdByName(teacherName, allTeachers);
            }
            if (!user) {
              console.error(`Could not find user for ${teacherName}`);
              continue;
            }
            await tx
              .insert(schema.classrooms)
              .values({
                id: room.id,
                roomNumber: room.roomNumber,
                teacherName: teacherName,
                teacherId: user,
              })
              .onConflictDoUpdate({
                target: schema.classrooms.id,
                set: {
                  roomNumber: room.roomNumber,
                  teacherName: teacherName,
                  teacherId: user,
                },
              });
            newCount++;
          }
        }
      });
      console.log(`Deleted ${deletedCount} classrooms`);
      console.log(`Added ${newCount} classrooms`);
      console.log(`Updated ${updatedCount} classrooms`);
      console.log("Completed");
      process.exit(0);
    }
  } catch (error) {
    throw new Error();
  }
}

syncClassrooms().catch((e) => {
  console.error(e);
  process.exit(1);
});

const prefferedNames = [
  { givenName: "Carol Leinwand", prefferedName: "Jeannie Leinwand" },
  { givenName: "Donna Kegel", prefferedName: "Evawn Kegel" },
];
const excludedTeachers = ["Brandi Fox", "Fox, Brandi"];
