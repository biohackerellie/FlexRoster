import { createClient } from ".";

type userHash = {
  key: string;
  object: { name: string; role: string };
};

async function setCachedUsers({
  key,
  object,
}: userHash): Promise<string | Error> {
  const client = createClient();
  // check if user is already in cache
  try {
    await client.hset(key, object);
    return "User added to cache";
  } catch (error) {
    return new Error("Error adding user to cache");
  }
}

interface returnType {
  user: {
    name: string;
  };
}

type UserId = string;
type UserData = {
  name: string;
  role: string;
  available: boolean;
  roomNumber: string;
  email: string;
};

type cachedUser = {
  [key in `user:${UserId}`]: UserData;
};
async function getCachedUsers(key?: string): Promise<cachedUser | undefined> {
  const client = createClient();
  try {
    if (!key) {
      const userKeys = [];
      for await (const key of client.scanStream({ match: "user:*" })) {
        userKeys.push(...key);
      }

      const users: cachedUser = {};
      for (const userKey of userKeys) {
        const userDetails = await client.hgetall(userKey);
        if (userDetails && Object.keys(userDetails).length > 0) {
          users[userKey] = {
            name: userDetails.name!,
            role: userDetails.role!,
            available: userDetails.available === "true" ? true : false,
            roomNumber: userDetails.roomNumber!,
            email: userDetails.email!,
          };
        }
      }
      return users;
    } else {
      const user = await client.hgetall(`user:${key}`);

      if (!user || Object.keys(user).length === 0) {
        return undefined;
      }

      return {
        [`user:${key}`]: {
          name: user.name!,
          role: user.role!,
          available: user.available === "true" ? true : false,
          roomNumber: user.roomNumber!,
          email: user.email!,
        },
      };
    }
  } catch (error) {
    console.error("Error getting user from cache", error);
    throw new Error("Error getting user from cache");
  } finally {
    client.quit();
  }
}

export { setCachedUsers, getCachedUsers };
