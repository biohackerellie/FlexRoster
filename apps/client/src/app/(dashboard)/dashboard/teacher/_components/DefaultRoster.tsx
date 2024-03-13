"use client";

import * as React from "react";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, CheckCircle, MessageSquare, XCircle } from "lucide-react";

import { DataTable } from "@/components/tables";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useChatNotifications } from "@/hooks";
import useMediaQuery from "@/hooks/useMediaQuery";
import { TeacherTable } from "@/lib/types";
import { Attendance } from "../actions";

interface RosterListProps {
  data: TeacherTable[];
  userId: string;
}

/**
 * Primary JSX Component.
 * @param data - TeacherTable[] - Array of Students in class.
 * @useMediaQuery hook to determine if the user is on a desktop or mobile device.
 * Displays Table Component in a Dialog or Drawer based on the device.
 */
export function DefaultRosterComponent({ data, userId }: RosterListProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  useChatNotifications(userId);
  if (isDesktop) {
    return (
      <div className="flex flex-col leading-tight">
        <div className="flex items-center text-xl">
          <span className="mr-3 font-semibold text-gray-700">
            Default Roster
          </span>
        </div>

        <DataTable columns={columns} data={data} />
      </div>
    );
  } else {
    return (
      <>
        {/*TODO - Add Drawer Component*/}
        <h1>WIP</h1>
      </>
    );
  }
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
    accessorKey: "attendance",
    header: "Attendance",
    cell: ({ row }) => {
      const studentValue: string = row.getValue("studentEmail");

      const attendance: "not marked" | "present" | "absent" =
        row.getValue("attendance") ?? "not marked";
      if (attendance === "not marked") {
        return (
          <span>
            <Button
              variant="ghost"
              onClick={() => setAttendance(studentValue, "present")}
            >
              <CheckCircle size={20} color="#00ff11" strokeWidth={1.5} />
            </Button>
            |
            <Button
              variant="ghost"
              onClick={() => setAttendance(studentValue, "absent")}
            >
              <XCircle size={20} color="#ff0000" strokeWidth={1.5} />
            </Button>
          </span>
        );
      } else if (attendance === "present") {
        return (
          <Button
            variant="ghost"
            onClick={() => setAttendance(studentValue, "absent")}
          >
            <CheckCircle size={20} color="#00ff11" strokeWidth={1.5} />
          </Button>
        );
      } else {
        return (
          <Button
            variant="ghost"
            onClick={() => setAttendance(studentValue, "present")}
          >
            <XCircle size={20} color="#ff0000" strokeWidth={1.5} />
          </Button>
        );
      }
    },
  },
  {
    accessorKey: "chatId",
    header: "Chat",
    cell: ({ row }) => {
      const chatId = row.getValue("chatId") ?? undefined;
      if (!chatId) {
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="cursor-default">
                <MessageSquare size={20} strokeWidth={1.5} />
              </TooltipTrigger>
              <TooltipContent>Chat Unavailable</TooltipContent>
            </Tooltip>
          </TooltipProvider>
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

const setAttendance = async (studentValue: string, status: string) => {
  try {
    const response = await Attendance(studentValue, status);
    return response;
  } catch (e) {
    console.error(e);
  }
};
