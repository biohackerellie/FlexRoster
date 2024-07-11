"use client";

import type { DataTableFilterField } from "@/hooks/types";
import * as React from "react";

import type { StudentClasses } from "@local/utils";
import { Button } from "@local/ui/button";
import { DataTable } from "@local/ui/data-table-students";
import { DataTableToolbar } from "@local/ui/data-table-toolbar";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@local/ui/drawer";
import { ScrollArea, ScrollBar } from "@local/ui/scroll-area";
import { Separator } from "@local/ui/separator";

import type { getStudentClassesData } from "../logic/queries";
import { useDataTable } from "@/hooks/useDataTable";
import useMediaQuery from "@/hooks/useMediaQuery";
import { mColumns } from "../columns/Student-MobileColumns";
import { columns } from "../columns/studentClasses-columns";

interface TableProps {
  dataPromise: ReturnType<typeof getStudentClassesData>;
}

export default function StudentClassesTable({ dataPromise }: TableProps) {
  let tableColumns;
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const desktopColumns = React.useMemo(() => columns(), []);
  const mobileColumns = React.useMemo(() => mColumns(), []);
  switch (isDesktop) {
    case true:
      tableColumns = desktopColumns;
      break;
    case false:
      tableColumns = mobileColumns;
      break;
    default:
      tableColumns = desktopColumns;
      break;
  }

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
              <Button variant="outline" size="lg" className="my-4 text-3xl">
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
              <ScrollArea className="h-96 whitespace-nowrap p-4">
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
