import { createClient } from ".";


type userHash = {
	key: string;
	object: {name: string, role: string};
}


async function setCachedUsers({key, object}: userHash): Promise<string | Error> {
	const client = createClient();
	// check if user is already in cache
	try {
  await client.hset(key, object);
	return 'User added to cache';
} catch (error) {
	return new Error('Error adding user to cache');
}
}

interface returnType {
	user: {
		name: string
	}
}

async function getCachedUsers(key: string): Promise<Record<string,string> | undefined> {
	const client = createClient();
	try {
		console.log('key', key)
		const user = await client.hgetall(`user:${key}`);
		console.log('user', user);
		if (!user) {
			return undefined
		}
		if (user.error) {
			throw new Error('Error getting user from cache');
		}
		return user;
	} catch (error) {
		throw new Error('Error getting user from cache');
	}
}

export { setCachedUsers, getCachedUsers };