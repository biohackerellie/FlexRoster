"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@local/ui/dropdown-menu";

import { getErrorMessage } from "@/lib/errorHandler";
import { RequestApproval } from "./logic/actions";

function ApprovalMenu({
  requestId,
  studentId,
  teacherId,
  newTeacherId,
}: {
  requestId: string | number;
  studentId: string;
  teacherId: string;
  newTeacherId: string;
}) {
  const router = useRouter();
  const [isPending, startCreateTransition] = React.useTransition();
  const [open, setOpen] = React.useState(false);
  function onSubmit(status: "approved" | "denied") {
    startCreateTransition(() => {
      toast.promise(
        RequestApproval(requestId, status, studentId, teacherId, newTeacherId),
        {
          loading: "Setting request status...",
          success: () => {
            setOpen(false);
            router.refresh();
            return "Request status updated";
          },
          error: (error) => {
            setOpen(false);
            return getErrorMessage(error);
          },
          position: "top-center",
        },
      );
    });
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="animate-pulse hover:cursor-pointer">
        Pending
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => onSubmit("approved")}>
          Approve
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={isPending}
          onClick={() => onSubmit("denied")}
        >
          Deny
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ApprovalMenu;
