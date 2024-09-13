import type { RedisOptions } from "ioredis";
import Redis from "ioredis";

export function createClient() {
  try {
    const config: RedisOptions = {
      showFriendlyErrorStack: true,
      enableAutoPipelining: true,
      maxRetriesPerRequest: 0,
      retryStrategy: (times: number) => {
        if (times > 3) {
          throw new Error(`[Redis] Failed to connect after ${times} attempts.`);
        }
        return Math.min(times * 200, 1000);
      },
    } as RedisOptions;

    const redis = new Redis(process.env.REDIS_HOST!, config);
    redis.on("error", (error: unknown) => {
      console.warn("[Redis] Error", error);
    });
    return redis;
  } catch (e) {
    throw new Error(`[Redis] Failed to connect`);
  }
}
