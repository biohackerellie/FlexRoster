/** eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import type { DataTableFilterField } from "@/hooks/types";
import type { TeacherTable } from "@/lib/types";
import * as React from "react";

import { DataTable } from "@local/ui/data-table-students";
import { DataTableToolbar } from "@local/ui/data-table-toolbar";

import type { getDefaultRoster } from "../logic/queries";
import { useDataTable } from "@/hooks/useDataTable";
import { statusOptions } from "@/lib/constants";
import { ClassroomContext } from "../../staff/[id]/context";
import { columns } from "../columns/teacherRoster-columns";
import EditClassroomForm from "../editClassroomForm";
import { ToolbarActions } from "../toolbarActions";

interface TableProps {
  teacherId: string;
  dataPromise: ReturnType<typeof getDefaultRoster>;
}

export default function TeacherRosterTable({
  dataPromise,

  teacherId,
}: TableProps) {
  "use no memo";
  const tableColumns = React.useMemo(() => columns(), []);
  const classroom = React.use(ClassroomContext) ?? null;
  const data = React.use(dataPromise);

  const comment = classroom?.comment;
  const status = classroom?.available;
  const classroomId = classroom?.classroomId;
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
    defaultSortBy: "lastName",
  });
  if (classroom === null) {
    return <EditClassroomForm userId={teacherId} />;
  } else {
    return (
      <div className="w-full space-y-2.5 overflow-auto">
        <DataTableToolbar table={table} filterFields={filterFields}>
          {classroom.authorized && (
            <ToolbarActions
              teacherId={teacherId}
              comment={comment ?? null}
              table={table}
              currentStatus={status ?? false}
              classroomId={classroomId ?? ""}
            />
          )}
        </DataTableToolbar>
        <DataTable table={table} />
      </div>
    );
  }
}
