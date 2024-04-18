"use client";

import type { StudentTable } from "@/lib/types";
import type { ColumnDef } from "@tanstack/react-table";
import * as React from "react";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowUpDown, CalendarIcon } from "lucide-react";
import { toast } from "sonner";

import type { requestFormType } from "@local/validators";
import { cn } from "@local/ui";
import { Button } from "@local/ui/button";
import { Calendar } from "@local/ui/calendar";
import { DataTable } from "@local/ui/data-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@local/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@local/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "@local/ui/popover";
import { ScrollArea, ScrollBar } from "@local/ui/scroll-area";
import { Separator } from "@local/ui/separator";

import { RequestRoom } from "@/app/(dashboard)/dashboard/student/actions";
import useMediaQuery from "@/hooks/useMediaQuery";

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
      <div className=" leading-tight">
        <div className="flex items-center text-xl">
          <span className="mr-3 font-semibold text-neutral-400">
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
      chatId: room.chatId,
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
            <div className="flex gap-2">
              <div>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={!room.available}
                  // onClick={() => handleTransfer(room.teacherId)}
                >
                  {room.available ? "Join" : "Unavailable"}
                </Button>
              </div>
              <div>
                <Button size="sm">
                  <Link href={`/chat/${room.chatId}`}>Chat</Link>
                </Button>
              </div>
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
      const teacherId: string = row.getValue("teacherId");
      const today = new Date().toISOString().split("T")[0]!;
      console.log("today", today);
      const [selectedDate, setSelectedDate] = React.useState<Date>();
      const available: boolean = row.getValue("available");
      const data = {
        teacherId,
        dateRequested: selectedDate
          ? selectedDate.toISOString().split("T")[0]!
          : today,
      };
      if (!available) {
        return (
          <Button variant="outline" disabled>
            Transfer
          </Button>
        );
      } else {
        return (
          <Dialog>
            <DialogTrigger asChild>
              <Button disabled={!available}>Transfer</Button>
            </DialogTrigger>
            <DialogContent>
              <Popover>
                <DialogHeader>
                  <DialogTitle>Pick a day</DialogTitle>
                  <DialogDescription>
                    Please select the day you would like to transfer.
                  </DialogDescription>
                </DialogHeader>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? (
                      format(selectedDate, "PPP")
                    ) : (
                      <span> Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                  />
                </PopoverContent>
                <DialogFooter>
                  <Button onClick={() => handleTransfer(data)}>Submit</Button>
                </DialogFooter>
              </Popover>
            </DialogContent>
          </Dialog>
          // <Button disabled={!available} onClick={() => handleTransfer(teacherId)}>
          //   Transfer
          // </Button>
        );
      }
    },
  },
  {
    accessorKey: "chatId",
    header: "Message",
    cell: ({ row, column }) => {
      // eslint-disable-next-line
      const chatId = row.getValue("chatId") as string;
      return (
        <Button asChild variant="outline">
          <Link prefetch={false} href={chatId}>
            chat
          </Link>
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
async function handleTransfer(data: requestFormType) {
  try {
    const res = await RequestRoom(data);
    if (res === 200) {
      toast.info("Your request has been sent", {
        position: "top-center",
      });
    } else if (res === 401) {
      toast.error("You have already transferred today", {
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
