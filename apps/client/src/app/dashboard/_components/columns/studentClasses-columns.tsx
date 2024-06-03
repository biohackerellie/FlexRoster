"use client";

import type { ColumnDef } from "@tanstack/react-table";
import * as React from "react";
import Link from "next/link";
import {
  CalendarIcon,
  MessageSquareIcon,
  MessageSquareOffIcon,
} from "lucide-react";

import type { StudentClasses } from "@local/utils";
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
      size: 1,
    },
    {
      accessorKey: "teacherName",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Teacher Name" />;
      },
      cell: ({ row }) => {
        const teacherName = row.original.teacherName;
        return teacherName;
      },
      size: 1,
    },
    {
      accessorKey: "available",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Available" />;
      },
      cell: ({ row }) => {
        const available = row.original.available;

        if (!available) {
          return <Badge variant="destructive">Not Available</Badge>;
        } else {
          return <Badge variant="success">Available</Badge>;
        }
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
      size: 1,
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
            <Button
              variant="destructive"
              disabled
              className="cursor-not-allowed"
            >
              <CalendarIcon />
            </Button>
          );
        } else {
          return <DatePickerForm teacherId={teacherId} />;
        }
      },
      enableSorting: false,
      size: 1,
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
      size: 1,
      enableSorting: false,
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
                <span className="text-md text-ellipsis text-nowrap font-normal">
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
      size: 1,
    },
  ];
}
