import { NextRequest, NextResponse } from 'next/server';
import { getAllClasses } from '@/functions/queries';
import { api } from '@/trpc/server';

export async function GET(req: NextRequest) {
  const classes = await api.classes.all.query();
  return NextResponse.json(classes);
}
