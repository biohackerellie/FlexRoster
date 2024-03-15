"use client";

import * as React from "react";

import { Request } from "@local/validators";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { pusherClient } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";

interface RequestsProps {
  initialRequests: Request[];
  userId: string;
}

const Requests: React.FC<RequestsProps> = ({ initialRequests, userId }) => {
  const [requests, setRequests] = React.useState<Request[]>(initialRequests);
  React.useEffect(() => {
    pusherClient.subscribe(toPusherKey(`request:${userId}`));
    const requestHandler = (request: Request) => {
      setRequests((prev) => [request, ...prev]);
    };
    pusherClient.bind("new-request", requestHandler);
    return () => {
      pusherClient.unsubscribe(toPusherKey(`request:${userId}`));
      pusherClient.unbind("new-request", requestHandler);
    };
  }, [userId]);
  return (
    <ScrollArea>
      {requests.map((request, index) => {
        return (
          <div key={index}>
            <RequestComponent {...request} />
            <Separator />
          </div>
        );
      })}
    </ScrollArea>
  );
};

function RequestComponent(request: Request) {
  return (
    <div className="flex flex-row items-center justify-between p-4">
      <div>
        <div className="text-sm font-semibold">{request.newTeacher}</div>
        <div className="text-xs text-gray-500">{request.timestamp}</div>
      </div>
      <div className="flex flex-row items-center">
        <div className="text-sm font-semibold">{request.status}</div>
      </div>
    </div>
  );
}

export default Requests;
