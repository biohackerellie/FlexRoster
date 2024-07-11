"use client";

import type { DataTableFilterField } from "@/hooks/types";
import type { TeacherTable } from "@/lib/types";
import * as React from "react";

import { DataTable } from "@local/ui/data-table-students";
import { DataTableToolbar } from "@local/ui/data-table-toolbar";

import type { getDefaultRoster } from "../logic/queries";
import { useDataTable } from "@/hooks/useDataTable";
import { statusOptions } from "@/lib/constants";
import { columns } from "../columns/teacherRoster-columns";
import { ToolbarActions } from "../toolbarActions";

interface TableProps {
  dataPromise: ReturnType<typeof getDefaultRoster>;
  authorized: boolean;
}

export default function TeacherRosterTable({
  dataPromise,
  authorized,
}: TableProps) {
  "use no memo";
  const tableColumns = React.useMemo(() => columns(), []);

  const data = React.use(dataPromise);
  const teacherId = data[0]?.teacherId ?? "";
  const comment = data[0]?.comment ?? null;
  const status = data[0]?.available!;
  const classroomId = data[0]?.classroomId ?? "";
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
      <DataTableToolbar table={table} filterFields={filterFields}>
        {authorized && (
          <ToolbarActions
            teacherId={teacherId}
            comment={comment}
            table={table}
            currentStatus={status}
            classroomId={classroomId}
          />
        )}
      </DataTableToolbar>
      <DataTable table={table} />
    </div>
  );
}
