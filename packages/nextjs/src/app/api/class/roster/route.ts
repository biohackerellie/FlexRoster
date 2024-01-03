import { NextRequest, NextResponse } from 'next/server';
import { getAllRosters } from '@/functions/queries';

export async function GET(req: NextRequest) {
  const rosters = await getAllRosters.execute();
  return NextResponse.json(rosters);
}

//TODO: Fix all classroomIds in table are null
