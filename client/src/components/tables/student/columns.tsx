'use client';
import { ColumnDef } from '@tanstack/react-table';

export type StudentTable = {
  roomNumber: string;
  teacherName: string;
  teacherEmail: string;
  available: boolean;
  id: string;
};

export const columns: ColumnDef<StudentTable>[] = [
  {
    accessorKey: 'roomNumber',
    header: 'Room Number',
  },
  {
    accessorKey: 'teacherName',
    header: 'Teacher Name',
  },
  {
    accessorKey: 'teacherEmail',
    header: 'Teacher Email',
  },
  {
    accessorKey: 'available',
    header: 'Available',
  },
  {
    accessorKey: 'id',
    header: 'ID',
  },
];
