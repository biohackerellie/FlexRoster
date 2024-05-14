import { $ } from "bun";

import { logger } from "~/lib/utils/logger";

$.cwd(`src/cli/installers`);
const updateScript = await $`./updateCheck.sh`;
if (updateScript.exitCode === 1) {
  logger.error(updateScript.stderr);
  process.exit(1);
}
