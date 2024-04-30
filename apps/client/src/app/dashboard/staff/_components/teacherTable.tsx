"use client";

import type { DataTableFilterField } from "@/hooks/types";
import type { TeacherTable } from "@/lib/types";
import * as React from "react";

import { DataTable } from "@local/ui/data-table-students";
import { DataTableToolbar } from "@local/ui/data-table-toolbar";

import type { getDefaultRoster } from "./queries";
import { useDataTable } from "@/hooks/useDataTable";
import { statusOptions } from "@/lib/constants";
import { columns } from "./teacherRoster-columns";

interface TableProps {
  dataPromise: ReturnType<typeof getDefaultRoster>;
}

export default function TeacherRosterTable({ dataPromise }: TableProps) {
  const tableColumns = React.useMemo(() => columns(), []);
  const data = React.use(dataPromise);

  const filterFields: DataTableFilterField<TeacherTable>[] = [
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
