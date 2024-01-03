import type { TRPCErrorResponse } from '@trpc/server/rpc';
import { cache } from 'react';
import { headers } from 'next/headers';
import { createTRPCClient, loggerLink, TRPCClientError } from '@trpc/client';
import { callProcedure } from '@trpc/server';
import { observable } from '@trpc/server/observable';
import SuperJSON from 'superjson';

import { appRouter, createTRPCContext } from '@student_scheduler/api';
import { auth } from '@student_scheduler/auth';

const createContext = cache(async () => {
  const heads = new Headers(headers());
  heads.set('x-trpc-source', 'rsc');

  return createTRPCContext({
    session: await auth(),
    headers: heads,
  });
});

export const api = createTRPCClient<typeof appRouter>({
  transformer: SuperJSON,
  links: [
    loggerLink({
      enabled: (op) =>
        process.env.NODE_ENV === 'development' ||
        (op.direction === 'down' && op.result instanceof Error),
    }),
    () =>
      ({ op }) =>
        observable((observer) => {
          createContext()
            .then((ctx) => {
              return callProcedure({
                procedures: appRouter._def.procedures,
                path: op.path,
                getRawInput: () => Promise.resolve(op.input),
                ctx,
                type: op.type,
              });
            })
            .then((data) => {
              observer.next({ result: { data } });
              observer.complete();
            })
            .catch((cause: TRPCErrorResponse) => {
              observer.error(TRPCClientError.from(cause));
            });
        }),
  ],
});
