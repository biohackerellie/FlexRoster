"use client";

import type { DataTableFilterField } from "@/hooks/types";
import type { SecretaryTable } from "@/lib/types";
import * as React from "react";

import { DataTable } from "@local/ui/data-table-students";
import { DataTableToolbar } from "@local/ui/data-table-toolbar";

import type { getRosters } from "./queries";
import { useDataTable } from "@/hooks/useDataTable";
import { statusOptions } from "@/lib/constants";
import { columns } from "./roster-columns";

interface TableProps {
  dataPromise: ReturnType<typeof getRosters>;
}

export default function AllRosterTable({ dataPromise }: TableProps) {
  const data = React.use(dataPromise);

  const tableColumns = React.useMemo(() => columns(), []);
  const filterFields: DataTableFilterField<SecretaryTable>[] = [
    {
      label: "Name",
      value: "teacherName",
      placeholder: "Search by name",
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
