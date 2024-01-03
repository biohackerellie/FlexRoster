import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

export const authRouter = createTRPCRouter({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),

  // testing protected query pattern
  getSecretMessage: protectedProcedure.query(({ ctx }) => {
    return 'You have accessed a protected query';
  }),
});
