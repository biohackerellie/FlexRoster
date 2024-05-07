"use client";

import type { StudentTable } from "@/lib/types";
import * as React from "react";
import Link from "next/link";

import { Button } from "@local/ui/button";
import { DataTable } from "@local/ui/data-table";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@local/ui/drawer";
import { ScrollArea, ScrollBar } from "@local/ui/scroll-area";
import { Separator } from "@local/ui/separator";

import useMediaQuery from "@/hooks/useMediaQuery";

/**
 * Class List Component
 */

interface ClassListProps {
  data: StudentTable[];
}

export function ClassListComponent({ data }: ClassListProps) {
  const [open, setOpen] = React.useState(false);
  // 

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
