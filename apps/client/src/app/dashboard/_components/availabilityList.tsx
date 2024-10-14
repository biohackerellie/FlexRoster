"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { toast } from "sonner";

import { cn } from "@local/ui";
import { Button, buttonVariants } from "@local/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@local/ui/card";
import { Separator } from "@local/ui/separator";

import { getErrorMessage } from "@/lib/errorHandler";
import { ClassroomContext } from "../staff/[id]/context";
import { setAvailability } from "./logic/actions";

interface CalendarProps {
  initialDates: Date[];
}

export default function AvailabilityComponent({ initialDates }: CalendarProps) {
  const [selectedDates, setSelectedDates] =
    React.useState<Date[]>(initialDates);

  const classroom = React.use(ClassroomContext) ?? null;
  const [isPending, startTransition] = React.useTransition();
  const handleDayClick = (day: Date) => {
    setSelectedDates((prev) => {
      const isSelected = prev.some(
        (date) => date.toDateString() === day.toDateString(),
      );
      if (isSelected) {
        return prev.filter(
          (date) => date.toDateString() !== day.toDateString(),
        );
      } else {
        return [...prev, day];
      }
    });
  };

  function saveAvailability(dates: Date[]) {
    startTransition(() => {
      toast.promise(
        setAvailability(
          dates,
          classroom?.classroomId ?? "",
          classroom?.teacherId ?? "",
        ),
        {
          position: "top-center",
          loading: "Updating Availability...",
          success: () => {
            return "Updated!";
          },
          error: (error) => {
            return getErrorMessage(error);
          },
        },
      );
    });
  }
  const isDayHighlighted = (day: Date) => {
    return initialDates.some(
      (date) => date.toDateString() === day.toDateString(),
    );
  };

  const isDaySelected = (day: Date) => {
    return selectedDates.some(
      (date) => date.toDateString() === day.toDateString(),
    );
  };

  const router = useRouter();

  return (
    <CardContent>
      <div className="relative left-full right-10 mr-4 items-end justify-end pr-2">
        <X
          className="absolute h-8 w-8 text-gray-500 transition-all ease-in-out hover:rotate-90 hover:scale-75"
          onClick={() => router.back()}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Availability</CardTitle>
        <CardDescription className="text- text-lg font-semibold">
          Dates that are highlighted are currently available. Click on a date to
          toggle availability and then click the save button.
        </CardDescription>
      </CardHeader>
      <Separator className="my-4" />
      <div className="flex justify-center align-middle">
        <DayPicker
          showOutsideDays={true}
          className="p-3"
          classNames={{
            months:
              "flex flex-col sm:flex-row space-y-4 sm:space-x-8 sm:space-y-4",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button: cn(
              buttonVariants({ variant: "outline" }),
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
            ),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell:
              "text-muted-foreground rounded-md w-24 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "h-24 w-24 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: cn(
              buttonVariants({ variant: "ghost" }),
              "h-24 w-24 p-0 font-normal aria-selected:opacity-100",
            ),
            day_range_end: "day-range-end",
            day_selected:
              "bg-primary-muted text-black dark:text-white hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            day_today: " text-accent-foreground",
            day_outside:
              "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle:
              "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
          }}
          components={{
            IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
            IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
          }}
          mode="multiple"
          disabled={(date) => date < new Date()}
          selected={selectedDates}
          onDayClick={handleDayClick}
          modifiers={{
            highlighted: isDayHighlighted,
            selected: isDaySelected,
          }}
          // modifiersStyles={{
          //   highlighted: {
          //     backgroundColor: "#FFD700",
          //   },
          //   selected: {
          //     backgroundColor: "#FFA500",
          //   },
          // }}
        />
      </div>
      <Separator className="my-4" />
      <div className="flex justify-end">
        <CardFooter>
          <Button
            variant={"outline"}
            disabled={isPending || !classroom}
            onClick={() => saveAvailability(selectedDates)}
          >
            Save
          </Button>
        </CardFooter>
      </div>
    </CardContent>
  );
}
