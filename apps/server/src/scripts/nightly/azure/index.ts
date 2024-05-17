/**
 * This script is used to fetch all students and teachers from Azure AD and store them in the database.
 */

import { db, eq, like, schema } from "@local/db";

import type { AzureResponse, AzureUser } from "~/lib/types";
import { env } from "~/env";
import azureAuth from "~/lib/azure";
import { createAzureQueryString, fetcher } from "~/lib/utils";

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
  const secretaries = env.SECRETARIES;
  try {
    const token = await azureAuth();

    const staffLink: string | undefined = createAzureQueryString(
      env.AZURE_TEACHER_GROUP,
    );
    const helpdeskLink: string | undefined = createAzureQueryString(
      env.AZURE_HELPDESK_GROUP,
    );
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
    const existingUsers = await db
      .select({ id: schema.users.id })
      .from(schema.users)
      .where(eq(schema.users.role, "teacher"));
    const existingIds = new Set(existingUsers.map((u) => u.id));
    const newTeachers = staffData.filter((u) => !existingIds.has(u.id));

    await db.transaction(async (tx) => {
      for (const teacher of newTeachers) {
        console.log("adding: ", teacher.userPrincipalName);
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
          .onConflictDoUpdate({
            target: schema.users.id,
            set: {
              name: teacher.displayName,
              email: teacher.userPrincipalName,
              role: role,
            },
          });

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

azureTeachers().catch((e) => {
  console.error(e);
  process.exit(1);
});
