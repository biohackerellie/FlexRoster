import { $ } from 'bun';
import { env } from '@/env';

$.cwd(`${env.WORKING_DIR}/src/scripts`);

await $`pwd`;

await $`echo "Clearing database ..."`;

const clearDB = await $`bun ./clearDB.ts`;
if (clearDB.exitCode === 1) {
  console.error(clearDB.stderr);
  process.exit(1);
}
await $`echo "Database cleared"`;

const rosterSync = await $`bun ./syncRoster.ts`;
if (rosterSync.exitCode === 1) {
  console.error(rosterSync.stderr);
  process.exit(1);
}
await $`echo "Roster synced"`;

const studentSync = await $`bun ./classRoster.ts`;
if (studentSync.exitCode === 1) {
  console.error(studentSync.stderr);
  process.exit(1);
}
await $`echo "Student roster synced"`;

console.log('Nightly script completed');
