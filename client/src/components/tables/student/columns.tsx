'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { setRoster } from '@/app/student/actions';

export type StudentTable = {
  roomNumber: string;
  teacherName: string;
  available: string;
  email: string;
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
    accessorKey: 'email',
    header: 'Transfer',
    cell: ({ row }) => {
      const email = row.getValue('email') as string;
      const roomNumber = row.getValue('roomNumber') as string;
      const teacherName = row.getValue('teacherName') as string;
      return (
        <Button onClick={() => setRoster(email, roomNumber, teacherName)}>
          Transfer
        </Button>
      );
    },
  },
];
