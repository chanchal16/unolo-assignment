"use client";
import { DonutChart } from "@/components/DonutChart";
import { cn } from "@/lib/utils";
import { AttendanceStatus, Metrics } from "@/types/type";
import { Skeleton } from "../ui/skeleton";

export const StatusChart = ({
  statusData,
  metrics,
}: {
  statusData: AttendanceStatus[];
  metrics: Metrics | null;
}) => {
  return (
    <div className="shadow-md rounded-xl pt-2 px-2 pb-3">
      {!statusData.length  && (<Skeleton className="w-full h-full rounded-xl" />)}
      {!!statusData.length && (<>
        <h3 className="text-base font-medium">Employee Status</h3>
      <span className="py-1 px-2 bg-gray-200 rounded-md text-xs">
        Total: {metrics?.totalEmployees}
      </span>
      <DonutChart
        className="mx-auto"
        data={statusData}
        category="name"
        value="value"
        showLabel={true}
        colors={["emerald", "amber"]}
      />
      <div className="mt-3 flex justify-center gap-8">
        {statusData?.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                item.name === "Punched In" ? "bg-emerald-500" : "bg-amber-500"
              }`}
            />
            <span className="text-xs text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-4">
        {statusData?.map((data, index) => (
          <div
            key={index}
            className={cn(
              `flex flex-col items-center p-2.5 bg-amber-50  rounded-lg`,
              { "bg-emerald-50": data.name === "Punched In" }
            )}
          >
            <span
              className={cn("text-sm", "text-amber-700", {
                "text-emerald-700": data.name === "Punched In",
              })}
            >
              {data.name === "Punched In" ? "Currently Working" : "Off Duty"}
            </span>
            <span
              className={cn("text-xl font-bold text-amber-700", {
                "text-emerald-700": data.name === "Punched In",
              })}
            >
              {data.value}
            </span>
          </div>
        ))}
      </div>
      </>)}
      
    </div>
  );
};