"use client";
import { teamAttendance } from "@/types/type";
import React, { useEffect, useState } from "react";
import { Progress } from "../ui/progress";
import { Skeleton } from "../ui/skeleton";

const TeamAttendance = () => {
  const [teams, setTeams] = useState<teamAttendance[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/attendance");
        const data = await res.json();
        setTeams(data.attendanceData);
      } catch (error) {
        console.error("Failed to fetch status data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="shadow-md rounded-xl p-3 overflow-auto ">
      {!teams.length && <Skeleton className="w-full h-full rounded-xl" />}
      {!!teams.length && (
        <>
          <h3 className="text-base font-semibold mb-2">Teamwise Attendance</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b text-sm">
                <th className="text-left py-2 px-2 font-medium text-gray-600">
                  Team
                </th>
                <th className="text-center py-2 px-2 font-medium text-gray-600">
                  Present
                </th>
                <th className="text-center py-2 px-2 font-medium text-gray-600">
                  Absent
                </th>
                <th className="text-center py-2 px-2 font-medium text-gray-600">
                  Total
                </th>
                <th className="text-center py-2 px-2 font-medium text-gray-600">
                  Attendance Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr key={team.team} className="text-sm">
                  <td className="py-2 px-2">{team.team}</td>
                  <td className="text-center py-2 px-4">
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded">
                      {team.present}
                    </span>
                  </td>
                  <td className="text-center py-2 px-2">
                    <span className="px-2 py-1 bg-red-50 text-red-700 rounded">
                      {team.absent}
                    </span>
                  </td>
                  <td className="text-center py-2 px-2">{team.total}</td>
                  <td className="text-center flex items-center gap-1 py-2 px-2">
                    <Progress value={team?.attendanceRate} />
                    <span className="text-sm text-gray-600">
                      {team?.attendanceRate}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default TeamAttendance;