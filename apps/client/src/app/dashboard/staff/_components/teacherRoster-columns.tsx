"use client";

import type { TeacherTable } from "@/lib/types";
import type { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { MessageSquare } from "lucide-react";

import { Badge } from "@local/ui/badge";
import { Button } from "@local/ui/button";
import { DataTableColumnHeader } from "@local/ui/data-table-column-header";
import { Tooltip, TooltipContent, TooltipTrigger } from "@local/ui/tooltip";

import { statusOptions } from "@/lib/constants";
import { Attendance } from "./actions";

export function columns(): ColumnDef<TeacherTable>[] {
  return [
    {
      accessorKey: "studentName",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Student Name" />;
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Status" />;
      },

      cell: ({ row }) => {
        const status = statusOptions.find(
          (status) => status.value === row.original.status,
        );
        if (!status) return null;
        const id: string = row.getValue("studentId");

        if (status.value === "default") {
          return <Badge variant="outline">Default</Badge>;
        } else if (status.value === "transferredN") {
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
        } else if (status.value === "transferredA") {
          return <Badge variant="success">Transferred</Badge>;
        } else return <div> </div>;
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "chatId",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Chat" />;
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
      enableSorting: false,
    },

    {
      accessorKey: "studentId",
      header: ({ column }) => {
        column.toggleVisibility(false);
        return <></>;
      },
    },
  ];
}

const setAttendance = async (studentId: string) => {
  try {
    const response = await Attendance(studentId);
    return response;
  } catch (e) {
    console.error(e);
  }
};
