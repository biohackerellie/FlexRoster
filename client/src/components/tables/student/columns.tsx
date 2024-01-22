'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';

export type StudentTable = {
  roomNumber: string;
  teacherName: string;
  available: string;
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
    accessorKey: 'available',
    header: 'Available',
  },
  {
    accessorKey: 'id',
    header: 'ID',
  },
];
