"use client";

import type { TeacherTable } from "@/lib/types";
import type { ColumnDef } from "@tanstack/react-table";
import { MessageSquare } from "lucide-react";
import { Link } from "next-view-transitions";

import { Button } from "@local/ui/button";
import { DataTableColumnHeader } from "@local/ui/data-table-column-header";
import { Tooltip, TooltipContent, TooltipTrigger } from "@local/ui/tooltip";

import { statusOptions } from "@/lib/constants";
import StatusBadge from "../statusBadge";

export function columns(): ColumnDef<TeacherTable>[] {
  return [
    {
      accessorKey: "studentName",
      header: ({ column }) => {
        column.toggleVisibility(false);
        return <DataTableColumnHeader column={column} title="Student Name" />;
      },
    },

    {
      accessorKey: "lastName",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Last Name" />;
      },
    },
    {
      accessorKey: "firstName",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="First Name" />;
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
        return StatusBadge(status.value, id);
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
            <div className="text-md max-w-[30px] cursor-pointer overflow-ellipsis leading-none">
              <Link href={chatId}>
                <MessageSquare size={20} strokeWidth={1.5} />
              </Link>
            </div>
          );
        }
      },
      enableSorting: false,
    },

    {
      accessorKey: "studentId",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Details" />;
      },
      cell: ({ row }) => {
        const studentId = row.original.rosterId;
        return (
          <Link href={`/dashboard/staff/students/${studentId}`}>
            <div className="text-md max-w-[30px] cursor-pointer overflow-ellipsis leading-none">
              <Button disabled={studentId === null} variant="outline">
                Details
              </Button>
            </div>
          </Link>
        );
      },
      enableSorting: false,
    },
  ];
}
