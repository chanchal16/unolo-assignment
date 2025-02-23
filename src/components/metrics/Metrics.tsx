import { MetricCardProps } from "@/types/type";
import React, { useEffect, useState } from "react";
import MetricCard from "./MetricCard";
import { Skeleton } from "../ui/skeleton";

const Metrics = () => {
  const [metrics, setMetrics] = useState<MetricCardProps[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/metrics");
        const data = await res.json();
        setMetrics(data.metrics);
      } catch (error) {
        console.error("Failed to fetch status data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl">
      {!metrics.length && <Skeleton className="w-full h-full rounded-xl" />}
      {metrics?.map((metric) => (
        <MetricCard key={metric.id} {...metric} />
      ))}
    </div>
  );
};

export default Metrics;
