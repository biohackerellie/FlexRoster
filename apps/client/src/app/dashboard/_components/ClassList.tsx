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

import { RequestRoom } from "@/app/dashboard/student/actions";
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
      <>
        <span className="mr-3 font-semibold text-neutral-400">
          Steam Classes
        </span>

        <DataTable columns={columns} data={data} />
      </>
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

const processedData = (rooms: StudentTable[]) => {
  return rooms.map((room) => ({
    room: room.roomNumber,
    teacher: room.userName,
    available: room.available,
    teacherId: room.teacherId,
    chatId: room.chatId,
  }));
};

/**
 * Mobile Class List Component
 */
const ClassList = ({ data }: { data: StudentTable[] }) => {
  const rooms = React.useMemo(() => processedData(data), [data]);
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
