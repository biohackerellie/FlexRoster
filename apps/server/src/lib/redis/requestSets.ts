import type { Request } from "@local/utils";
import { requestArrayValidator, requestValidator } from "@local/utils";

import { createClient } from ".";

export async function newRequestSet(userId: string, request: Request) {
  try {
    const RequestData = requestValidator.parse(request);
    const client = createClient();
    await client.zadd(
      `${userId}:request`,
      RequestData.timestamp,
      JSON.stringify(RequestData),
    );
    await client.quit();
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error("Unknown error");
    }
  }
}

export async function deleteSet(userId: string) {
  try {
    const client = createClient();
    await client.del(`${userId}:request`);
    await client.quit();
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error("Unknown error");
    }
  }
}

export async function getRequestSet(
  userId: string,
): Promise<Request[] | undefined> {
  try {
    const client = createClient();

    const results: string[] = await client.zrange(`${userId}:request`, 0, -1);
    await client.quit();
    const dbRequests = results.map((request) => JSON.parse(request) as Request);
    const requests = requestArrayValidator.parse(dbRequests);
    if (requests.length === 0) {
      return undefined;
    } else {
      return requests;
    }
  } catch (e) {
    console.error(e);
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error("Unknown error");
    }
  }
}

export async function removeSingleRequest(
  userId: string | number,
  timestamp?: string,
) {
  const client = createClient();
  if (timestamp) {
    await client.zrem(`${userId}:request`, timestamp);
  } else {
    await client.zremrangebyrank(`${userId}:request`, 0, -1);
  }
  await client.quit();
}
