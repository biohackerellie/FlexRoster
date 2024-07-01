"use client";

import type { DataTableFilterField } from "@/hooks/types";
import * as React from "react";

import type { AllStudents } from "@local/utils";
import { DataTable } from "@local/ui/data-table-students";
import { DataTableToolbar } from "@local/ui/data-table-toolbar";

import type { getTableData } from "../logic/queries";
import { useDataTable } from "@/hooks/useDataTable";
import { statusOptions } from "@/lib/constants";
import { columns } from "../columns/students-columns";

interface TableProps {
  dataPromise: ReturnType<typeof getTableData>;
}

export default function AllStudentsTable({ dataPromise }: TableProps) {
  "use no memo";
  const tableColumns = React.useMemo(() => columns(), []);
  const data = React.use(dataPromise);

  const filterFields: DataTableFilterField<AllStudents>[] = [
    {
      label: "Name",
      value: "studentName",
      placeholder: "Search by name",
    },
    {
      label: "Status",
      value: "status",
      options: statusOptions.map((status) => ({
        label: status?.label.toUpperCase(),
        value: status?.value,
        withCount: false,
      })),
    },
  ];
  const { table } = useDataTable({
    data,
    columns: tableColumns,
    filterFields,
  });
  return (
    <div className="w-full space-y-2.5 overflow-auto">
      <DataTableToolbar table={table} filterFields={filterFields} />
      <DataTable table={table} />
    </div>
  );
}
