"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import type { DatePickerSchema } from "@local/validators";
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
import { datePickerSchema } from "@local/validators";

import { getErrorMessage } from "@/lib/errorHandler";
import { RequestRoom } from "./logic/actions";

interface DatePickerFormProps {
  id: string;
}

export function DatePickerForm({ id }: DatePickerFormProps) {
  const [open, setOpen] = React.useState(false);
  const [isRequestPending, startRequestTransition] = React.useTransition();

  const form = useForm<DatePickerSchema>({
    resolver: zodResolver(datePickerSchema),
  });

  function onSubmit(input: DatePickerSchema) {
    startRequestTransition(() => {
      toast.promise(
        RequestRoom({
          ...input,
          teacherId: id,
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
          Transfer
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
                          date > new Date() || date < new Date("1900-01-01")
                        }
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