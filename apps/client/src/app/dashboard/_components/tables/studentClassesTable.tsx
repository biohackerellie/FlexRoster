"use client";

import type { DataTableFilterField } from "@/hooks/types";
import * as React from "react";

import type { StudentClasses } from "@local/validators";
import { DataTable } from "@local/ui/data-table-students";
import { DataTableToolbar } from "@local/ui/data-table-toolbar";

import type { getStudentClassesData } from "../logic/queries";
import { useDataTable } from "@/hooks/useDataTable";
import { studentStatusOptions } from "@/lib/constants";
import { columns } from "../columns/studentClasses-columns";

interface TableProps {
  dataPromise: ReturnType<typeof getStudentClassesData>;
}

export default function StudentClassesTable({ dataPromise }: TableProps) {
  const tableColumns = React.useMemo(() => columns(), []);
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
  return (
    <div className="w-full space-y-2.5 overflow-auto">
      <DataTableToolbar table={table} filterFields={filterFields}>
        <h2>{data.currentClass}</h2>
      </DataTableToolbar>
      <DataTable table={table} />
    </div>
  );
}
