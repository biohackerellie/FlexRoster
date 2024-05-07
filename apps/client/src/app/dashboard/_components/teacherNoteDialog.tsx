"use client";

import * as React from "react";

import { Button } from "@local/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@local/ui/dialog";

export default function TeacherMessage({
  teacherName,
  message,
}: {
  teacherName: string;
  message: string;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="animate-pulse">
          {teacherName}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Teacher's Note</DialogTitle>
          <DialogDescription>
            {teacherName} has left an additional note for class:
          </DialogDescription>
        </DialogHeader>
        <p>{message}</p>
        <DialogClose>
          <Button variant="outline" size="sm">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
