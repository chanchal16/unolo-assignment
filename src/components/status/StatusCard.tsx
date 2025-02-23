"use client";
import React, { useState, useEffect } from "react";
import { AttendanceStatus, Metrics } from "@/types/type";
import { StatusChart } from "./StatusChart";
import StaffingStrength from "./StaffingStrength";
import InactiveMetricCard from "./InactiveMetricCard";

const StatusCard = () => {
  const [statusData, setStatusData] = useState<AttendanceStatus[]>([]);
  const [metrics, setMetrics] = useState<Metrics | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/status");
        const data = await res.json();
        setStatusData(data.statusData);
        setMetrics(data.metrics);
      } catch (error) {
        console.error("Failed to fetch status data:", error);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval); 
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  p-2 gap-5">
      <StatusChart statusData={statusData} metrics={metrics} />
      <InactiveMetricCard metrics={metrics} />
      <StaffingStrength staffingStrength={metrics?.staffingStrength} />
    </div>
  );
};

export default StatusCard;