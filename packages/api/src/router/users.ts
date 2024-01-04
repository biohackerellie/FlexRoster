import { z } from 'zod';

import { eq, users, classrooms, classRosters } from '@student_scheduler/db';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

export const userRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.users.findMany({});
  }),
});
