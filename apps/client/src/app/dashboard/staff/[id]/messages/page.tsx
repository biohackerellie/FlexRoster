import React from "react";
import { Loader2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@local/ui/card";

import AlertComponent from "../../../_components/AlertComponent";
import { getMessages } from "../../../_components/logic/queries";

export default async function MessagesPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const teacherId = params.id;
  const data = await getMessages(teacherId);
  const messages = data?.messageAlerts ?? [];
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
