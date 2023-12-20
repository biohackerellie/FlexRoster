/**
 * @library of prepared queries
 * @uses drizzle-orm
 */

import { db } from '@/lib/db';
import { eq, like, not, or, and } from 'drizzle-orm';
import { classrooms } from '@/lib/db';

export const getAllClasses = db.query.classrooms
  .findMany({})
  .prepare('classes');
