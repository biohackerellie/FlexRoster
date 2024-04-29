"use client";

import type { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

import type { AllStudents } from "@local/validators";
import { Badge } from "@local/ui/badge";
import { Button } from "@local/ui/button";
import { DataTableColumnHeader } from "@local/ui/data-table-column-header";
import { Tooltip, TooltipContent, TooltipTrigger } from "@local/ui/tooltip";

import { statusOptions } from "@/lib/constants";

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

        if (status.value === "default") {
          return <Badge variant="outline">Default</Badge>;
        } else if (status.value === "transferredN") {
          return (
            <div className="text-md max-w-[80px] overflow-ellipsis leading-none">
              <Tooltip>
                <TooltipTrigger className="cursor-pointer " asChild>
                  <Badge variant="destructive" className="animate-pulse">
                    transfer
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>Click when student arrives</TooltipContent>
              </Tooltip>
            </div>
          );
        }
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
        const id = row.getValue("rosterId") as string;
        return (
          <Button asChild>
            <Link href={`/dashboard/staff/students/${id}`}>Details</Link>
          </Button>
        );
      },
      enableSorting: false,
    },
  ];
}
