import { NextRequest, NextResponse } from 'next/server';
import { getRosterByClassroom } from '@/functions/queries';
import { api } from '@/trpc/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const rosterID = params.id;
  const roster = await api.classes.roster.query({ classroomId: rosterID });
  console.log(roster);
  return NextResponse.json(roster);
}
