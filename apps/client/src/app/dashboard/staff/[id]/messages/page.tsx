import React from "react";
import { Loader2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@local/ui/card";

import { client } from "@/lib/eden";
import AlertComponent from "../../../_components/AlertComponent";

export default async function MessagesPage({
  params,
}: {
  params: { id: string };
}) {
  const teacherId = params.id;
  const messages = await getMessages(teacherId);
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <React.Suspense fallback={<Loader2 className="h-8 w-8 animate-spin" />}>
          <AlertComponent messages={messages} userId={teacherId} />
        </React.Suspense>
      </CardContent>
    </Card>
  );
}

async function getMessages(teacherId: string) {
  const { data, error } = await client.api.inbox
    .alerts({ userId: teacherId })
    .get();
  if (error) {
    console.error(error);
    return [];
  }
  if (!data) {
    return [];
  }
  return data;
}
