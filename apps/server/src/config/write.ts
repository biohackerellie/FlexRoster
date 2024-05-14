import type { ConfigSchema } from "@local/validators";
import { asc, db, desc, schema } from "@local/db";
import { DefaultConfigSchema } from "@local/validators";

import { CreateTemplateConfig } from "~/lib/utils";
import { logger } from "~/lib/utils/logger";

export async function main() {
  const envFile = Bun.file("./config.ts");

  const dbData = await db
    .select()
    .from(schema.config)
    .orderBy(desc(schema.config.createdAt))
    .limit(1);

  if (!dbData) {
    throw new Error("no config data found");
  }
  const data = dbData[0]!;

  const config = CreateTemplateConfig(data);

  logger.info(data);

  logger.info("Config data parsed successfully");
  await Bun.write(envFile, config);
  process.exit(0);
}

main().catch((err) => {
  logger.error("Error parsing config data", err);
  process.exit(1);
});
