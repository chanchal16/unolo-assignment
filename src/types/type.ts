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

// teamwise attendance
export type teamAttendance = {
  team:string;
  present: number;
  absent: number;
  total: number;
  attendanceRate?: number;
}

// off duty employee
export type Employee = {
  id: number;
  name: string;
  team: string;
  role: string;
  reason: string;
};