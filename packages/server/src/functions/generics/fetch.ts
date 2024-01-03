/**
 * Fetches data from the specified URL and returns it as a Promise of type T.
 * @param url - The URL to fetch the data from.
 * @param options - Optional request options.
 * @returns A Promise that resolves to the fetched data of type T.
 * @throws An error if the fetch request fails or if the response is not OK.
 * @template T - The type of the fetched data.
 */

import fetch, { RequestInit as NodeFetchRequestInit } from 'node-fetch';

async function fetcher<T>(
  url: string,
  options?: NodeFetchRequestInit
): Promise<T> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Error: ', { cause: Error });
    }
    const data: T = (await response.json()) as T;
    return data;
  } catch (error) {
    throw new Error('Error: ', { cause: Error });
  }
}

export default fetcher;

/**
 *	@example Usage:
 *
 *  const exampleUsage = async () => {
 * 	try {
 * 		const data = await fetcher<MyDataType>('https://api.example.com/data');
 * 		console.log(data);
 * 	} catch (error) {
 * 		console.error(error);
 * 	}
 * };
 */
