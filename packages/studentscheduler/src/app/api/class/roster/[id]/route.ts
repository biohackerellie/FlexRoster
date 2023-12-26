import { NextRequest, NextResponse } from 'next/server';
import { getRosterByClassroom } from '@/functions/queries';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const rosterID = params.id;

  const roster = await getRosterByClassroom.execute({ classroomId: rosterID });
  console.log(roster);
  return NextResponse.json(roster);
}
