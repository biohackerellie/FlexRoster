"use client";

import type { TeacherTable } from "@/lib/types";
import type { Table } from "@tanstack/react-table";
import { CalendarIcon } from "lucide-react";
import { Link } from "next-view-transitions";

import type { messageAlerts } from "@local/utils";
import { Button } from "@local/ui/button";

import { useChatNotifications } from "@/hooks";
import { CreateCommentDialog } from "./createDialog";
import { DeleteCommentDialog } from "./deleteDialog";

interface ToolbarActionsProps {
  teacherId: string;

  comment: string | null;
  table: Table<TeacherTable>;

  messageCount: number;
  requestCount: number;
}

export function ToolbarActions({
  teacherId,
  comment,
  messageCount,
  requestCount,
}: ToolbarActionsProps) {
  const currentCount = useChatNotifications(teacherId, messageCount);
  return (
    <div className="flex items-center justify-evenly gap-2 gap-x-4">
      {comment ? (
        <div className="flex w-auto max-w-[472px] items-center justify-center">
          <span className="text-xl font-semibold text-card-foreground">
            Your Comment:
          </span>
          <div className="text-md overflow-hidden text-ellipsis font-thin leading-relaxed text-gray-300">
            {comment}
          </div>
          <DeleteCommentDialog teacherId={teacherId} />
        </div>
      ) : (
        <CreateCommentDialog teacherId={teacherId} />
      )}
      <Button variant="outline" size="sm" asChild>
        <Link href={`/dashboard/staff/${teacherId}/availability`}>
          <CalendarIcon />
          View Availability
        </Link>
      </Button>
      <div className="relative flex">
        <Button variant="outline" asChild>
          <Link href={`/dashboard/staff/${teacherId}/messages`}>
            Messages{" "}
            {currentCount > 0 && (
              <div className="absolute right-0 top-0 h-4 w-4 animate-pulse rounded-full bg-red-700" />
            )}
          </Link>
        </Button>
      </div>
      <div className="relative flex">
        <Button variant="outline" asChild>
          <Link href={`/dashboard/staff/${teacherId}/requests`}>
            Requests{" "}
            {requestCount > 0 && (
              <div className="absolute right-0 top-0 h-4 w-4 animate-pulse rounded-full bg-red-700" />
            )}
          </Link>
        </Button>
      </div>
    </div>
  );
}
