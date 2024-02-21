import { $ } from "bun";

await $`echo "Running nightly script ..."`;

$.cwd(`src/scripts`);
console.log("Working directory: ");
await $`pwd`;

await $`echo "Clearing database ..."`;

const clearDB = await $`bun ./nightly/clearDB.ts`;
if (clearDB.exitCode === 1) {
  console.error(clearDB.stderr);
  process.exit(1);
}
await $`echo "Database cleared"`;

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

const removeDuplicates = await $`bun ./nightly/removeDuplicates.ts`;
if (removeDuplicates.exitCode === 1) {
  console.error(removeDuplicates.stderr);
  process.exit(1);
}
await $`echo "Duplicates removed"`;

const azure = await $`bun ./nightly/azure/index.ts`;
if (azure.exitCode === 1) {
  console.error(azure.stderr);
  process.exit(1);
}
await $`echo "Azure users synced"`;

console.log("Nightly script completed");
