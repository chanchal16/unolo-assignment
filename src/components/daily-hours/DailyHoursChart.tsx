import { DailyHourData } from "@/types/type";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart } from "../BarChart";

const DailyHoursChart = () => {
  const [data, setData] = useState<DailyHourData[]>([]);
  const [selectedRange, setSelectedRange] = useState("This Month");

  async function fetchData() {
    try {
      const res = await fetch(`/api/daily-hours?range=${selectedRange}`);
      const data = await res.json();
      setData(data.dailyHours);
    } catch (error) {
      console.error("Failed to fetch status data:", error);
    }
  }
  useEffect(() => {
    fetchData();
    // const interval = setInterval(fetchData, 5000); // Auto-refresh every 5 seconds

    // return () => clearInterval(interval); // Cleanup interval on unmount
  }, [selectedRange]);

  if (!data.length) return <p>Loading...</p>;
  
  return (
    <div className="p-4 shadow-md rounded-xl">
      <div className="flex justify-between items-center ">
        <h3 className="text-base font-medium">Daily Average Working Hours</h3>
        <Select
          defaultValue="This Month"
          value={selectedRange}
          onValueChange={setSelectedRange}
        >
          <SelectTrigger className="">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="This Month">This Month</SelectItem>
            <SelectItem value="Last Month">Last Month</SelectItem>
            <SelectItem value="Last 7 Days">Last 7 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <BarChart
        data={data}
        index="date"
        categories={["hours"]}
        yAxisLabel="Working hours"
        showGridLines={false}
        valueFormatter={(number) => `${number} hrs`}
      />
    </div>
  );
};

export default DailyHoursChart;