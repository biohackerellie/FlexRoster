"use client";

import * as React from "react";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { toast } from "sonner";

import {
  RequestRoom,
  setRoster,
} from "@/app/(dashboard)/dashboard/student/actions";
import { DataTable } from "@/components/tables";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import useMediaQuery from "@/hooks/useMediaQuery";
import { StudentTable } from "@/lib/types";

/**
 * Class List Component
 */

interface ClassListProps {
  data: StudentTable[];
}

/**
 * Primary JSX Component.
 * @param data - StudentTable[] - Array of classes available to the student.
 * @useMediaQuery hook to determine if the user is on a desktop or mobile device.
 * Displays Table Component in a Dialog or Drawer based on the device.
 */
export function ClassListComponent({ data }: ClassListProps) {
  const [open, setOpen] = React.useState(false);
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
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" size="lg">
            Change Class
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Request a different class</DrawerTitle>
            <DrawerDescription>
              Please select the class you would like to attend today.
            </DrawerDescription>
          </DrawerHeader>
          <Separator />
          <ClassList data={data} />
        </DrawerContent>
      </Drawer>
    </>
  );
}

/**
 * Mobile Class List Component
 */
const ClassList = ({ data }: { data: StudentTable[] }) => {
  const rooms = data.map((room) => {
    return {
      room: room.roomNumber,
      teacher: room.teacherName,
      available: room.available,
      teacherId: room.teacherId,
    };
  });
  return (
    <ScrollArea className="h-72 w-screen">
      <div className="p-4">
        {rooms.map((room, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">{room.room}</p>
              <p className="text-sm text-gray-500">{room.teacher}</p>
            </div>
            <div>
              <Button
                variant="outline"
                size="sm"
                disabled={!room.available}
                onClick={() => handleTransfer(room.teacherId)}
              >
                {room.available ? "Join" : "Unavailable"}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};

/**
 * Table Columns
 */
const columns: ColumnDef<StudentTable>[] = [
  {
    accessorKey: "roomNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Room Number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
    accessorKey: "available",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Available
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "teacherId",
    header: "Transfer",
    cell: ({ row, column }) => {
      const teacherId = row.getValue("teacherId") as string;
      const available = row.getValue("available") as boolean;
      return (
        <Button disabled={!available} onClick={() => handleTransfer(teacherId)}>
          Transfer
        </Button>
      );
    },
  },
  {
    accessorKey: "chatId",
    header: "Message",
    cell: ({ row, column }) => {
      const chatId = row.getValue("chatId") as string;
      return (
        <Button asChild variant="outline">
          <Link href={chatId}>chat</Link>
        </Button>
      );
    },
  },
];

/**
 * Handles the transfer of a student to a different class.
 * @param email - string - The student's email.
 * @param roomNumber - string - The room number of the class.
 * @param teacherName - string - The teacher's name.
 */
async function handleTransfer(teacherId: string) {
  try {
    const res = await RequestRoom(teacherId);

    if (res === 200) {
      toast.info("Your request has been sent", {
        position: "top-center",
      });
    }
  } catch (err) {
    console.error(err);
    toast.error("You have already transferred today", {
      position: "top-center",
    });
  }
}
