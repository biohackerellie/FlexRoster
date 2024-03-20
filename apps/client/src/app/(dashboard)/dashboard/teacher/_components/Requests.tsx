"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { toast } from "sonner";

import { Request } from "@local/validators";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  console.log(
    "requests",
    requests ? requests[0]?.currentTeacherName : "no requests",
  );
  return (
    <>
      <Tabs defaultValue="requests">
        <TabsList>
          <TabsTrigger value="requests">Requests</TabsTrigger>
          <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
        </TabsList>
        <TabsContent value="requests">
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
              <div className="flex h-48 items-center justify-center">
                <h1 className="text-2xl font-semibold text-gray-500">
                  No requests
                </h1>
              </div>
            )}
          </ScrollArea>
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
    </>
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
    <div className="flex flex-row items-center justify-between p-4">
      <div>
        <div className="text-sm font-semibold">
          {request.studentName} from {request.currentTeacherName}'s room
        </div>
        <div className="text-xs text-gray-500">
          {formatTimestamp(request.timestamp)}
        </div>
      </div>
      <div className="flex cursor-pointer flex-row items-center">
        <ApprovalMenu
          requestId={request.id}
          studentId={request.studentId}
          teacherId={request.currentTeacher}
          newTeacherId={request.newTeacher}
        />
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
  const router = useRouter();
  try {
    await RequestApproval(
      requestId,
      status,
      studentId,
      teacherId,
      newTeacherId,
    );
    router.refresh();
  } catch (e) {
    console.log(e);
  }
};

export default Requests;
