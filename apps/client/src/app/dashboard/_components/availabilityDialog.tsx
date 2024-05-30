"use client";

import * as React from "react";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

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
import { Tooltip, TooltipContent, TooltipTrigger } from "@local/ui/tooltip";

import { updateAvailability } from "./logic/clientActions";

interface AvailabilityDialogProps
  extends React.ComponentPropsWithoutRef<typeof Dialog> {
  teacherId: string;
  classroomId: string;
  currentStatus: boolean;
  onSuccess?: () => void;
  showTrigger?: boolean;
}

const available = {
  bg: "bg-green-500/80 hover:bg-green-500/50 flex hover:scale-105 outline-none rounded-full ",
  icon: ThumbsUpIcon,
  text: "available",
  opposite: false,
  description: "Students will be able to transfer to your class",
};
const unavailable = {
  bg: "bg-red-500/80 hover:bg-red-500/50 outline-none hover:scale-105 rounded-full flex ",
  icon: ThumbsDownIcon,
  text: "unavailable",
  opposite: true,
  description: "Students will not be able to transfer to your class",
};

export function AvailabilityDialog({
  onSuccess,
  showTrigger = true,

  ...props
}: AvailabilityDialogProps) {
  const [isUpdatePending, startUpdateTransition] = React.useTransition();
  const statusVars = {
    bg: props.currentStatus ? available.bg : unavailable.bg,
    icon: props.currentStatus ? ThumbsUpIcon : ThumbsDownIcon,
    text: props.currentStatus ? available.text : unavailable.text,
    textOpposite: props.currentStatus ? unavailable.text : available.text,
    opposite: props.currentStatus ? available.opposite : unavailable.opposite,
    description: props.currentStatus
      ? unavailable.description
      : available.description,
  };

  return (
    <Dialog {...props}>
      {showTrigger ? (
        <Tooltip>
          <DialogTrigger asChild>
            <TooltipTrigger>
              <span className={statusVars.bg}>
                <statusVars.icon className="size-4" />
              </span>
            </TooltipTrigger>
          </DialogTrigger>
          <TooltipContent>Change availability</TooltipContent>
        </Tooltip>
      ) : null}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Change class availability to {statusVars.textOpposite}?
          </DialogTitle>
          <DialogDescription>{statusVars.description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:space-x-0">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              aria-label="Update selected rows"
              variant="destructive"
              onClick={() => {
                startUpdateTransition(() => {
                  updateAvailability({
                    teacherId: props.teacherId,
                    classroomId: props.classroomId,
                    status: statusVars.opposite,
                    onSuccess,
                  });
                });
              }}
              disabled={isUpdatePending}
            >
              Update
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
