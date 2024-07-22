/**
 * Retrieve rosters for each class and insert into database
 */

import type { SelectClassRoster } from "@local/db";
import { db, eq, schema } from "@local/db";
import { logger } from "@local/utils";

import type { RosterResponse } from "~/lib/types";
import { env } from "~/env";
import { rosterQuery, studentRequestsQuery } from "~/lib/sql";
import { fetcher, icAuth, icStudentQuery } from "~/lib/utils";

interface Roster {
  studentEmail: string;
  studentName: string;
  classroomId: string;
}

export async function RosterSync() {
  try {
    /**
     * variables
     */
    const token = await icAuth(); // Helper function to get InfinteCampus auth token
    const classes = await db.query.classrooms.findMany({
      where: eq(schema.classrooms.isFlex, true),
    }); // Gets all classes from the database, synced from syncRoster.ts script
    const allStudents = await rosterQuery.execute({}); // Gets all existing students in local DB

    const existingStudentEmails = new Set(
      allStudents.map((s) => s.studentEmail),
    );
    const rosterData: Roster[] = []; // Initialize array to store IC roster data
    const studentsWithRequestToday: SelectClassRoster[] = []; // Initialize array to store students with requests for today
    const today = new Date().toISOString().split("T")[0]!;
    const requests = await studentRequestsQuery.execute({}); // Gets all requests with the related student data from the database

    let studentsUpdated = 0;
    let studentsAdded = 0;
    let studentsDeleted = 0;
    /**
     * Fetches all student data from IC OneRoster api for each class and maps it to the Roster interface
     */

    for (const c of classes) {
      const id = c.id;
      logger.debug(`Fetching roster for class ${c.id}`);
      const data = await fetcher<RosterResponse>(
        icStudentQuery(id, env.ONEROSTER_APPNAME),
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-XSRF-TOKEN": env.XSRF_TOKEN,
            Authorization: `Bearer ${token}`,
          },
        },
      );
      data.users.forEach((user) => {
        rosterData.push({
          studentEmail: user.email ?? "",
          studentName: `${user.givenName} ${user.familyName}`,
          classroomId: c.id,
        });
      });
    }
    logger.info("RosterData: ", JSON.stringify(rosterData));
    const rosterEmails = new Set(rosterData.map((r) => r.studentEmail));
    // const ignoredEmails = new Set(ignoredStudentUsers);

    /**
     * Compares todays date with date on each request, if they match, the student is added to the studentsWithRequestToday array
     */
    if (requests && requests.length > 0) {
      for (const r of requests) {
        if (
          r.requests.dateRequested.toISOString().split("T")[0] === today &&
          r.requests.status === "approved"
        ) {
          studentsWithRequestToday.push({
            ...r.students,
            classroomId: r.classrooms?.id,
            status: "transferredN",
          });
        }
      }
    }
    const studentsWiReqTodayEmails = new Set(
      studentsWithRequestToday.map((r) => r.studentEmail),
    );
    console.info("students with requests today: ", studentsWiReqTodayEmails);

    // variable for students that exist in the db but not in the roster
    const studentsToDelete = allStudents.filter(
      (s) => !rosterEmails.has(s.studentEmail),
    );

    // ignore rosterData for students with requests today, and set other students back to default

    const studentsToUpdate = rosterData.filter(
      (s) =>
        existingStudentEmails.has(s.studentEmail) &&
        !studentsWiReqTodayEmails.has(s.studentEmail),
    );
    // new students to insert
    const studentsToInsert = rosterData.filter(
      (s) =>
        !existingStudentEmails.has(s.studentEmail) &&
        !studentsWiReqTodayEmails.has(s.studentEmail),
    );
    /**
     * Postgres transaction to update, insert, or delete students in the local database
     * we use transactions to ensure that all operations are completed successfully
     * @see https://orm.drizzle.team/docs/transactions
     */
    await db.transaction(async (tx) => {
      try {
        // Update students with requests for today with their requested classroom
        if (studentsWithRequestToday.length > 0) {
          logger.debug("Updating students with requests for today");
          for (const s of studentsWithRequestToday) {
            await tx
              .update(schema.students)
              .set({
                classroomId: s.classroomId,
                status: s.status,
              })
              .where(eq(schema.students.studentEmail, s.studentEmail));
            studentsUpdated++;
          }
        }
        if (studentsToUpdate.length > 0) {
          logger.debug("Updating students");
          for (const s of studentsToUpdate) {
            await tx
              .update(schema.students)
              .set({
                classroomId: s.classroomId,
                status: "default",
              })
              .where(eq(schema.students.studentEmail, s.studentEmail));
            studentsUpdated++;
          }
        }
        if (studentsToDelete.length > 0) {
          logger.debug("Deleting students");
          for (const s of studentsToDelete) {
            logger.debug(`Deleting student ${s.studentEmail}`);
            await tx
              .delete(schema.students)
              .where(eq(schema.students.studentEmail, s.studentEmail));
            studentsDeleted++;
          }
        }
        if (studentsToInsert.length > 0) {
          await tx
            .insert(schema.students)
            .values(studentsToInsert)
            .onConflictDoNothing();
          studentsAdded = studentsToInsert.length;
        }
      } catch (error) {
        console.error(error);
        tx.rollback();
      }
    });
    console.info(
      `${studentsUpdated} students updated, ${studentsAdded} students added, ${studentsDeleted} students deleted.`,
    );
    process.exit(0);
  } catch (error: any) {
    throw new Error(error);
  }
}

RosterSync().catch((e) => {
  console.error(e);
  process.exit(1);
});

// const ignoredStudentUsers = ["elliana_kerns@laurel.k12.mt.us"];
