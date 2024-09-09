import { logger } from "@local/utils";

import { createClient } from "~/lib/redis";

export async function redisInit() {
  const client = createClient();
  await client.flushall();
  await client.quit();
  logger.success("Redis flushed");
  process.exit(0);
}

redisInit().catch((e) => {
  console.error(e);
  process.exit(1);
});
