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
    icon: <PanelsTopLeft size={14} />,
  },
  {
    label: "Live Location",
    icon: <MapPin size={14} />,
  },
  {
    label: "Timeline",
    icon: <History size={14} />,
  },
  {
    label: "Card View",
    icon: <LayoutPanelTop size={14} />,
  },
  {
    label: "Compliance Status",
    icon: <Info size={14} />,
  },
  {
    label: "Site Attendance",
    icon: <MapPinCheckInside size={14} />,
  },
];

const Tab = () => {
  return (
    <div className={`flex gap-6 border-b-2 border-gray-100 `}>
      {tabItems.map((tabItem) => (
        <button
          key={tabItem.label}
          className={`flex text-sm items-center gap-1 px-1 pb-1 ${
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