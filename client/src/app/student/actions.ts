'use server';

import { revalidatePath } from 'next/cache';
import { client } from '@/lib/eden';

export async function setRoster(
  email: string,
  roomNumber: string,
  teacherName: string
) {
  const res = await client.api.rosters.student[`${email}`].post({
    roomNumber,
    teacherName,
  });
  revalidatePath('/student', 'layout');
  if (res.error) {
    throw new Error('You have already made a request today.', res.error);
  }
  return 200;
}
