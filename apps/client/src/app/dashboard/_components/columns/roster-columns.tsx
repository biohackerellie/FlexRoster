"use client";

import type { SecretaryTable, StudentStatus } from "@/lib/types";
import type { ColumnDef } from "@tanstack/react-table";
import * as React from "react";
import Link from "next/link";
import { ArrowUpDown, CheckCircle, MessageSquare, XCircle } from "lucide-react";

import { Button } from "@local/ui/button";
import { DataTableColumnHeader } from "@local/ui/data-table-column-header";

export function columns(): ColumnDef<SecretaryTable>[] {
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
      accessorKey: "count",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Student Count" />;
      },
      enableSorting: false,
    },
    {
      accessorKey: "teacherId",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Roster" />;
      },
      cell: ({ row }) => {
        //eslint-disable-next-line

        const teacherName = row.getValue("teacherName") as string;
        return (
          <Button variant={"outline"} asChild>
            <Link href={`/dashboard/staff/students?teacherName=${teacherName}`}>
              Students
            </Link>
          </Button>
        );
      },
    },
  ];
}
