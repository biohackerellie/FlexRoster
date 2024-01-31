'use client';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { setRoster } from '@/app/student/actions';
import { useState } from 'react';

import { toast } from 'sonner';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

export type StudentTable = {
  roomNumber: string;
  teacherName: string;
  available: string;
  email: string;
};

export const columns: ColumnDef<StudentTable>[] = [
  {
    accessorKey: 'roomNumber',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Room Number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'teacherName',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Teacher Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'available',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Available
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
        try {
          const res = await setRoster(email, roomNumber, teacherName);
          if (res === 200) {
            toast.info('You have successfully transferred', {
              position: 'top-center',
            });
          } else if (res === 301) {
            toast.error('You have already transferred today', {
              position: 'top-center',
            });
          }
          setIsDisabled(true);
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
