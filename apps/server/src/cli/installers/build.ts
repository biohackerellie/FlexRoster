import { $ } from "bun";

import { logger } from "~/lib/utils/logger";

$.cwd(`src/cli/installers`);
const buildScript = await $`./deploy.sh`;
if (buildScript.exitCode === 1) {
  logger.error(buildScript.stderr);
  process.exit(1);
}
