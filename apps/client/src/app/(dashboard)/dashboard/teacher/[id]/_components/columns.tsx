"use client";

import type { StudentStatus, TeacherTable } from "@/lib/types";
import type { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { ArrowUpDown, CheckCircle, MessageSquare, XCircle } from "lucide-react";

import { Badge } from "@local/ui/badge";
import { Button } from "@local/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@local/ui/tooltip";

import { Attendance } from "../actions";

export const columns: ColumnDef<TeacherTable>[] = [
  {
    accessorKey: "studentName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-lg font-medium"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Student Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "studentEmail",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-lg font-medium"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Student Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => {
      return <span className="text-lg font-medium">Status</span>;
    },
    cell: ({ row }) => {
      //eslint-disable-next-line
      const status = row.getValue("status") as StudentStatus;
      //eslint-disable-next-line
      const id = row.getValue("studentId") as string;
      if (status === "default") {
        return <Badge variant="outline">Default</Badge>;
      } else if (status === "transferredN") {
        return (
          <>
            <Tooltip>
              <TooltipTrigger className="cursor-pointer" asChild>
                <Badge
                  variant="destructive"
                  className="animate-pulse"
                  onClick={() => setAttendance(id)}
                >
                  transfer
                </Badge>
              </TooltipTrigger>
              <TooltipContent>Click when student arrives</TooltipContent>
            </Tooltip>
          </>
        );
      } else if (status === "transferredA") {
        return <Badge variant="success">Transferred</Badge>;
      } else return <div> </div>;
    },
  },
  {
    accessorKey: "chatId",
    header: ({ column }) => {
      return <span className="text-lg font-medium">Chat</span>;
    },
    cell: ({ row }) => {
      const chatId = row.getValue("chatId") ?? undefined;

      if (!chatId) {
        return (
          <Tooltip>
            <TooltipTrigger className="cursor-default">
              <MessageSquare size={20} strokeWidth={1.5} />
            </TooltipTrigger>
            <TooltipContent>Chat Unavailable</TooltipContent>
          </Tooltip>
        );
      } else {
        return (
          <Button variant="link" asChild>
            <Link href={chatId}>
              <MessageSquare size={20} strokeWidth={1.5} />
            </Link>
          </Button>
        );
      }
    },
  },

  {
    accessorKey: "studentId",
    header: ({ column }) => {
      column.toggleVisibility(false);
      return <></>;
    },
  },
];

const setAttendance = async (studentId: string) => {
  try {
    const response = await Attendance(studentId);
    return response;
  } catch (e) {
    console.error(e);
  }
};
