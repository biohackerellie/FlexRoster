'use client';
import { StudentTable } from '@/lib/types';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { DataTable } from '@/components/tables';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { columns } from './columns';
import useMediaQuery from '@/hooks/useMediaQuery';


interface ClassListProps {
  data: StudentTable[];
}

export function ClassListComponent({ data }: ClassListProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="lg">
            Change Class
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Request a different class</DialogTitle>
            <DialogDescription>
              Please select the class you would like to attend today.
            </DialogDescription>
          </DialogHeader>
          <div className="p-4">
            <DataTable columns={columns} data={data} />
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <>
      <Drawer>
        <DrawerTrigger></DrawerTrigger>
      </Drawer>
    </>
  );
}

// function ClassList<TData>({
//   data,
//   className,
// }: {
//   data: TData[];
//   className: React.ComponentProps<'div'>;
// }) {
//   return (
//     <div className={cn('flex flex-col gap-4', className)}>
//       {data.map((item, index) => (
//         <ClassListItem key={index} {...item} />
//       ))}
//     </div>
//   );
// }
