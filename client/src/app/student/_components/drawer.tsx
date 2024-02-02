'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useMediaQuery from '@/hooks/useMediaQuery';

interface ClassListProps<TData> {
  data: TData[];
}

export function ClassListComponent<TData>({ data }: ClassListProps<TData>) {
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
              Please enter the class you would like to switch to today.
            </DialogDescription>
          </DialogHeader>
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

function ClassList<TData>({
  data,
  className,
}: {
  data: TData[];
  className: React.ComponentProps<'div'>;
}) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {data.map((item, index) => (
        <ClassListItem key={index} {...item} />
      ))}
    </div>
  );
}

// todo: complete this
