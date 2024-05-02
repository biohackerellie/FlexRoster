"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@local/ui/dropdown-menu";

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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="animate-pulse hover:cursor-pointer">
        Pending
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            void Approval(
              requestId,
              studentId,
              teacherId,
              newTeacherId,
              "approved",
            );
          }}
        >
          Approve
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            void Approval(
              requestId,
              studentId,
              teacherId,
              newTeacherId,
              "denied",
            );
          }}
        >
          Deny
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const Approval = async (
  requestId: string | number,
  studentId: string,
  teacherId: string,
  newTeacherId: string,
  status: "approved" | "denied",
) => {
  try {
    await RequestApproval(
      requestId,
      status,
      studentId,
      teacherId,
      newTeacherId,
    );
  } catch (e) {
    console.error(e);
  }
};

export default ApprovalMenu;
