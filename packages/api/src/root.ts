import { authRouter } from './router/auth';
import { classroomRouter } from './router/classes';
import { userRouter } from './router/users';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  auth: authRouter,
  classes: classroomRouter,
  users: userRouter,
});

export type AppRouter = typeof appRouter;
