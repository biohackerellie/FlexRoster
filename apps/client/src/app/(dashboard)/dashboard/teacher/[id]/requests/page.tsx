import React from "react";
import { Loader2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@local/ui/card";

import { client } from "@/lib/eden";
import NewRequestsComponent from "../_components/Requests";

export default async function RequestsPage({
  params,
}: {
  params: { id: string };
}) {
  const teacherId = params.id;

  const requests = await getRequests(teacherId);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <React.Suspense fallback={<Loader2 className="h-8 w-8 animate-spin" />}>
          <div className="flex">
            <NewRequestsComponent
              incomingRequests={requests?.incomingRequests ?? undefined}
              outgoingRequests={requests?.outgoingRequests ?? undefined}
              userId={teacherId}
            />
          </div>
        </React.Suspense>
      </CardContent>
    </Card>
  );
}

async function getRequests(teacherId: string) {
  const { data, error } = await client.api.requests
    .teacher({ userId: teacherId })
    .get();
  if (error) {
    console.error(error);
  }
  console.log(data);
  return data;
}
