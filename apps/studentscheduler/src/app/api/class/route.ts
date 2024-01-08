import { NextRequest, NextResponse } from 'next/server';
import { getAllClasses } from '@/functions/queries';

export async function GET(req: NextRequest) {
  const classes = await getAllClasses.execute();
  return NextResponse.json(classes);
}
