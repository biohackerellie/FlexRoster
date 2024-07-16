/**
 * Synchronizes the roster by fetching class data from the server and inserting it into the database.
 * The teacher names are formatted and stored in the database.
 */
import { db, eq, schema } from "@local/db";
import { findUserIdByName, formatTeacherNames, logger } from "@local/utils";

import type { ClassResponse } from "~/lib/types";
import { excludedTeachers, preferredNames, semesterClassName } from "~/config";
import { env } from "~/env";
import { classroomsQuery } from "~/lib/sql";
import { fetcher, icAuth, icClassQueryFunction } from "../../lib/utils";

async function syncClassrooms() {
  try {
    const token = await icAuth();

    const existingClassrooms = await classroomsQuery.execute({});

    const allTeachers = await db
      .select()
      .from(schema.users)
      .where(eq(schema.users.role, "teacher"));

    let newCount = 0;
    let deletedCount = 0;
    let updatedCount = 0;

    const data = await fetcher<ClassResponse>(
      icClassQueryFunction(env.LHS_SOURCE_ID, env.ONEROSTER_APPNAME),
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "X-XSRF-TOKEN": env.XSRF_TOKEN,
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const filteredClasses = data.classes.filter((cls) =>
      cls.title.includes(semesterClassName),
    );
    const fetchedClasses = filteredClasses.map((cls) => {
      return {
        id: cls.sourcedId,
        teacher: cls.classCode,
        roomNumber: cls.location || "unknown",
      };
    });
    if (existingClassrooms.length === 0 || !existingClassrooms) {
      logger.info(
        "No classrooms found in local db, adding all classrooms from Infinite Campus",
      );
      await db.transaction(async (tx) => {
        for (const room of fetchedClasses) {
          if (
            excludedTeachers.some((name) =>
              room.teacher.toLowerCase().includes(name.toLowerCase()),
            )
          ) {
            logger.info(`Skipping ${room.teacher}`);
            continue;
          }
          let teacherName = formatTeacherNames(room.teacher);
          // if teacherName is givenName in preferredNames, replace teacherName with preferredName
          const preferredName = preferredNames.find(
            (name) => name.givenName === teacherName,
          );
          if (preferredName) {
            teacherName = preferredName.preferredName;
          }
          let user = null;
          if (teacherName) {
            user = findUserIdByName(teacherName, allTeachers);
          }
          if (!user) {
            logger.error(`Could not find user for ${teacherName}`);
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
      logger.success(`Added ${newCount} classrooms`);
      logger.success("Completed");
      process.exit(0);
    } else {
      const availableClassrooms = existingClassrooms.filter(
        (c) => c.available === true,
      );
      const availableSet = new Set(availableClassrooms.map((c) => c.id));
      const existingClassIds = new Set(existingClassrooms.map((c) => c.id));
      const fetchedClassIds = new Set(fetchedClasses.map((c) => c.id));
      // delete classroom ids that arent in fetchedClassIds
      const classroomsToDelete = existingClassrooms.filter(
        (c) => !fetchedClassIds.has(c.id),
      );

      // Get classes that need to be updated if a teacher has changed their room number
      const classesToUpdate = fetchedClasses.filter((fetchedClass) =>
        existingClassrooms.some(
          (existingClass) =>
            existingClass.id === fetchedClass.id &&
            existingClass.roomNumber !== fetchedClass.roomNumber &&
            !availableSet.has(existingClass.id),
        ),
      );

      const classesToInsert = fetchedClasses.filter(
        (fetchedClass) => !existingClassIds.has(fetchedClass.id),
      );

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
              logger.info(`Skipping ${room.teacher}`);
              continue;
            }
            let teacherName = formatTeacherNames(room.teacher);
            // if teacherName is givenName in prefferedNames, replace teacherName with preferredName
            const preferredName = preferredNames.find(
              (name) => name.givenName === teacherName,
            );
            if (preferredName) {
              teacherName = preferredName.preferredName;
            }
            let user = null;
            if (teacherName) {
              user = findUserIdByName(teacherName, allTeachers);
            }
            if (!user) {
              logger.error(`Could not find user for ${teacherName}`);
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
      logger.info(`Deleted ${deletedCount} classrooms`);
      logger.info(`Added ${newCount} classrooms`);
      logger.info(`Updated ${updatedCount} classrooms`);
      logger.success("Completed");
      process.exit(0);
    }
  } catch (error) {
    throw new Error();
  }
}

syncClassrooms().catch((e) => {
  logger.error(e);
  process.exit(1);
});
