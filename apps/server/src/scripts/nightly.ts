import { $ } from "bun";

import { logger } from "@local/utils";

await $`echo "Running nightly script ..."`;

$.cwd(`src/scripts`);
logger.debug("Working directory: ");
await $`pwd`;

// await $`echo "Clearing DB"`;
// const clearDb = await $`bun ./nightly/clearDB.ts`;
// if (clearDb.exitCode === 1) {
//   console.error(clearDb.stderr);
//   process.exit(1);
// }

const processLogs = await $`bun ./processLogs.ts`;
if (processLogs.exitCode === 1) {
  console.error(processLogs.stderr);
  process.exit(1);
}
await $`echo "Logs processed"`;

const azure = await $`bun ./nightly/azure/index.ts`;
if (azure.exitCode === 1) {
  console.error(azure.stderr);
  process.exit(1);
}
await $`echo "Azure users synced"`;

const classroomSync = await $`bun ./nightly/syncClassrooms.ts`;
if (classroomSync.exitCode === 1) {
  console.error(classroomSync.stderr);
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

const redisInit = await $`bun ./nightly/redisInit.ts`;
if (redisInit.exitCode === 1) {
  console.error(redisInit.stderr);
  process.exit(1);
}
await $`echo "Redis flushed"`;

logger.debug("Nightly script completed");
