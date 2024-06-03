"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { format, setHours } from "date-fns";
import { X } from "lucide-react";

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@local/ui/card";
import { ScrollArea } from "@local/ui/scroll-area";
import { Separator } from "@local/ui/separator";

import type { getData } from "./logic/queries";
import { DatePickerForm } from "@/app/dashboard/_components/datePicker";
import { convertUTCDateToLocalDate } from "@/lib/utils";

interface StudentDetailsProps {
  dataPromise: ReturnType<typeof getData>;
}

export default function StudentDetails({ dataPromise }: StudentDetailsProps) {
  "use memo";
  const data = React.use(dataPromise);
  const student = data.student.students;
  const requests = data.requests;
  const classroom = data.student.classrooms!;
  const studentId = data.student.user?.id;
  const router = useRouter();
  console.log(requests);
  let status = "";

  switch (student.status) {
    case "transferredA":
      status = "Approved for transfer and arrived in new classroom";
      break;
    case "transferredN":
      status = "Approved for transfer and not arrived in new classroom";
      break;
    default:
      status = "Student is in their default assigned classroom";
      break;
  }

  return (
    <CardContent>
      <div className="relative left-full right-10 mr-4 items-end justify-end pr-2">
        <X
          className="absolute h-8 w-8 text-gray-500 transition-all ease-in-out hover:rotate-90 hover:scale-75"
          onClick={() => router.back()}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {student.studentName}
        </CardTitle>
        <CardDescription className="text- text-lg font-semibold">
          {student.studentEmail}
        </CardDescription>
      </CardHeader>
      <Separator className="my-4" />
      <div className="flex justify-between">
        <div>
          <div className="text-sm font-semibold">Classroom</div>
          <div className="text-sm">{classroom.roomNumber}</div>
        </div>
        <div>
          <div className="text-sm font-semibold">Teacher</div>
          <div className="text-sm">{classroom.teacherName}</div>
        </div>
        <div>
          <div className="text-sm font-semibold">Status</div>
          <div className="text-sm">{status}</div>
        </div>
      </div>

      <Separator className="my-4" />
      {studentId && (
        <>
          <div className="flex justify-center gap-2">
            <div className="text-md font-semibold">
              Transfer {student.studentName} to my classroom
            </div>
            <DatePickerForm studentId={studentId} />
          </div>
          <Separator className="my-4" />
        </>
      )}
      <CardFooter className="justify-center">
        <ScrollArea className="h-72 w-full rounded-md border shadow-sm">
          <div className="p-4">
            <h4 className="mb-4 text-lg font-medium leading-none">Requests</h4>
            {requests.map((request, key) => {
              const dateRequested = new Date(request.dateRequested);

              return (
                <>
                  <div key={key} className="text-sm">
                    <div className="flex justify-between">
                      <span className="text-md text-gray-500">
                        {format(
                          dateRequested.toLocaleString([], { timeZone: "UTC" }),
                          "E, MMM d",
                        )}
                      </span>
                      <span className="text-md text-gray-500">
                        {request.status}
                      </span>
                    </div>
                    <div className="text-sm font-medium">
                      {request.currentTeacherName} to {request.newTeacherName}
                    </div>
                    <Separator className="my-2" />
                  </div>
                </>
              );
            })}
          </div>
        </ScrollArea>
      </CardFooter>
    </CardContent>
  );
}
