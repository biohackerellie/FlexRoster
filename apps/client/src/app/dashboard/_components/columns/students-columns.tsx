"use client";

import type { ColumnDef } from "@tanstack/react-table";
import * as React from "react";
import { Link } from "next-view-transitions";

import type { AllStudents } from "@local/utils";
import { Button } from "@local/ui/button";
import { DataTableColumnHeader } from "@local/ui/data-table-column-header";

import { statusOptions } from "@/lib/constants";
import StatusBadge from "../statusBadge";

export function columns(): ColumnDef<AllStudents>[] {
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
        let studentStatus = status.value;
        const studentId = row.original.studentId ?? "";
        if (studentId === "" || studentId === null) {
          studentStatus = "default";
        }
        return <StatusBadge status={studentStatus} id={studentId} />;
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "teacherName",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Classroom" />;
      },
    },

    {
      accessorKey: "rosterId",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Details" />;
      },
      cell: ({ row }) => {
        const id: string = row.getValue("rosterId");

        return (
          <Button variant="outline" size="sm" asChild>
            <Link href={`/dashboard/staff/students/${id}`}>Details</Link>
          </Button>
        );
      },
      enableSorting: false,
    },
  ];
}
