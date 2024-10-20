import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";

import type { Request } from "@local/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@local/ui/card";
import { ScrollArea } from "@local/ui/scroll-area";
import { Separator } from "@local/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@local/ui/tabs";
import { logger } from "@local/utils";

import { client } from "@/lib/eden";
import ApprovalMenu from "../../../_components/Requests";

export default async function RequestsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const teacherId = params.id;

  const requests = await getRequests(teacherId);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <React.Suspense fallback={<Loader2 className="h-8 w-8 animate-spin" />}>
          <div className="inset-0 h-auto w-full items-center justify-between">
            <Tabs defaultValue="requests">
              <TabsList>
                <TabsTrigger value="requests">Requests</TabsTrigger>
                <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
              </TabsList>
              <TabsContent value="requests">
                <ScrollArea>
                  {requests?.incomingRequests &&
                  requests.incomingRequests.length > 0 ? (
                    requests?.incomingRequests.map((request, index) => {
                      return (
                        <div className="flex items-center justify-center border">
                          <div className="grid h-auto w-full grid-cols-3 grid-rows-3 gap-x-5">
                            <div className="" key={index}>
                              <RequestComponent {...request} />
                              <Separator />
                            </div>
                          </div>
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
              </TabsContent>
              <TabsContent value="outgoing">
                <ScrollArea>
                  {requests?.outgoingRequests &&
                  requests?.outgoingRequests.length > 0 ? (
                    requests.outgoingRequests.map((request, index) => {
                      return (
                        <div className="flex items-center justify-center border">
                          <div className="grid h-auto w-full grid-cols-3 grid-rows-3 gap-x-5">
                            <div key={index}>
                              <RequestComponent {...request} />
                              <Separator />
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="flex h-fit items-center justify-center">
                      <h1 className="text-2xl font-semibold text-gray-500">
                        No outgoing requests
                      </h1>
                    </div>
                  )}
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>
        </React.Suspense>
      </CardContent>
    </Card>
  );
}

async function getRequests(teacherId: string) {
  noStore();
  const { data, error } = await client.api.requests
    .teacher({ userId: teacherId })
    .get();
  if (error) {
    logger.error(error);
  }
  return data;
}
function isBeforeToday(date: Date) {
  const today = new Date();
  today.setUTCHours(23);
  today.setDate(today.getDate() - 1);
  return date < today;
}

function RequestComponent(request: Request) {
  const daate = new Date(request.dateRequested);
  daate.setUTCHours(23);
  const zonedDate = daate.toLocaleDateString();
  return (
    <div className="justify-between p-2">
      <div>
        <div className="text-sm font-semibold">
          {request.studentName} from {request.currentTeacherName}'s room
        </div>
        <div className="flex justify-between">
          Requested {zonedDate}
          <div className="cursor-pointer">
            <ApprovalMenu
              requestId={request.id}
              studentId={request.studentId}
              teacherId={request.currentTeacher}
              newTeacherId={request.newTeacher}
              enabled={isBeforeToday(daate)}
              status={request.status}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
