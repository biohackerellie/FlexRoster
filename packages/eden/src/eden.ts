import { edenFetch, edenTreaty } from '@elysiajs/eden';
import type { App } from 'server';
import { env } from './env';

const fetch = edenFetch<App>(
  `${env.NEXT_PUBLIC_API_URL}:${env.NEXT_PUBLIC_API_PORT}`
);

const client = edenTreaty<App>(
  `${env.NEXT_PUBLIC_API_URL}:${env.NEXT_PUBLIC_API_PORT}`
);

export { fetch, client };
