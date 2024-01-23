'use server';

import { revalidatePath } from 'next/cache';
import fetch from '@/lib/eden';

export async function setRoster(
  email: string,
  roomNumber: string,
  teacherName: string
) {
  try {
    const res = await fetch(`/api/rosters/student/:email`, {
      method: 'POST',
      params: { email: email },
      body: { roomNumber: roomNumber, teacherName: teacherName },
    });
    revalidatePath('/student', 'layout');
    console.log(res.response);
    return res.response;
  } catch (e) {
    throw new Error('No roster found with that email');
  }
}
