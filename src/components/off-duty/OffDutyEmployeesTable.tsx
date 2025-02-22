"use client";
import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Employee } from "@/types/type";

export default function OffDutyEmployeesTable() {
  const [data, setData] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/off-duty-employees")
      .then((res) => res.json())
      .then((data) => {
        setData(data.employees);
        setLoading(false);
      });
  }, []);

  return (
    <div className="border rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-semibold mb-4">Off-Duty Employees</h2>
      <DataTable columns={columns} data={data} loading={loading} />
    </div>
  );
}