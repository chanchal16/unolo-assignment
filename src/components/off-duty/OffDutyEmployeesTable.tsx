"use client";
import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Employee } from "@/types/type";

export default function OffDutyEmployeesTable() {
  const [data, setData] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/off-duty-employees");
        const data = await res.json();
        setData(data.employees);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch status data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="border rounded-xl shadow-md p-3">
      {!loading && (
        <>
          <h2 className="text-base font-semibold mb-2">Off-Duty Employees</h2>
          <DataTable columns={columns} data={data} loading={loading} />
        </>
      )}
    </div>
  );
}