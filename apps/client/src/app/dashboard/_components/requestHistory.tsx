import { format } from "date-fns-tz";

import type { Request } from "@local/utils";
import { ScrollArea } from "@local/ui/scroll-area";
import { Separator } from "@local/ui/separator";

export default function RequestHistory({ requests }: { requests: Request[] }) {
  return (
    <ScrollArea className="h-72 w-full rounded-md border shadow-sm">
      <div className="p-4">
        <h4 className="mb-4 text-lg font-medium leading-none">Requests</h4>
        {requests.map((request) => (
          <>
            <div key={request.id} className="text-sm">
              <div className="flex justify-between">
                <span className="text-md text-gray-500">
                  {format(request.dateRequested, "PPP", {
                    timeZone: "America/Denver",
                  })}
                </span>
                <span className="text-md text-gray-500">{request.status}</span>
              </div>
              <div className="text-sm font-medium">
                {request.currentTeacherName} to {request.newTeacherName}
              </div>
              <Separator className="my-2" />
            </div>
          </>
        ))}
      </div>
    </ScrollArea>
  );
}
