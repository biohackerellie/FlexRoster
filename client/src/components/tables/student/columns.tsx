'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { setRoster } from '@/app/student/actions';
import { useState } from 'react';
import { set } from 'zod';

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
    cell: ({ row, column }) => {
      const [isDisabled, setIsDisabled] = useState(false);
      const email = row.getValue('email') as string;
      const roomNumber = row.getValue('roomNumber') as string;
      const teacherName = row.getValue('teacherName') as string;
      const handleTransfer = async (
        email: string,
        roomNumber: string,
        teacherName: string
      ) => {
        column.toggleVisibility(false);
        setTimeout(() => column.toggleVisibility(true), 36000);
        try {
          await setRoster(email, roomNumber, teacherName);
        } catch (err) {
          console.error(err);
        }
      };
      return (
        <Button
          onClick={() => handleTransfer(email, roomNumber, teacherName)}
          disabled={isDisabled}
        >
          Transfer
        </Button>
      );
    },
  },
];
