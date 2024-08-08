"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { cn } from ".";
import { buttonVariants } from "./button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
className,
classNames,
showOutsideDays = true,
...props
}: CalendarProps) {
return (
<DayPicker
today={new Date()}
showOutsideDays={showOutsideDays}
className={cn("p-2", className)}
classNames={{
hidden: "invisible",
root: "",
outside:
"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
weekdays: "text-muted-foreground",
weekday: "px-1 text-center",
day_button: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0"),
day: "",
selected:
"bg-secondary rounded-md text-primary-foreground hover:text-primary-foreground ",
today: "bg-primary rounded-md text-accent-foreground",

    month_caption: "font-bold mt-2 mb-3",
    month: "space-y-4",
    button_next: cn(
      buttonVariants({ variant: "outline" }),
      "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
    ),
    button_previous: cn(
      buttonVariants({ variant: "outline" }),
      "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
    ),
    nav: "flex flex-row-reverse gap-x-1 absolute left-0.5 top-1 fill-foreground",
  }}
  components={{
    Chevron: ({ orientation }) => {
      if (orientation === "left") {
        return <ChevronLeft />;
      } else {
        return <ChevronRight />;
      }
    },
  }}
  {...props}
/>
);
}Calendar.displayName = "Calendar";

export { Calendar };
