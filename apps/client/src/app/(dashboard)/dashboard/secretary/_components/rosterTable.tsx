"use client";

import * as React from "react";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, CheckCircle, MessageSquare, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

type RosterList = {
  count: number;
  id: string;
  roomNumber: string;
  teacherName: string;
  teacherId: string | null;
  available: boolean;
};

const columns: ColumnDef<RosterList>[] = [
  {
    accessorKey: "roomNumber",
    header: "Room Number",
  },
  {
    accessorKey: "teacherName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
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
    header: "Student Count",
  },
  {
    accessorKey: "teacherId",
    header: "Roster",
    cell: ({ row }) => {
      //eslint-disable-next-line
      const id = row.getValue("teacherId") as string;
      return (
        <Button asChild>
          <Link href={`/dashboard/secretary/${id}`}>Students</Link>
        </Button>
      );
    },
  },
];

type RosterTable = {
  rosterId: number;
  attendance: "present" | "absent" | "not marked";
  studentEmail: string;
  studentName: string;
  studentId: string | null;
  classroomId: string;
  roomNumber: string;
  teacherName: string;
  teacherId: string | null;
  available: boolean;
};

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
    accessorKey: "attendance",
    header: "Attendance",
  },
];

export { columns, studentColumns };
