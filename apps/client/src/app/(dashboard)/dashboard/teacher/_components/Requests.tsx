"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { toast } from "sonner";

import type { Request } from "@local/validators";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@local/ui/dropdown-menu";
import { ScrollArea } from "@local/ui/scroll-area";
import { Separator } from "@local/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@local/ui/tabs";

import { pusherClient } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";
import { RequestApproval } from "../actions";

interface RequestsProps {
  incomingRequests: Request[] | null;
  outgoing: Request[] | null;

  userId: string;
}

const Requests: React.FC<RequestsProps> = ({
  incomingRequests,
  outgoing,
  userId,
}) => {
  const [requests, setRequests] = React.useState<Request[] | null>(
    incomingRequests,
  );
  const [outgoingRequests, setOutgoingRequests] = React.useState<
    Request[] | null
  >(outgoing);
  React.useEffect(() => {
    pusherClient.subscribe(toPusherKey(`request:${userId}`));
    const requestHandler = (request: Request) => {
      setRequests((prev) => [request, ...(prev ?? [])]);
      toast(`New request from ${request.studentName}`, {
        position: "top-center",
      });
    };
    const outgoingHandler = (request: Request) => {
      setOutgoingRequests((prev) => [request, ...(prev ?? [])]);
      toast(`${request.studentName} has requested to transfer to a new room`, {
        position: "top-center",
      });
    };
    pusherClient.bind("new-request", requestHandler);
    pusherClient.bind("new-outgoing", outgoingHandler);
    return () => {
      pusherClient.unsubscribe(toPusherKey(`request:${userId}`));
      pusherClient.unbind("new-request", requestHandler);
      pusherClient.unbind("new-outgoing", outgoingHandler);
    };
  }, [userId]);

  return (
    <div className="inset-0  h-auto w-full  items-center justify-between">
      <Tabs defaultValue="requests">
        <TabsList>
          <TabsTrigger value="requests">Requests</TabsTrigger>
          <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
        </TabsList>
        <TabsContent value="requests">
          <div className="flex h-48 w-auto items-center justify-center ">
            <ScrollArea>
              {requests ? (
                requests.map((request, index) => {
                  return (
                    <div key={index}>
                      <RequestComponent {...request} />
                      <Separator />
                    </div>
                  );
                })
              ) : (
                <div className="flex h-fit items-center justify-center">
                  <h1 className="text-2xl font-semibold text-gray-500">
                    No requests
                  </h1>
                </div>
              )}
            </ScrollArea>
          </div>
        </TabsContent>
        <TabsContent value="outgoing">
          <ScrollArea>
            {outgoingRequests ? (
              outgoingRequests.map((request, index) => {
                return (
                  <div key={index}>
                    <RequestComponent {...request} />
                    <Separator />
                  </div>
                );
              })
            ) : (
              <div className="flex h-48 items-center justify-center">
                <h1 className="text-2xl font-semibold text-gray-500">
                  No outgoing requests
                </h1>
              </div>
            )}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

function RequestComponent(request: Request) {
  const formatTimestamp = (timestamp: string | number) => {
    let time = timestamp;
    if (typeof timestamp === "string") {
      time = parseInt(timestamp);
    }
    return format(time, "h:mm a");
  };

  return (
    <div className="flex w-full justify-between p-2">
      <div>
        <div className="text-sm font-semibold">
          {request.studentName} from {request.currentTeacherName}'s room
        </div>
        <div className="flex justify-between">
          {formatTimestamp(request.timestamp)}
          <div className="cursor-pointer ">
            <ApprovalMenu
              requestId={request.id}
              studentId={request.studentId}
              teacherId={request.currentTeacher}
              newTeacherId={request.newTeacher}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ApprovalMenu({
  requestId,
  studentId,
  teacherId,
  newTeacherId,
}: {
  requestId: string;
  studentId: number;
  teacherId: string;
  newTeacherId: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="animate-pulse hover:cursor-pointer">
        Pending
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() =>
            Approval(requestId, studentId, teacherId, newTeacherId, "approved")
          }
        >
          Approve
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            Approval(requestId, studentId, teacherId, newTeacherId, "denied")
          }
        >
          Deny
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const Approval = async (
  requestId: string,
  studentId: number,
  teacherId: string,
  newTeacherId: string,
  status: "approved" | "denied",
) => {
  try {
    await RequestApproval(
      requestId,
      status,
      studentId,
      teacherId,
      newTeacherId,
    );
  } catch (e) {
    console.error(e);
  }
};

export default Requests;
