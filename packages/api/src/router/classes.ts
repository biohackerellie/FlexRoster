import { z } from 'zod';

import { eq, users, classrooms, classRosters } from '@student_scheduler/db';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

export const classroomRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.classrooms.findMany({});
  }),
  rosters: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.classRosters.findMany({});
  }),
  roster: publicProcedure
    .input(z.object({ classroomId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.query.classRosters.findMany({
        where: eq(classRosters.classroomId, input.classroomId),
      });
    }),
});
