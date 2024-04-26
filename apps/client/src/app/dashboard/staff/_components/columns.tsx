"use client";

import type { StudentStatus, TeacherTable } from "@/lib/types";
import type { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { ArrowUpDown, CheckCircle, MessageSquare, XCircle } from "lucide-react";

import { Badge } from "@local/ui/badge";
import { Button } from "@local/ui/button";
import { DataTableColumnHeader } from "@local/ui/data-table-column-header";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@local/ui/tooltip";

import { Attendance } from "../actions";

export const columns: ColumnDef<TeacherTable>[] = [
  {
    accessorKey: "userName",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Student Name" />;
    },

    cell: ({ row }) => {
      return (
        <div className={`text-md max-w-[120px] overflow-ellipsis `}>
          {row.getValue("userName")}
        </div>
      );
    },
  },
  {
    accessorKey: "studentEmail",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Student Email" />;
    },
    cell: ({ row }) => {
      return (
        <div className={`text-md max-w-[80px] overflow-ellipsis leading-none`}>
          {row.getValue("studentEmail")}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Status" />;
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
          <div className="text-md max-w-[80px] overflow-ellipsis leading-none">
            <Tooltip>
              <TooltipTrigger className="cursor-pointer " asChild>
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
          </div>
        );
      } else if (status === "transferredA") {
        return <Badge variant="success">Transferred</Badge>;
      } else return <div> </div>;
    },
    enableSorting: false,
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
          <div className="text-md max-w-[30px] overflow-ellipsis leading-none">
            <Tooltip>
              <TooltipTrigger className="cursor-default">
                <MessageSquare size={20} strokeWidth={1.5} />
              </TooltipTrigger>
              <TooltipContent>Chat Unavailable</TooltipContent>
            </Tooltip>
          </div>
        );
      } else {
        return (
          <div className="text-md max-w-[30px] overflow-ellipsis leading-none">
            <Button variant="link" asChild>
              <Link href={chatId}>
                <MessageSquare size={20} strokeWidth={1.5} />
              </Link>
            </Button>
          </div>
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
