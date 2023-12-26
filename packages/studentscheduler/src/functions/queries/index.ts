/**
 * @library of prepared queries
 * @uses drizzle-orm
 */

import { db } from '@/lib/db';
import { eq, like, not, or, and } from 'drizzle-orm';
import { classrooms, classRosters } from '@/lib/db';

export const getAllClasses = db.query.classrooms
  .findMany({})
  .prepare('classes');

export const getRosterByClassroom = db.query.classRosters
  .findFirst({
    where: eq(classRosters.classroomId, 'classroomId'),
  })
  .prepare('roster');

export const getAllRosters = db.query.classRosters
  .findMany({})
  .prepare('rosters');
