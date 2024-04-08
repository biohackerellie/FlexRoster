import { log } from "console";

import type { Logs } from "@local/validators";
import { db, schema } from "@local/db";

import { createClient } from "~/lib/redis";

interface extendedLogs extends Logs {
  id: string;
}

async function processLogs() {
  const client = createClient();
  try {
    const rawLogs = (await client.xreadgroup(
      "GROUP",
      "log-consumer-group",
      "log-consumer",
      "COUNT",
      10,
      "BLOCK",
      2000,
      "STREAMS",
      "logs",
      ">",
    )) as [string, [string, string[]][]][] | null;
    console.log(rawLogs);
    if (rawLogs && rawLogs.length > 0) {
      const streamLogs = rawLogs[0]![1];
      const transformedLogs = streamLogs.map(
        ([streamId, fieldsArray]: [string, string[]]) => {
          const logObject: Record<string, any> = { id: streamId };
          for (let i = 0; i < fieldsArray.length; i += 2) {
            const key = fieldsArray[i] ?? "unknownKey";
            const value = fieldsArray[i + 1];

            if (key === "timestamp") {
              logObject[key] = parseInt(value ?? "0", 10);
            } else {
              logObject[key] = value ?? "";
            }
          }

          const typedLog: extendedLogs = {
            id: logObject.id! as string,
            type: logObject.type! as
              | "error"
              | "request"
              | "attendance"
              | "message",
            user: logObject.user || null,
            action: logObject.action!,
          };
          return typedLog;
        },
      );
      await db.transaction(async (tx) => {
        for (const log of transformedLogs) {
          await tx.insert(schema.logs).values(log);
        }
      });
      await Promise.all(
        transformedLogs.map((log) =>
          client.xack("logs", "log-consumer-group", log.id),
        ),
      );
    } else {
      console.log("No logs to process");
    }
  } catch (e) {
    console.error(e);
    throw new Error("Failed to process logs");
  } finally {
    client.quit();
    process.exit(0);
  }
}

processLogs();
