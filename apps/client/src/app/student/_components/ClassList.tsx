"use client";

import * as React from "react";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { toast } from "sonner";

import { setRoster } from "@/app/student/actions";
import { DataTable } from "@/components/tables";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="lg">
            Change Class
          </Button>
        </DialogTrigger>
        <DialogContent className="flex max-h-[900px] max-w-[800px] flex-col">
          <DialogHeader>
            <DialogTitle>Request a different class</DialogTitle>
            <DialogDescription>
              Please select the class you would like to attend today.
            </DialogDescription>
          </DialogHeader>
          <div className="flex max-h-[700px] max-w-[750px] flex-col">
            <DataTable columns={columns} data={data} />
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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
      email: room.email,
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
                onClick={() =>
                  handleTransfer({
                    email: room.email,
                    roomNumber: room.room,
                    teacherName: room.teacher,
                  })
                }
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
    accessorKey: "email",
    header: "Transfer",
    cell: ({ row, column }) => {
      const email = row.getValue("email") as string;
      const roomNumber = row.getValue("roomNumber") as string;
      const teacherName = row.getValue("teacherName") as string;

      return (
        <Button
          onClick={() => handleTransfer({ email, roomNumber, teacherName })}
        >
          Transfer
        </Button>
      );
    },
  },
  {
    accessorKey: "userId",
    header: "Message",
    cell: ({ row, column }) => {
      const userId = row.getValue("userId") as string;
      const teacherName = row.getValue("teacherName") as string;
      return (
        <Button asChild variant="outline">
          <Link href={`/student/chat/${userId}--${teacherName}`}>chat</Link>
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
async function handleTransfer({
  email,
  roomNumber,
  teacherName,
}: {
  email: string;
  roomNumber: string;
  teacherName: string;
}) {
  try {
    const res = await setRoster(email, roomNumber, teacherName);
    console.log(res);
    if (res === 200) {
      toast.info("You have successfully transferred", {
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
