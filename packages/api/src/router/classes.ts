import { z } from 'zod';

import { eq, users, classrooms } from '@student_scheduler/db';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

export const classroomRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.classrooms.findMany({});
  }),
});
