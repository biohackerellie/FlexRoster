"use client";

import type { TeacherTable } from "@/lib/types";
import type { ColumnDef } from "@tanstack/react-table";
import { MessageSquare } from "lucide-react";
import { Link } from "next-view-transitions";

import { Badge } from "@local/ui/badge";
import { Button } from "@local/ui/button";
import { DataTableColumnHeader } from "@local/ui/data-table-column-header";
import { Popover, PopoverContent, PopoverTrigger } from "@local/ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "@local/ui/tooltip";

import { statusOptions } from "@/lib/constants";
import { Attendance } from "../logic/actions";

export function columns(): ColumnDef<TeacherTable>[] {
  "use memo";
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
        const id: string = row.getValue("studentId");
        console.log(id);
        if (status.value === "default") {
          return <Badge variant="outline">Default</Badge>;
        } else if (status.value === "transferredN") {
          return (
            <div className="text-md max-w-[80px] overflow-ellipsis leading-none">
              <Tooltip>
                <TooltipTrigger className="cursor-pointer" asChild>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Badge variant="destructive" className="animate-pulse">
                        transfer
                      </Badge>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="grid gap-4">
                        <div className="grid gap-4">
                          <div className="grid grid-cols-3 items-center gap-4 gap-y-2 border-b">
                            <p className="col-span-2 text-sm font-medium leading-none text-muted-foreground">
                              Mark as arrived:
                            </p>
                            <Button
                              variant="outline"
                              onClick={() => setAttendance(id, "arrived")}
                              className="pb-2"
                            >
                              Arrived
                            </Button>
                          </div>
                          <div className="grid grid-cols-3 items-center gap-4">
                            <p className="col-span-2 text-sm font-medium leading-none text-muted-foreground">
                              Reset student to default classroom:
                            </p>
                            <Button
                              variant="outline"
                              onClick={() => setAttendance(id, "default")}
                            >
                              Default
                            </Button>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TooltipTrigger>
                <TooltipContent>Click when student arrives</TooltipContent>
              </Tooltip>
            </div>
          );
        } else if (status.value === "transferredA") {
          return <Badge variant="success">Transferred</Badge>;
        } else return <div> </div>;
      },
      filterFn: (row, id, value) => {
        return Array.isArray(value) && value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "chatId",
      header: ({ column }) => {
        return <DataTableColumnHeader column={column} title="Chat" />;
      },
      cell: ({ row }) => {
        const chatId = row.getValue("chatId") ?? undefined;

        if (!chatId) {
          return (
            <div className="text-md max-w-[30px] overflow-ellipsis leading-none">
              <Tooltip>
                <TooltipTrigger className="cursor-default">
                  <MessageSquare size={20} strokeWidth={1.5} />
                </TooltipTrigger>
                <TooltipContent>Chat Unavailable</TooltipContent>
              </Tooltip>
            </div>
          );
        } else {
          return (
            <div className="text-md max-w-[30px] overflow-ellipsis leading-none">
              <Button variant="link" asChild>
                <Link href={chatId}>
                  <MessageSquare size={20} strokeWidth={1.5} />
                </Link>
              </Button>
            </div>
          );
        }
      },
      enableSorting: false,
    },

    {
      accessorKey: "studentId",
      header: ({ column }) => {
        column.toggleVisibility(false);
        return <></>;
      },
    },
  ];
}

const setAttendance = async (
  studentId: string,
  status: "arrived" | "default",
) => {
  try {
    const response = await Attendance(studentId, status);
    return response;
  } catch (e) {
    console.error(e);
  }
};
