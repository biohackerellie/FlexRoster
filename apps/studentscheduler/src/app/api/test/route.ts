import { NextRequest, NextResponse } from 'next/server';
import { db, classrooms } from '@/lib/db';
import { getToken } from '@/lib/cache';

export async function GET(req: NextRequest) {
  const token = await getToken('icToken');
  console.log(token);
  return NextResponse.json({ message: 'success' }, { status: 200 });
}
