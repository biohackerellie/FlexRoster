// import { CalendarLarge } from "@local/ui/calendar-large";
import * as React from "react";
import { Loader2 } from "lucide-react";

import { Card } from "@local/ui/card";
import { ScrollArea } from "@local/ui/scroll-area";
import { Shell } from "@local/ui/shell";

import AvailabilityComponent from "@/app/dashboard/_components/availabilityList";
import { getClassAvailability } from "@/app/dashboard/_components/logic/actions";

export default async function AvailabilityPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const dates = await getClassAvailability(id);
  return (
    <div className="-h-screen flex flex-col">
      <div className="flex min-h-screen w-full flex-col">
        <Shell>
          <Card>
            <React.Suspense
              fallback={<Loader2 className="h-8 w-8 animate-spin" />}
            >
              <AvailabilityComponent initialDates={dates.data} />
            </React.Suspense>
          </Card>
        </Shell>
      </div>
    </div>
  );
}
