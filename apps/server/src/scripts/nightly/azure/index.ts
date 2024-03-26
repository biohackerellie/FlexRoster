/**
 * This script is used to fetch all students and teachers from Azure AD and store them in the database.
 */

import { db, eq, like, schema } from "@local/db";

import type { AzureResponse, AzureUser } from "~/lib/types";
import { env } from "~/env";
import azureAuth from "~/lib/azure";
import { fetcher } from "~/lib/utils";

/**
 * Helper function to fetch all users from Azure AD.
 */
async function fetchAllUsers(
  link: string | undefined,
  token: string,
): Promise<AzureUser[]> {
  let users: AzureUser[] = [];
  while (link) {
    const res: AzureResponse<AzureUser> = await fetcher<
      AzureResponse<AzureUser>
    >(link, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        ConsistencyLevel: "eventual",
      },
    });
    if (res.value && res.value.length > 0) {
      users = users.concat(res.value);
    }
    link = res["@odata.nextLink"];
  }
  return users;
}

/**
 * Main function to fetch all students and teachers from Azure AD and store them in the database.
 */

async function azureTeachers(): Promise<AzureUser[]> {
  try {
    const token = await azureAuth();

    const staffLink: string | undefined = env.AZURE_TEACHER_QUERY;
    const helpdeskLink: string | undefined = env.AZURE_HELPDESK_QUERY;
    const staffPromise = fetchAllUsers(staffLink, token);
    const helpdeskPromise = fetchAllUsers(helpdeskLink, token);
    const [staffData, helpdeskData] = await Promise.all([
      staffPromise,
      helpdeskPromise,
    ]);
    // Fetch all classrooms from the database

    let teacherCount = 0;
    let helpdeskCount = 0;
    // Use a transaction to insert all the users into the database at the same time
    await db.transaction(async (tx) => {
      for (const teacher of staffData) {
        let role: "teacher" | "secretary" = "teacher";
        if (
          secretaries.includes(
            teacher.userPrincipalName as (typeof secretaries)[number],
          )
        ) {
          role = "secretary";
        }
        await tx
          .insert(schema.users)
          .values({
            id: teacher.id,
            name: teacher.displayName,
            email: teacher.userPrincipalName,
            role: role,
          })
          .returning({ newID: schema.users.id })
          .onConflictDoNothing();
        const dbClassRooms = await db.query.classrooms.findFirst({
          where: like(schema.classrooms.teacherName, teacher.displayName),
        });
        if (dbClassRooms) {
          await tx.update(schema.classrooms).set({
            teacherId: teacher.id,
          });
          if (role !== "secretary") {
          }
        }
        teacherCount++;
      }

      for (const helpdesk of helpdeskData) {
        await tx
          .insert(schema.users)
          .values({
            id: helpdesk.id,
            name: helpdesk.displayName,
            email: helpdesk.userPrincipalName,
            role: "admin",
          })
          .onConflictDoNothing();
        helpdeskCount++;
      }
    });
    console.log(
      `Added ${teacherCount} teachers and ${helpdeskCount} helpdesk users to the database.`,
    );
    process.exit(0);
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}

azureTeachers();

const secretaries = [
  "rachel_gappa@laurel.k12.mt.us",
  "marita_grammar@laurel.k12.mt.us",
  "brandi_fox@laurel.k12.mt.us",
  "hsmessage@laurel.k12.mt.us",

  "admin@laurel.k12.mt.us",
  "stacy_hall@laurel.k12.mt.us",
  "john_stilson@laurel.k12.mt.us",
] as const;
