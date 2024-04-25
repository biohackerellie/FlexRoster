"use client";

import type { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@local/ui/badge";
import { DataTableColumnHeader } from "@local/ui/data-table-column-header";
import { Tooltip, TooltipContent, TooltipTrigger } from "@local/ui/tooltip";

import { AllStudents } from "~/lib/sql";

type AllStudentsTable = Map<number, AllStudents>;

export const columns: ColumnDef<AllStudentsTable>[] = [
  {
    accessorKey: "userName",
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
      const status = row.getValue("status") as string;
      if (status === "default") {
        return <Badge variant="outline">Default</Badge>;
      } else if (status === "transferredN") {
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
  },
  {
    accessorKey: "classroom",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Classroom" />;
    },
  },

  {
    accessorKey: "actions",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Actions" />;
    },
  },
];
