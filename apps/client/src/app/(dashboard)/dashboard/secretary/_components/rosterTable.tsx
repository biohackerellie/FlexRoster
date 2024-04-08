"use client";

import type { ColumnDef } from "@tanstack/react-table";
import * as React from "react";
import Link from "next/link";
import { ArrowUpDown, CheckCircle, MessageSquare, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RosterList {
  count: number;
  id: string;
  roomNumber: string;
  teacherName: string;
  teacherId: string | null;
  available: boolean;
}

const columns: ColumnDef<RosterList>[] = [
  {
    accessorKey: "roomNumber",
    header: () => {
      return <span className="text-lg font-semibold">Room Number</span>;
    },
  },
  {
    accessorKey: "teacherName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-lg font-semibold"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Teacher Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "count",
    header: () => {
      return <span className="text-lg font-semibold">Student Count</span>;
    },
  },
  {
    accessorKey: "teacherId",
    header: () => {
      return <span className="text-lg font-semibold">Roster</span>;
    },
    cell: ({ row }) => {
      //eslint-disable-next-line
      const id = row.getValue("teacherId") as string;
      return (
        <Button variant={"outline"} asChild>
          <Link href={`/dashboard/secretary/${id}`}>Students</Link>
        </Button>
      );
    },
  },
];

interface RosterTable {
  rosterId: number;
  transferred: boolean;
  arrived: boolean;
  studentEmail: string;
  studentName: string;
  studentId: string | null;
  classroomId: string;
  roomNumber: string;
  teacherName: string;
  teacherId: string | null;
  available: boolean;
}

const studentColumns: ColumnDef<RosterTable>[] = [
  {
    accessorKey: "studentName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Student Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "studentEmail",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Student Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "transferred",
    header: "Transfered?",
    cell: ({ row }) => {
      //eslint-disable-next-line
      const transferred = row.getValue("transferred") as boolean;
      //eslint-disable-next-line
      const arrived = row.getValue("arrived") as boolean;
      if (transferred) {
        if (arrived) {
          return (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="cursor-default">
                  <CheckCircle fill={"green"} size={20} strokeWidth={1.5} />
                </TooltipTrigger>
                <TooltipContent>
                  Student transferred to this room and has arrived
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        } else {
          return (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="cursor-default">
                  <XCircle fill={"red"} size={20} strokeWidth={1.5} />
                </TooltipTrigger>
                <TooltipContent>
                  Student transferred to this room but not marked as arrived
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        }
      } else {
        return <span className="font-light text-gray-400">N/A</span>;
      }
    },
  },
  {
    accessorKey: "arrived",
    header: ({ column }) => {
      column.toggleVisibility(false);
      return <></>;
    },
  },
];

export { columns, studentColumns };
