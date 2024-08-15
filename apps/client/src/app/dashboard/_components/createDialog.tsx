"use client";

import * as React from "react";
import { PlusIcon } from "lucide-react";
import { toast } from "sonner";

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
import { Textarea } from "@local/ui/textarea";

import { getErrorMessage } from "@/lib/errorHandler";
import { createComment } from "./logic/actions";

interface CommentProps {
  comment?: string;
  teacherId: string;
}

export function CreateCommentDialog({ teacherId }: CommentProps) {
  const [open, setOpen] = React.useState(false);
  const [isCreatePending, startCreateTransition] = React.useTransition();

  function onSubmit(formData: FormData) {
    const text = formData.get("comment") as string;
    startCreateTransition(() => {
      toast.promise(createComment({ comment: text, id: teacherId }), {
        loading: "Creating comment...",
        success: () => {
          setOpen(false);
          return "Comment created successfully";
        },
        error: (error) => {
          setOpen(false);
          return getErrorMessage(error);
        },
        position: "top-center",
      });
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <PlusIcon className="mr-2 size-4" aria-hidden="true" />
          Add Comment
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Class Comment</DialogTitle>
          <DialogDescription>
            Add a comment or note for this class for students like "Bring an
            apple to class tomorrow"
          </DialogDescription>
        </DialogHeader>

        <form action={onSubmit} className="flex flex-col gap-4">
          <Textarea
            placeholder="bring an apple to class tomorrow"
            className="resize"
            name="comment"
            id="comment"
            required
          />
          <DialogFooter className="gap-2 pt-2 sm:space-x-0">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isCreatePending}>
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
