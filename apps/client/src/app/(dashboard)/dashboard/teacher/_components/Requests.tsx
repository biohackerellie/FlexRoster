"use client";

import * as React from "react";

import { Request } from "@local/validators";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pusherClient } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";

interface RequestsProps {
  incomingRequests: Request[];
  outgoing: Request[];

  userId: string;
}

const Requests: React.FC<RequestsProps> = ({
  incomingRequests,
  outgoing,
  userId,
}) => {
  const [requests, setRequests] = React.useState<Request[]>(incomingRequests);
  const [outgoingRequests, setOutgoingRequests] =
    React.useState<Request[]>(outgoing);
  React.useEffect(() => {
    pusherClient.subscribe(toPusherKey(`request:${userId}`));
    const requestHandler = (request: Request) => {
      setRequests((prev) => [request, ...prev]);
    };
    const outgoingHandler = (request: Request) => {
      setOutgoingRequests((prev) => [request, ...prev]);
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
    <>
      <Tabs>
        <TabsList>
          <TabsTrigger value="requests">Requests</TabsTrigger>
          <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
        </TabsList>
        <TabsContent value="requests">
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
        </TabsContent>
        <TabsContent value="outgoing">
          <ScrollArea>
            {outgoingRequests.map((request, index) => {
              return (
                <div key={index}>
                  <RequestComponent {...request} />
                  <Separator />
                </div>
              );
            })}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </>
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
