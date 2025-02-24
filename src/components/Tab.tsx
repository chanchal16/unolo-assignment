import React from "react";
import {
  PanelsTopLeft,
  History,
  MapPin,
  LayoutPanelTop,
  Info,
  MapPinCheckInside,
} from "lucide-react";
import { TabItem } from "@/types/type";

const tabItems: TabItem[] = [
  {
    label: "Overview",
    icon: <PanelsTopLeft className="h-3 w-3 sm:h-3.5 sm:w-3.5" />,
  },
  {
    label: "Live Location",
    icon: <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />,
  },
  {
    label: "Timeline",
    icon: <History className="h-3 w-3 sm:h-3.5 sm:w-3.5" />,
  },
  {
    label: "Card View",
    icon: <LayoutPanelTop className="h-3 w-3 sm:h-3.5 sm:w-3.5" />,
  },
  {
    label: "Compliance Status",
    icon: <Info className="h-3 w-3 sm:h-3.5 sm:w-3.5" />,
  },
  {
    label: "Site Attendance",
    icon: <MapPinCheckInside className="h-3 w-3 sm:h-3.5 sm:w-3.5" />,
  },
];

const Tab = () => {
  return (
    <div className={`flex gap-6 overflow-auto border-b-2 border-gray-100 `}>
      {tabItems.map((tabItem) => (
        <button
          key={tabItem.label}
          className={`flex text-xs sm:text-sm items-center gap-1 px-1 pb-1 ${
            tabItem.label === "Overview"
              ? "text-indigo-500 border-b-2 border-indigo-500"
              : "text-gray-500"
          }`}
        >
          {tabItem.icon} {tabItem.label}
        </button>
      ))}
    </div>
  );
};

export default Tab;