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

import { DatePickerForm } from "../datePicker";

export function columns(): ColumnDef<StudentClasses>[] {
  return [
    {
      accessorKey: "roomNumber",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Room Number" />;
      },
    },
    {
      accessorKey: "teacherName",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Teacher Name" />;
      },
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
          return (
            <span className="flex items-center bg-green-600/80">
              <Badge variant="outline">Available</Badge>
            </span>
          );
        }
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
    },
    // {
    //   accessorKey: "teacherId",
    //   header: ({ column }) => {
    //     return <DataTableColumnHeader column={column} title="Transfer" />;
    //   },
    //   cell: ({ row }) => {
    //     const teacherId = row.original.teacherId;
    //     const available = row.original.available;
    //     if (!available) {
    //       return (
    //         <Button variant="outline" disabled className="cursor-not-allowed">
    //           Transfer
    //         </Button>
    //       );
    //     } else {
    //       return <DatePickerForm id={teacherId} />;
    //     }
    //   },
    //   enableSorting: false,
    // },
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
    },
  ];
}
