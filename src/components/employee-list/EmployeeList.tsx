import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Search, Filter, MapPin, Clock } from "lucide-react";
import { EmployeeDetail, Status } from "@/types/type";

const EmployeeList = () => {
  const [employees, setEmployees] = useState<EmployeeDetail[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredEmployees, setFilteredEmployees] = useState<EmployeeDetail[]>(
    []
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/employees");
        const data = await res.json();
        setEmployees(data.employees);
        setFilteredEmployees(data.employees);
      } catch (error) {
        console.error("Failed to fetch status data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = employees.filter(
        (employee) =>
          employee.name.toLowerCase().includes(lowerCaseQuery) ||
          employee.location.toLowerCase().includes(lowerCaseQuery) ||
          employee.status.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredEmployees(filtered);
    }, 300); // 300ms debounce delay

    return () => clearTimeout(debounceTimer); // Cleanup timer on unmount or query change
  }, [searchQuery, employees]);

  const getStatusBadge = (status: Status) => {
    const statusConfig: any = {
      "punched-in": {
        class: "bg-emerald-50 px-1 text-emerald-700",
        text: "Punched In",
      },
      "punched-out": {
        class: "bg-amber-50 px-1 text-amber-700",
        text: "Punched Out",
      },
      "never-marked": {
        class: "bg-gray-50 px-1 text-gray-700",
        text: "Never Marked",
      },
    };
    return statusConfig[status];
  };
  return (
    <section className=" rounded-xl shadow-md p-3 h-[600px] overflow-auto scrollbar">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className="text-base font-medium">Employees</p>
          <span className="text-sm text-gray-100 rounded-lg p-1">
            {filteredEmployees.length}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-white rounded-md border px-3 py-1">
            <span className="text-sm text-gray-500">All</span>
            <Filter className="h-4 w-4 text-gray-400" />
          </div>
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search employees..."
              className="pl-9 w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* employee list */}
      <div className="space-y-4 mt-4">
        {filteredEmployees.map((employee) => (
          <div
            key={employee.id}
            className="flex items-center gap-4 p-4 rounded-lg border hover:bg-gray-50 transition-colors"
          >
            {/* Avatar */}
            <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">
                {employee.initials}
              </span>
            </div>

            {/* Employee Info */}
            <div className="flex-grow min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-gray-900">{employee.name}</h3>
                <span className={getStatusBadge(employee.status).class}>
                  {getStatusBadge(employee.status).text}
                </span>
              </div>

              {/* Location */}
              {employee.location !== "NA" && (
                <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
                  <MapPin className="h-3 w-3" />
                  <span className="truncate">{employee.location}</span>
                </div>
              )}

              {/* Timestamp */}
              {employee.timeAgo && (
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                  <Clock className="h-3 w-3" />
                  <span>{employee.timeAgo}</span>
                  {employee.source && (
                    <>
                      <span className="text-gray-300">•</span>
                      <span>From: {employee.source}</span>
                    </>
                  )}
                  {employee.timestamp && (
                    <>
                      <span className="text-gray-300">•</span>
                      <span>{employee.timestamp}</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmployeeList;