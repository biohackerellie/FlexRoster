import { NextRequest, NextResponse } from 'next/server';
import { getAllRosters } from '@/functions/queries';
import { api } from '@/trpc/server';

export async function GET(req: NextRequest) {
  const rosters = await api.classes.rosters.query();
  return NextResponse.json(rosters);
}
