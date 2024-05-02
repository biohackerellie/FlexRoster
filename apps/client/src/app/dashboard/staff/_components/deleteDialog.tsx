"use client";

import * as React from "react";
import { TrashIcon } from "lucide-react";

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

import { deleteComments } from "./clientActions";

interface DeleteCommentsDialogProps
  extends React.ComponentPropsWithoutRef<typeof Dialog> {
  teacherId: string;
  onSuccess?: () => void;
  showTrigger?: boolean;
}

export function DeleteCommentDialog({
  onSuccess,
  showTrigger = true,
  ...props
}: DeleteCommentsDialogProps) {
  const [isDeletePending, startDeleteTransition] = React.useTransition();

  return (
    <Dialog {...props}>
      {showTrigger ? (
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            <TrashIcon className="mr-2 size-4" aria-hidden="true" />
            Delete Comment
          </Button>
        </DialogTrigger>
      ) : null}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            You can always add another comment later 😊
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:space-x-0">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              aria-label="Delete selected rows"
              variant="destructive"
              onClick={() => {
                startDeleteTransition(() => {
                  deleteComments({
                    teacherId: props.teacherId,
                    onSuccess,
                  });
                });
              }}
              disabled={isDeletePending}
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
