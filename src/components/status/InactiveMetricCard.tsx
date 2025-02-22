import React from "react";
import { UserMinus, Clock4 } from "lucide-react";
import { LineChart } from "../LineChart";
import { Metrics } from "@/types/type";

const InactiveMetricCard = ({ metrics }: { metrics: Metrics | null }) => {
  return (
    <div className="shadow-md flex flex-1 flex-col gap-2 p-2 rounded-xl">
      <div className="flex flex-row gap-1 items-center">
        <UserMinus size={15} className="text-amber-500" />
        <p className="text-base font-medium">Inactive Users</p>
      </div>
      <div className="flex self-center items-center gap-2 bg-amber-50 text-amber-700 px-2 py-1 rounded-md">
        <Clock4 className="h-4 w-4 text-amber-500" />
        <span className="text-sm w-max font-medium">
          {metrics?.inactive} Employees
        </span>
      </div>

      <LineChart
        className="h-48"
        data={metrics?.inactiveData || []}
        index="time"
        categories={["count"]}
        showGridLines={false}
        colors={["amber"]}
      />
    </div>
  );
};

export default InactiveMetricCard;