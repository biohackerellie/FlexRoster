import { $ } from "bun";

import { logger } from "~/lib/utils/logger";

const result = await $`bun ./set.ts`;
