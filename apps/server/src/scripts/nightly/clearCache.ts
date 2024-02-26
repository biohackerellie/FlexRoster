/**
 * This script sets users from postgres into redis hashes
 */

import { db, eq, schema } from "@local/db";

import { setCachedUsers } from "~/lib/redis";

export async function userRedisSync() {
  try {
    const users = await db.query.users.findMany({
      where: eq(schema.users.role, "teacher"),
      with: {
        classrooms: true,
      },
    });
    const userHashes = users.map((u) => {
      return {
        key: `user:${u.id}`,
        object: {
          name: u.name!,
          role: u.role,
          available: u.classrooms?.available,
          roomNumber: u.classrooms?.roomNumber,
          email: u.email,
        },
      };
    });
    for (const u of userHashes) {
      if (u.object.role !== "teacher") {
        continue;
      }
      await setCachedUsers({ key: u.key, object: u.object });
    }
    console.log("Users added to cache");
    process.exit(0);
  } catch (error: any) {
    throw new Error(error);
  }
}

userRedisSync();
