"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { ArrowLeftRightIcon, CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@local/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@local/ui/popover";

import { getErrorMessage } from "@/lib/errorHandler";
import { RequestRoom } from "./logic/actions";

const datePickerSchema = z.object({
  requestedDate: z.date({
    required_error: "Requested date is required",
  }),
});
type DatePickerSchema = z.infer<typeof datePickerSchema>;
interface DatePickerFormProps {
  teacherId?: string;
  studentId?: string;
}

export function DatePickerForm({ teacherId, studentId }: DatePickerFormProps) {
  const [open, setOpen] = React.useState(false);
  const [isRequestPending, startRequestTransition] = React.useTransition();

  const form = useForm<DatePickerSchema>({
    resolver: zodResolver(datePickerSchema),
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const futureLimit = new Date();
  futureLimit.setDate(today.getDate() + 7);

  function onSubmit(input: DatePickerSchema) {
    startRequestTransition(() => {
      toast.promise(
        RequestRoom({
          ...input,
          teacherId: teacherId ?? undefined,
          studentId: studentId ?? undefined,
        }),
        {
          position: "top-center",
          loading: "Requesting transfer...",
          success: () => {
            form.reset();
            setOpen(false);
            return "Transfer request sent!";
          },
          error: (error) => {
            setOpen(false);
            return getErrorMessage(error);
          },
        },
      );
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <CalendarIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request a transfer</DialogTitle>
          <DialogDescription>
            Please select a day to transfer to this class
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="requestedDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Pick a day to transfer</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > futureLimit ||
                          date < today ||
                          date.getDay() === 6 ||
                          date.getDay() === 0
                        } // disable past dates // weekends // and 7 days in advance
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <DialogFooter className="gap-2 pt-2 sm:space-x-0">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  cancel
                </Button>
              </DialogClose>
              <Button disabled={isRequestPending} type="submit">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
