"use client";

import * as React from "react";
import { format } from "date-fns-tz";

import type { Request } from "@local/validators";
import { cn } from "@local/ui";
import { Button } from "@local/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@local/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@local/ui/drawer";
import { Input } from "@local/ui/input";
import { Label } from "@local/ui/label";
import { ScrollArea, ScrollBar } from "@local/ui/scroll-area";

import useMediaQuery from "@/hooks/useMediaQuery";
import { getStudentRequests } from "./logic/queries";

export function StudentRequestsComponent({
  dataPromise,
}: {
  dataPromise: ReturnType<typeof getStudentRequests>;
}) {
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
          <List data={data} />
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
      <DrawerContent>
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
    <ScrollArea className={cn("h-72 w-screen", className)}>
      <ul className="p-4">
        {data.map((request, index) => (
          <li key={index} className="flex items-center justify-between">
            <p className="text-sm text-gray-500">{request.newTeacherName}</p>
            <p className="text-sm text-gray-500">
              {format(request.dateRequested as string, "PPP", {
                timeZone: "America/Denver",
              })}
            </p>
            <p className="text-lg font-semibold">{request.status}</p>
          </li>
        ))}
      </ul>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
