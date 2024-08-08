"use client";

import type { DateRange } from "react-day-picker";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import type { TeacherDatePickerSchema } from "@local/utils";
import { cn } from "@local/ui";
import { Button } from "@local/ui/button";
import { Calendar } from "@local/ui/calendar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@local/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@local/ui/popover";

import { getErrorMessage } from "@/lib/errorHandler";
import { setAvailability } from "./logic/actions";

interface DatePickerFormProps {
  classroomId: string;
  teacherId: string;
}

export function TeacherDatePickerForm({
  classroomId,
  teacherId,
}: DatePickerFormProps) {
  const [open, setOpen] = React.useState(false);
  const [isRequestPending, startRequestTransition] = React.useTransition();

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [dates, setDates] = React.useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 1),
  });

  function onSubmit(dates: DateRange, classroomId: string, teacherId: string) {
    startRequestTransition(() => {
      toast.promise(setAvailability(dates, classroomId, teacherId), {
        position: "top-center",
        loading: "Updating Availability...",
        success: () => {
          setOpen(false);
          return "Updated!";
        },
        error: (error) => {
          setOpen(false);
          return getErrorMessage(error);
        },
      });
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <CalendarIcon /> Add Availability
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Availability</DialogTitle>
          <DialogDescription>
            Add days you are accepting transfers
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] pl-3 text-left font-normal",
                  !dates && "text-muted-foreground",
                )}
              >
                {dates?.from ? (
                  dates.to ? (
                    <>
                      {format(dates.from, "LLL dd, y")} -{" "}
                      {format(dates.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(dates.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                selected={dates}
                onSelect={setDates}
                disabled={(date) =>
                  date < today || date.getDay() === 6 || date.getDay() === 0
                } // disable past dates // weekends
                // initialFocus
              />
            </PopoverContent>
          </Popover>

          <DialogFooter className="gap-2 pt-2 sm:space-x-0">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                cancel
              </Button>
            </DialogClose>
            <Button
              disabled={isRequestPending}
              onClick={() => onSubmit(dates!, classroomId, teacherId)}
            >
              Submit
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
