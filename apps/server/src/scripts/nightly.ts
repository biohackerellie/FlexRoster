import { $ } from "bun";

await $`echo "Running nightly script ..."`;

$.cwd(`src/scripts`);
console.log("Working directory: ");
await $`pwd`;

const azure = await $`bun ./nightly/azure/index.ts`;
if (azure.exitCode === 1) {
  console.error(azure.stderr);
  process.exit(1);
}
await $`echo "Azure users synced"`;

await $`echo "Clearing database IC tables..."`;

const clearDB = await $`bun ./nightly/clearDB.ts`;
if (clearDB.exitCode === 1) {
  console.error(clearDB.stderr);
  process.exit(1);
}
await $`echo "Database cleared of IC tables"`;

const rosterSync = await $`bun ./nightly/syncRoster.ts`;
if (rosterSync.exitCode === 1) {
  console.error(rosterSync.stderr);
  process.exit(1);
}
await $`echo "Roster synced"`;

const studentSync = await $`bun ./nightly/classRoster.ts`;
if (studentSync.exitCode === 1) {
  console.error(studentSync.stderr);
  process.exit(1);
}
await $`echo "Student roster synced"`;

const teacherCache = await $`bun ./nightly/clearCache.ts`;
if (teacherCache.exitCode === 1) {
  console.error(teacherCache.stderr);
  process.exit(1);
}
await $`echo "Teachers synced to redis`;

const removeDuplicates = await $`bun ./nightly/removeDuplicates.ts`;
if (removeDuplicates.exitCode === 1) {
  console.error(removeDuplicates.stderr);
  process.exit(1);
}
await $`echo "Duplicates removed"`;

console.log("Nightly script completed");
