'use server';
import { cache } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Session } from 'next-auth';
import { Session as CustomSession } from '@/lib/types/auth';

export const getCurrentUser = cache(async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return null;
  }
  const user = new CustomSession(session.user);
  return user;
});
