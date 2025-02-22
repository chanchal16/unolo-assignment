import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type SidebarItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  tooltip: string;
};

export type TabItem = {
  label: string;
  icon: ReactNode;
};

// status chart
export type AttendanceStatus = {
  name: string;
  value: number;
};

export type InactiveData = {
  time: string;
  count: number;
};

export type Metrics = {
  totalEmployees: number;
  presentToday: number;
  absentToday: number;
  inactive: number;
  inactiveData: InactiveData[];
  staffingStrength: {
    current: number;
    required: number;
    coverage: string;
  };
};
