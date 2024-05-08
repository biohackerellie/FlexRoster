"use client";

import type { DataTableFilterField } from "@/hooks/types";
import * as React from "react";

import type { StudentClasses } from "@local/validators";
import { Button } from "@local/ui/button";
import { DataTable } from "@local/ui/data-table-students";
import { DataTableToolbar } from "@local/ui/data-table-toolbar";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@local/ui/drawer";
import { ScrollArea, ScrollBar } from "@local/ui/scroll-area";
import { Separator } from "@local/ui/separator";
import { Shell } from "@local/ui/shell";

import type { getStudentClassesData } from "../logic/queries";
import { useDataTable } from "@/hooks/useDataTable";
import useMediaQuery from "@/hooks/useMediaQuery";
import { studentStatusOptions } from "@/lib/constants";
import { columns } from "../columns/studentClasses-columns";

interface TableProps {
  dataPromise: ReturnType<typeof getStudentClassesData>;
}

export default function StudentClassesTable({ dataPromise }: TableProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const tableColumns = React.useMemo(() => columns(isDesktop), []);
  const data = React.use(dataPromise);

  const filterFields: DataTableFilterField<StudentClasses>[] = [
    {
      label: "Name",
      value: "teacherName",
      placeholder: "Search by name",
    },
    {
      label: "Status",
      value: "available",
      options: [
        {
          label: "Available",
          value: "true",
        },
        {
          label: "Not Available",
          value: "false",
        },
      ],
    },
  ];
  const { table } = useDataTable({
    data: data.tableData,
    columns: tableColumns,
    filterFields,
  });

  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-full space-y-2.5 overflow-auto">
      {isDesktop ? (
        <>
          <DataTableToolbar table={table} filterFields={filterFields}>
            <h2>{data.currentClass}</h2>
          </DataTableToolbar>
          <DataTable table={table} />
        </>
      ) : (
        <>
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button variant="outline" size="lg" className="text-3xl">
                View Classes
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DataTableToolbar table={table} filterFields={filterFields}>
                  <h2>{data.currentClass}</h2>
                </DataTableToolbar>
              </DrawerHeader>
              <Separator />
              <ScrollArea className="h-72 whitespace-nowrap p-4">
                <DataTable table={table} />
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </div>
  );
}
