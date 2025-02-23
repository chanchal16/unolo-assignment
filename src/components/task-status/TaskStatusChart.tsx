import { TaskStatus } from "@/types/type";
import React, { useEffect, useState } from "react";
import { Tracker } from "../Tracker";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";
const TaskStatusChart = () => {
  const initialState = {
    total: 0,
    notStarted: 0,
    delayed: 0,
    inProgress: 0,
    completed: 0,
  };
  const [taskData, setTaskData] = useState<TaskStatus>(initialState);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/task-status`);
        const data = await res.json();
        setTaskData(data);
      } catch (error) {
        console.error("Failed to fetch status data:", error);
      }
    }
    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  const trackerData = [
    {
      key: "notStarted",
      color: "bg-gray-500",
      tooltip: `Not Started:${taskData?.notStarted} `,
    },
    {
      key: "delayed",
      color: "bg-red-500",
      tooltip: `Delayed: ${taskData?.delayed}`,
    },
    {
      key: "inProgress",
      color: "bg-blue-500",
      tooltip: `In Progress:${taskData?.inProgress}`,
    },
    {
      key: "completed",
      color: "bg-emerald-500",
      tooltip: `Completed: ${taskData?.completed}`,
    },
  ];

  return (
    <div className="p-6  shadow-md rounded-xl">
      {!trackerData.length && <Skeleton className="w-full h-full rounded-xl" />}
      {!!trackerData.length && (
        <>
          <h3 className="text-base font-medium">Task Status Overview</h3>
          <div className="flex h-full flex-col gap-2 justify-center">
            <Tracker className="mt-6" data={trackerData} hoverEffect={true} />
            <div className="bg-gray-100 rounded-sm w-max my-3 p-2 mx-auto">
              Total tasks:{taskData.total}
            </div>
            <div className="flex flex-wrap justify-around mt-4">
              {trackerData.map((item) => (
                <div key={item.key} className="text-center">
                  {taskData && (
                    <div className="flex items-center justify-center gap-1">
                      <div
                        className={cn(
                          "w-3 h-3 ",
                          {
                            "bg-gray-500": item.key === "notStarted",
                          },
                          { "bg-red-500": item.key === "delayed" },
                          { "bg-blue-500": item.key === "inProgress" },
                          { "bg-emerald-500": item.key === "completed" }
                        )}
                      />
                      <p className="text-xl font-medium">
                        {taskData[item.key as keyof TaskStatus]}
                      </p>
                    </div>
                  )}
                  <p className="text-sm text-gray-500">
                    {item.tooltip.split(":")[0]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskStatusChart;