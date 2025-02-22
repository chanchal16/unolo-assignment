import React from "react";
import { UsersRound } from "lucide-react";
import { Metrics } from "@/types/type";

const StaffingStrength = ({
  staffingStrength,
}: {
  staffingStrength: Metrics["staffingStrength"] | undefined;
}) => {
  const numericCoverage = parseFloat(
    (staffingStrength?.coverage ?? "0")?.replace(/[%+-]/g, "")
  );
  return (
    <div className="shadow-md relative flex flex-col gap-4 p-2 rounded-xl">
      <div className="flex flex-row gap-1 items-center justify-center">
        <UsersRound size={15} className="text-blue-500 " />
        <p className="text-base font-medium">Staffing strength</p>
      </div>
      <h3 className="font-semibold text-blue-500 text-2xl text-center">
        {staffingStrength?.coverage}
      </h3>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col space-y-2 p-4 bg-blue-50 rounded-lg">
          <span className="text-sm text-blue-600">Current Strength</span>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-blue-700">
              {staffingStrength?.current ?? 0}
            </span>
            <span className="text-sm text-blue-600 mb-1">employees</span>
          </div>
        </div>
        <div className="flex flex-col space-y-2 p-4 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-600">Required Strength</span>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-gray-700">
              {staffingStrength?.required ?? 0}
            </span>
            <span className="text-sm text-gray-600 mb-1">employees</span>
          </div>
        </div>
      </div>

      <div className="mt-6 w-[95%] absolute bottom-2 flex items-center gap-2 justify-between px-4 py-3 bg-gray-50 rounded-lg">
        <span className="text-sm text-gray-600">Strength Coverage</span>
        <div className="flex items-center  gap-2">
          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${numericCoverage}%` }}
            />
          </div>
          <span className="text-sm font-medium text-blue-600">
            {staffingStrength?.coverage}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default StaffingStrength;