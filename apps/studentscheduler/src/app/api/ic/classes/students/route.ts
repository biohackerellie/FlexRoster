/**
 * Retrieves the roster data for all classes from IC and inserts it into the database.
 * @param request - The NextRequest object.
 * @returns A NextResponse object with a success message if the operation is successful, or an error message if there is an error.
 */
import { NextRequest, NextResponse } from 'next/server';
import { db, classRosters } from '@/lib/db';
import { fetcher } from '@/functions/generics';
import { getAllClasses } from '@/functions/queries';
import { RosterResponse } from '@/lib/types';

import { icAuth } from '@/functions/actions/auth';

export async function GET(request: NextRequest) {
  try {
    const token = await icAuth();

    const classes = await getAllClasses.execute();

    const rosterData = [];

    for (const cls of classes) {
      const id = cls.id;

      const data = await fetcher<RosterResponse>(
        `${process.env.IC_CLASS_QUERY}/classes/${id}/students?limit=100&ext_basic=true`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'X-XSRF-TOKEN': process.env.XSRF_TOKEN as string,
            Authorization: `Bearer ${token}` as string,
          },
        }
      );

      const mappedStudents = data.users.map((s) => {
        return {
          studentEmail: s.email,
          classroomID: id,
        };
      });
      for (const s of mappedStudents) {
        rosterData.push(s);
      }
    }
    await db.insert(classRosters).values(rosterData);
    return NextResponse.json(
      { message: 'success' },
      { status: 200, statusText: 'OK' }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'error' }, { status: 500 });
  }
}
