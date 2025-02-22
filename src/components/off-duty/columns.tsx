"use client";
import { Employee } from "@/types/type";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "name",
    header: "Employee Name",
  },
  {
    accessorKey: "team",
    header: "Team",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "reason",
    header: "Reason",
  },
];
