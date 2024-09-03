import { InternalServerError, NotFoundError } from "elysia";
import { nanoid } from "nanoid";

import type { Logs } from "@local/utils";
import { logValidator } from "@local/utils";

import { createClient } from ".";

export async function newLog(log: Logs) {
  try {
    const client = createClient();
    const timestamp = Date.now();
    const user = log.user ?? "system";
    const data = {
      id: timestamp,
      type: log.type,
      user: user,
      action: log.action,
    };
    await client.zadd("logs", timestamp, JSON.stringify(data));
    await client.quit();
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      throw new InternalServerError(e.message);
    }
    throw new Error("Unknown error");
  }
}

export interface ExtendedLogs extends Logs {
  id: string;
}
export async function getLogs() {
  try {
    const client = createClient();
    const logs = await client.zrange("logs", 0, -1);
    const parsedLogs = logs.map((log) => JSON.parse(log) as ExtendedLogs);
    return parsedLogs;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      throw new InternalServerError(e.message);
    }
    throw new Error("Unknown error");
  }
}

export async function deleteLogs() {
  try {
    const client = createClient();
    await client.del("logs");
  } catch (e) {
    if (e instanceof Error) {
      console.error(e);
      throw new InternalServerError(e.message);
    }
    throw new Error("Unknown error");
  }
}
