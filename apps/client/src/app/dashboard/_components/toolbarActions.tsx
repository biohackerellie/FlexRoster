"use client";

import type { TeacherTable } from "@/lib/types";
import type { Table } from "@tanstack/react-table";
import { CalendarIcon } from "lucide-react";
import { Link } from "next-view-transitions";

import { Button } from "@local/ui/button";

import { CreateCommentDialog } from "./createDialog";
import { DeleteCommentDialog } from "./deleteDialog";

interface ToolbarActionsProps {
  teacherId: string;
  classroomId: string;
  comment: string | null;
  table: Table<TeacherTable>;
  currentStatus: boolean;
}

export function ToolbarActions({
  teacherId,
  comment,
  currentStatus,
  classroomId,
}: ToolbarActionsProps) {
  return (
    <div className="flex items-center justify-evenly gap-2 gap-x-4">
      {comment ? (
        <>
          <span className="text-xl font-semibold text-card-foreground">
            Your Comment:
          </span>
          <p className="text-md font-thin leading-relaxed text-gray-300">
            {comment}
          </p>
          <DeleteCommentDialog teacherId={teacherId} />
        </>
      ) : (
        <CreateCommentDialog teacherId={teacherId} />
      )}
      {/* <div>
        <AvailabilityDialog
          classroomId={classroomId}
          teacherId={teacherId}
          currentStatus={currentStatus}
        />
      </div> */}
      <Button variant="outline" size="sm" asChild>
        <Link href={`/dashboard/staff/${teacherId}/availability`}>
          <CalendarIcon />
          View Availability
        </Link>
      </Button>
      {/* <TeacherDatePickerForm classroomId={classroomId} teacherId={teacherId} /> */}
    </div>
  );
}
