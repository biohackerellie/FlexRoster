"use client";

import * as React from "react";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, CheckCircle, MessageSquare, XCircle } from "lucide-react";
import { toast } from "sonner";

import { DataTable } from "@/components/tables";
import { Button } from "@/components/ui/button";
import useMediaQuery from "@/hooks/useMediaQuery";
import { TeacherTable } from "@/lib/types";

interface RosterListProps {
  data: TeacherTable[];
}

/**
 * Primary JSX Component.
 * @param data - TeacherTable[] - Array of Students in class.
 * @useMediaQuery hook to determine if the user is on a desktop or mobile device.
 * Displays Table Component in a Dialog or Drawer based on the device.
 */
export function DefaultRosterComponent({ data }: RosterListProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <div className="flex flex-col leading-tight">
        <div className="flex items-center text-xl">
          <span className="mr-3 font-semibold text-gray-700">
            Steam Classes
          </span>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    );
  }
  return (
    <>
      <h1>Use your PC asshole</h1>
    </>
  );
}

const columns: ColumnDef<TeacherTable>[] = [
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
    accessorKey: "studentId",
    header: "Attendance",
    cell: ({ row }) => {
      let studentValue;
      const studentEmail: string = row.getValue("studentEmail") ?? undefined;
      const studentId: string = row.getValue("studentId") ?? undefined;
      if (!studentId) {
        studentValue = studentEmail;
      } else {
        studentValue = studentId;
      }
      return (
        <span>
          <Button
            variant="ghost"
            onClick={() => {
              console.log("boop");
            }}
          >
            <CheckCircle size={20} color="#00ff11" strokeWidth={1.5} />
          </Button>
          |
          <Button
            variant="ghost"
            onClick={() => {
              console.log("boop");
            }}
          >
            <XCircle size={20} color="#ff0000" strokeWidth={1.5} />
          </Button>
        </span>
      );
    },
  },
  {
    accessorKey: "chatId",
    header: "Chat",
    cell: ({ row }) => {
      const chatId = row.getValue("chatId") ?? undefined;
      if (!chatId) {
        return (
          <Button variant="ghost" disabled>
            <MessageSquare size={20} strokeWidth={1.5} />
          </Button>
        );
      } else {
        return (
          <Button variant="ghost" asChild>
            <Link href={chatId}>
              <MessageSquare size={20} strokeWidth={1.5} />
            </Link>
          </Button>
        );
      }
    },
  },
];
