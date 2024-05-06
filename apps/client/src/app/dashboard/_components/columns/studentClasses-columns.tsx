"use client";

import * as React from "react";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { MessageSquareIcon, MessageSquareOffIcon } from "lucide-react";

import type { StudentClasses } from "@local/validators";
import { Badge } from "@local/ui/badge";
import { Button } from "@local/ui/button";
import { DataTableColumnHeader } from "@local/ui/data-table-column-header";
import { Tooltip, TooltipContent, TooltipTrigger } from "@local/ui/tooltip";

import { studentStatusOptions } from "@/lib/constants";
import { DatePickerForm } from "../datePicker";

export function columns(): ColumnDef<StudentClasses>[] {
  return [
    {
      accessorKey: "roomNumber",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Room Number" />;
      },
      size: 5,
    },
    {
      accessorKey: "teacherName",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Teacher Name" />;
      },
      size: 5,
    },
    {
      accessorKey: "available",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Available" />;
      },
      cell: ({ row }) => {
        const available = studentStatusOptions.find(
          (status) => status.value === row.original.available.toString(),
        );

        if (available?.value === "false") {
          return <Badge variant="destructive">Not Available</Badge>;
        } else {
          return <Badge variant="success">Available</Badge>;
        }
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
      size: 5,
    },
    {
      accessorKey: "teacherId",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Transfer" />;
      },
      cell: ({ row }) => {
        const teacherId = row.original.teacherId;

        const available = row.original.available;
        if (!available) {
          return (
            // <DatePickerForm id={teacherId} />
            <Button variant="outline" disabled className="cursor-not-allowed">
              Transfer
            </Button>
          );
        } else {
          return <DatePickerForm id={teacherId} />;
        }
      },
      enableSorting: false,
      size: 5,
    },
    {
      accessorKey: "chatId",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Chat" />;
      },
      cell: ({ row }) => {
        const chatId = row.original.chatId;
        if (!chatId) {
          return (
            <Button variant="outline" disabled className="cursor-not-allowed">
              <MessageSquareOffIcon />
            </Button>
          );
        }
        return (
          <Button asChild variant="outline">
            <Link prefetch={false} href={chatId}>
              <MessageSquareIcon />
            </Link>
          </Button>
        );
      },
      size: 5,
    },
    {
      accessorKey: "comment",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Note" />;
      },
      cell: ({ row }) => {
        const comment = row.original.comment;
        if (comment) {
          return (
            <Tooltip>
              <TooltipTrigger className="cursor-pointer" asChild>
                <span className="text-md text-ellipsis text-nowrap font-normal ">
                  {comment}
                </span>
              </TooltipTrigger>
              <TooltipContent>{comment}</TooltipContent>
            </Tooltip>
          );
        } else {
          return <div className="text-gray-600">...</div>;
        }
      },
    },
  ];
}
