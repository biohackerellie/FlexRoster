import { edenFetch } from '@elysiajs/eden';
import type { App } from 'server';
import env from '../../../env';

const fetch = edenFetch<App>(env.SERVER_URL);

function handleError<T>({
  data,
  error,
}: { data: T; error: null } | { data: null; error: Error }): T {
  if (error) {
    throw error;
  }
  return data;
}

export const classQuery = await fetch('/api/classes', {
  method: 'GET',
  params: undefined,
  query: undefined,
  body: undefined,
}).then(handleError);

export type Classrooms = Awaited<ReturnType<typeof classQuery>>[number];
