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
import { Button } from "@local/ui/button";
import { DataTableColumnHeader } from "@local/ui/data-table-column-header";

import { DatePickerForm } from "../datePicker";
import TeacherMessage from "../teacherNoteDialog";

export function mColumns(): ColumnDef<StudentClasses>[] {
  return [
    {
      accessorKey: "roomNumber",
      header: ({ column }) => {
        column.toggleVisibility(false);
        return <></>;
      },
      size: 1,
    },
    {
      accessorKey: "teacherName",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="" />;
      },
      cell: ({ row }) => {
        const teacherName = lastName(row.original.teacherName)!;
        const message = row.original.comment;
        if (message) {
          return <TeacherMessage teacherName={teacherName} message={message} />;
        } else return teacherName;
      },
      size: 1,
    },
    {
      accessorKey: "available",
      header: ({ column }) => {
        column.toggleVisibility(false);
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
      size: 1,
    },
    {
      accessorKey: "teacherId",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="" />;
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
              size="sm"
            >
              <CalendarIcon />
            </Button>
          );
        } else {
          return <DatePickerForm id={teacherId} />;
        }
      },
      enableSorting: false,
      size: 1,
    },
    {
      accessorKey: "chatId",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="" />;
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
        column.toggleVisibility(false);
      },
      size: 1,
    },
  ];
}

function lastName(name: string) {
  return name.split(" ")[1];
}
