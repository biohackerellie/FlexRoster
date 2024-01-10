import { Elysia } from 'elysia';
import { classRoutes } from './routes/classes';
import { rosterRoutes } from './routes/rosters';
import swagger from '@elysiajs/swagger';

const app = new Elysia();

app
  .use(swagger())
  .group('/api', (app) => app.use(classRoutes).use(rosterRoutes))
  .listen(3030);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
