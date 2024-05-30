import { InternalServerError, NotFoundError } from "elysia";

import type { Logs } from "@local/utils";
import { logValidator } from "@local/utils";

import { createClient } from ".";

export async function newLog(log: Logs) {
  try {
    const logData = logValidator.parse(log);
    const client = createClient();
    const user = logData.user || "system";
    await client.xadd(
      "logs",
      "*",
      "user",
      user,
      "type",
      logData.type,
      "action",
      logData.action,
    );
    await client.quit();
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      throw new InternalServerError(e.message);
    }
    throw new Error("Unknown error");
  }
}

export async function getLogs() {
  try {
    const client = createClient();
    const logs = await client.xrange("logs", "0", "+");
    return logs;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      throw new InternalServerError(e.message);
    }
    throw new Error("Unknown error");
  }
}
