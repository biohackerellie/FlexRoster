"use client";

import * as React from "react";
import { format } from "date-fns-tz";

import type { Request } from "@local/utils";
import { cn } from "@local/ui";
import { Button } from "@local/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@local/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@local/ui/drawer";
import { ScrollArea, ScrollBar } from "@local/ui/scroll-area";

import type { getStudentRequests } from "./logic/queries";
import useMediaQuery from "@/hooks/useMediaQuery";
import { convertUTCDateToLocalDate } from "@/lib/utils";

export function StudentRequestsComponent({
  dataPromise,
}: {
  dataPromise: ReturnType<typeof getStudentRequests>;
}) {
  "use memo";
  const data = React.use(dataPromise);
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="lg">
            My Requests
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>My Requests</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex flex-col">
            <List data={data} />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="w-full">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="lg" className="text-3xl">
          My Requests
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-96 w-full">
        <DrawerHeader className="text-left">
          <DrawerTitle>My Requests</DrawerTitle>
        </DrawerHeader>
        <List data={data} className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function List({ data, className }: { data: Request[]; className?: string }) {
  return (
    <ScrollArea className={cn("h-96 w-auto", className)}>
      <ul className="p-4">
        {data.map((request, index) => (
          <li key={index} className="flex items-center justify-between">
            <p className="text-sm text-gray-500">{request.newTeacherName}</p>
            <p className="text-sm text-gray-500">
              {format(convertUTCDateToLocalDate(request.dateRequested), "PPP")}
            </p>
            <p className="text-lg font-semibold">{request.status}</p>
          </li>
        ))}
      </ul>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
