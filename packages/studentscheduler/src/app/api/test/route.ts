import { NextRequest, NextResponse } from 'next/server';
import { classrooms } from '@/lib/db';
import { db } from '@/lib/db';
import { ClassResponse } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const response = await fetch(
      'https://mtdecloud2.infinitecampus.org/campus/api/oneroster/v1p2/laurel/ims/oneroster/rostering/v1p2/classes',
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-XSRF-TOKEN': process.env.XSRF_TOKEN as string,
          Authorization: process.env.ONEROSTER_TOKEN as string,
        },
      }
    );
    const data: ClassResponse = await response.json();
    const filteredClasses = data.classes.filter((cls) =>
      cls.title.includes('STEAM')
    );
    console.log(filteredClasses);

    const classTitles = filteredClasses.map((cls) => {
      return {
        teacher: cls.classCode,
        roomNumber: cls.location || 'unknown',
      };
    });

    const classroomsToCreate = [];
    let count = 0;
    for (const room of classTitles) {
      classroomsToCreate.push({
        roomNumber: room.roomNumber,
        teacherName: room.teacher,
      });
      count++;
    }

    // await db.insert(classrooms).values(classroomsToCreate);
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
