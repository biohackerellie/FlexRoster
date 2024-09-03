import type { Logs } from "@local/utils";
import { db, schema } from "@local/db";
import { logger } from "@local/utils";

import { deleteLogs, getLogs } from "~/lib/redis";

async function processLogs() {
  try {
    const logs = await getLogs();
    await db.insert(schema.logs).values(logs);
    await deleteLogs();
  } catch (e) {
    logger.error(e);
    throw e;
  }
}

processLogs().catch((e) => {
  logger.error(e);
  process.exit(1);
});
