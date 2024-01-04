import { NextRequest, NextResponse } from 'next/server';
import { db, classrooms } from '@/lib/db';
import { getToken } from '@/lib/cache';
import { api } from '@/trpc/server';

export async function GET(req: NextRequest) {
  const users = await api.users.all.query();

  return NextResponse.json(users, { status: 202 });
}
