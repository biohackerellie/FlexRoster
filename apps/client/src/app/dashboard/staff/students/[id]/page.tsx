import type { Metadata } from "next";
import * as React from "react";
import { Loader2 } from "lucide-react";

import { Card } from "@local/ui/card";
import { Shell } from "@local/ui/shell";

import { getData } from "../../../_components/logic/queries";
import StudentDetails from "../../../_components/studentDetails";

export const metadata: Metadata = {
  title: "FLEX | Details",
};

export default function DetailsPage({ params }: { params: { id: string } }) {
  const rosterId = params.id;

  return (
    <div className="flex h-screen flex-col">
      <div className="flex min-h-screen w-full flex-col">
        <Shell>
          <Card>
            <React.Suspense
              fallback={<Loader2 className="h-8 w-8 animate-spin" />}
            >
              <StudentDetails dataPromise={getData(rosterId)} />
            </React.Suspense>
          </Card>
        </Shell>
      </div>
    </div>
  );
}
