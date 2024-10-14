// eslint-disable
"use client";

import type { SecretaryTable } from "@/lib/types";
import type { ColumnDef } from "@tanstack/react-table";
import * as React from "react";
import { Link } from "next-view-transitions";

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
        const teacherName = row.getValue("teacherName");
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
