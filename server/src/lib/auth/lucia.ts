import { lucia } from 'lucia';
import { elysia } from 'lucia/middleware';
import { prisma as prismaAdapter } from '@lucia-auth/adapter-prisma';
import prisma from '../prisma';

export const auth = lucia({
  env: 'DEV',
  middleware: elysia(),
  adapter: prismaAdapter(prisma),
});
