"use client";

import type { StudentStatus } from "@local/utils";
import { Badge } from "@local/ui/badge";
import { Button } from "@local/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@local/ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "@local/ui/tooltip";

import { Attendance } from "./logic/actions";

interface StatusBadgeProps {
  status: StudentStatus;
  id: string;
}
const StatusBadge: React.FC<StatusBadgeProps> = ({ status, id }) => {
  switch (status) {
    case "default":
      return <Badge variant="outline">Default</Badge>;
    case "transferredN":
      return (
        <div className="text-md max-w-[80px] overflow-ellipsis leading-none">
          <Tooltip>
            <TooltipTrigger className="cursor-pointer" asChild>
              <Popover>
                <PopoverTrigger asChild>
                  <Badge
                    variant="destructive"
                    className="animate-pulse cursor-pointer"
                  >
                    transfer
                  </Badge>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="grid gap-4">
                      <div className="grid grid-cols-3 items-center gap-4 gap-y-2 border-b">
                        <p className="col-span-2 text-sm font-medium leading-none text-muted-foreground">
                          Mark as arrived:
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => setAttendance(id, "arrived")}
                          className="pb-2"
                        >
                          Arrived
                        </Button>
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <p className="col-span-2 text-sm font-medium leading-none text-muted-foreground">
                          Reset student to default classroom:
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => setAttendance(id, "default")}
                        >
                          Default
                        </Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </TooltipTrigger>
            <TooltipContent>Click when student arrives</TooltipContent>
          </Tooltip>
        </div>
      );
    case "transferredA":
      return (
        <div className="text-md max-w-[80px] overflow-ellipsis leading-none">
          <Tooltip>
            <TooltipTrigger className="cursor-pointer" asChild>
              <Popover>
                <PopoverTrigger asChild>
                  <Badge
                    variant="success"
                    className="animate-pulse cursor-pointer"
                  >
                    transferred
                  </Badge>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="grid gap-4">
                      <div className="grid grid-cols-3 items-center gap-4 gap-y-2 border-b">
                        <p className="col-span-2 text-sm font-medium leading-none text-muted-foreground">
                          Mark not arrived:
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => setAttendance(id, "transferredN")}
                          className="pb-2"
                        >
                          Not Arrived
                        </Button>
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <p className="col-span-2 text-sm font-medium leading-none text-muted-foreground">
                          Reset student to default classroom:
                        </p>
                        <Button
                          variant="outline"
                          onClick={() => setAttendance(id, "default")}
                        >
                          Default
                        </Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </TooltipTrigger>
            <TooltipContent>Click when student arrives</TooltipContent>
          </Tooltip>
        </div>
      );
    default:
      return <Badge variant="outline">Default</Badge>;
  }
};
const setAttendance = async (
  studentId: string,
  status: "arrived" | "default" | "transferredN",
) => {
  try {
    const response = await Attendance(studentId, status);
    return response;
  } catch (e) {
    console.error(e);
  }
};

export default StatusBadge;
