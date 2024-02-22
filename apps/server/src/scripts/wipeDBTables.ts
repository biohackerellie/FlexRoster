/**
 * This script is used to wipe all the tables in the database, uncomment the script for each table to wipe
 */

import { $ } from "bun";

await $`echo "Wiping database tables ..."`;

$.cwd(`src/scripts`);

await $`echo "Wiping student Users ..."`;

const wipeStudents = await $`bun ./wipeDB/deleteStudents.ts`;
if (wipeStudents.exitCode === 1) {
  console.error(wipeStudents.stderr);
  process.exit(1);
}
await $`echo "Student Users wiped"`;

await $`echo "Wiping Teacher Users ..."`;
const wipeTeachers = await $`bun ./wipeDB/deleteTeachers.ts`;
if (wipeTeachers.exitCode === 1) {
  console.error(wipeTeachers.stderr);
  process.exit(1);
}
await $`echo "Teacher Users wiped"`;
