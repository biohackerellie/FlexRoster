import type { Column } from "@tanstack/react-table";
import { Header } from "@tanstack/react-table";
import { ArrowDownIcon, ArrowUpDown, ArrowUpIcon, EyeOff } from "lucide-react";

import { cn } from ".";
import { Button } from "./button";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  "use no memo";
  if (!column.getCanSort()) {
    return (
      <div
        className={cn(
          "flex items-center space-x-2 text-sm sm:text-lg",
          className,
        )}
      >
        {title}
      </div>
    );
  }

  return (
    <div
      className={cn(
        `items-center text-sm sm:flex sm:space-x-2 sm:text-lg`,
        className,
      )}
    >
      <Button
        variant="ghost"
        size="sm"
        className="-ml-3 h-8 text-sm data-[state=open]:bg-accent sm:text-lg"
        onClick={() => {
          column.toggleSorting();
        }}
      >
        <span>{title}</span>
        {column.getIsSorted() === "desc" ? (
          <ArrowDownIcon className="ml-2 h-4 w-4" />
        ) : column.getIsSorted() === "asc" ? (
          <ArrowUpIcon className="ml-2 h-4 w-4" />
        ) : (
          <ArrowUpDown className="ml-2 h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
