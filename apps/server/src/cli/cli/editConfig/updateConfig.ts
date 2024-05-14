import { $ } from "bun";

import { db, schema } from "@local/db";
import { ConfigSchema } from "@local/validators";

import { CreateTemplateConfig } from "~/lib/utils";

declare var self: Worker;

self.onmessage = async (event: MessageEvent) => {
  const defaultOptions: ConfigSchema = event.data;
  const configFile = Bun.file("src/config/config.ts");
  try {
    await db.insert(schema.config).values(defaultOptions).onConflictDoNothing();

    const proc = await Bun.spawn(["bun", "src/config/set.ts"]);
    await proc.exited;
    self.postMessage("Config Updated Successfully");
  } catch (err) {
    self.postMessage("Error writing file or updating the database");
  }
};

async function writeFile(data: ConfigSchema) {
  try {
    const configFile = Bun.file("src/config/config.ts");
    const config = CreateTemplateConfig(data);
    await Bun.write(configFile, config);
  } catch (err) {
    throw new Error("Error writing file or updating the database");
  }
}
