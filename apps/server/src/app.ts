import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { classRoutes } from './routes/classes';
import { rosterRoutes } from './routes/rosters';
import { socketRoutes } from './routes/sockets';

import swagger from '@elysiajs/swagger';

const app = new Elysia()
  .use(swagger())
  .use(
    cors({
      origin: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
    })
  )
  .state('version', 1)
  .get('/', ({ store: { version } }) => version)
  .group('/api', (app) =>
    app.use(classRoutes).use(rosterRoutes).use(socketRoutes)
  );

export default app;
