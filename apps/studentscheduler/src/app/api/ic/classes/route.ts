import { NextRequest, NextResponse } from 'next/server';
import { classrooms, classRosters } from '@/lib/db';
import { db } from '@/lib/db';
import { fetcher } from '@/functions/generics';
import { ClassResponse } from '@/lib/types';
import { icAuth } from '@/functions/actions/auth';

export async function POST(request: NextRequest) {
  try {
    const token = await icAuth();

    const data = await fetcher<ClassResponse>(
      `${process.env.IC_CLASS_QUERY}/classes?filter=${process.env.LHS_SOURCE_ID}&limit=1200`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-XSRF-TOKEN': process.env.XSRF_TOKEN as string,
          Authorization: `Bearer ${token}` as string,
        },
      }
    );
    const filteredClasses = data.classes.filter((cls) =>
      cls.title.includes('STEAM-A')
    );

    const classTitles = filteredClasses.map((cls) => {
      return {
        id: cls.sourcedId,
        teacher: cls.classCode,
        roomNumber: cls.location || 'unknown',
      };
    });

    const classroomsToCreate = [];
    let count = 0;
    for (const room of classTitles) {
      classroomsToCreate.push({
        id: room.id,
        roomNumber: room.roomNumber,
        teacherName: room.teacher,
      });
      count++;
    }
    console.log(classroomsToCreate);
    await db.insert(classrooms).values(classroomsToCreate);
    console.log(classroomsToCreate, count);

    return NextResponse.json(
      { message: 'success' },
      { status: 200, statusText: 'OK' }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'error' }, { status: 500 });
  }
}
