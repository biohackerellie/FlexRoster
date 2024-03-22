import Redis from "ioredis";

import { env } from "~/env";

export function createClient() {
  try {
    const redis = new Redis({
      sentinels: [
        { host: env.REDIS_HOST1, port: parseInt(env.REDIS_PORT) },
        { host: env.REDIS_HOST2, port: parseInt(env.REDIS_PORT) },
        { host: env.REDIS_HOST3, port: parseInt(env.REDIS_PORT) },
      ],
      name: "mymaster",
      showFriendlyErrorStack: true,
      enableAutoPipelining: true,
      maxRetriesPerRequest: 0,
      retryStrategy: (times: number) => {
        if (times > 3) {
          throw new Error(`[Redis] Failed to connect after ${times} attempts.`);
        }
        return Math.min(times * 200, 1000);
      },
    });

    redis.on("error", (error: unknown) => {
      console.warn("[Redis] Error", error);
    });
    return redis;
  } catch (e) {
    throw new Error(`[Redis] Failed to connect`);
  }
}
