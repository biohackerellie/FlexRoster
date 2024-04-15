"use client";

import type { TeacherTable } from "@/lib/types";
import type { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { ArrowUpDown, CheckCircle, MessageSquare, XCircle } from "lucide-react";

import { Badge } from "@local/ui/badge";
import { Button } from "@local/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@local/ui/tooltip";

import { Attendance } from "../actions";

export const columns: ColumnDef<TeacherTable>[] = [
  {
    accessorKey: "studentName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-lg font-medium"
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
          className="text-lg font-medium"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Student Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "chatId",
    header: ({ column }) => {
      return <span className="text-lg font-medium">Chat</span>;
    },
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
          <Button variant="link" asChild>
            <Link href={chatId}>
              <MessageSquare size={20} strokeWidth={1.5} />
            </Link>
          </Button>
        );
      }
    },
  },
  {
    accessorKey: "transferred",
    header: ({ column }) => {
      return <span className="text-lg font-medium">Transfers</span>;
    },
    cell: ({ row }) => {
      //eslint-disable-next-line
      const transferred = row.getValue("transferred") as boolean;
      //eslint-disable-next-line
      const arrived = row.getValue("arrived") as boolean;
      //eslint-disable-next-line
      const id = row.getValue("studentId") as number;
      if (!transferred) {
        return <div className="font-thin text-gray-400">N/A</div>;
      } else if (transferred === true) {
        if (!arrived) {
          return (
            <>
              <div className="font-thin text-green-500">Transfer status:</div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger
                    onClick={() => setAttendance(id)}
                    className="cursor-default"
                  >
                    <XCircle size={20} color="red" strokeWidth={1.5} />
                  </TooltipTrigger>
                  <TooltipContent>Click when student arrives</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          );
        } else if (arrived) {
          return (
            <div className="font-thin text-green-500">
              Transferred: <CheckCircle />
            </div>
          );
        } else return <div> </div>;
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
  {
    accessorKey: "studentId",
    header: ({ column }) => {
      column.toggleVisibility(false);
      return <></>;
    },
  },
];

const setAttendance = async (rosterId: number) => {
  try {
    const response = await Attendance(rosterId);
    return response;
  } catch (e) {
    console.error(e);
  }
};
