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
  team: string;
  present: number;
  absent: number;
  total: number;
  attendanceRate?: number;
};

// off duty employee
export type Employee = {
  id: number;
  name: string;
  team: string;
  role: string;
  reason: string;
};

// employee list
export enum Status {
  never = "never-marked",
  punchedin = "punched-in",
  punchedout = "punched-out",
}

export type EmployeeDetail = {
  id: number;
  initials: string;
  name: string;
  status: Status;
  location: string;
  timestamp: string | null;
  source: string | null;
  timeAgo: string | null;
};

export interface MetricCardProps {
  id: string;
  label: string;
  icon: string;
  value: number;
  yesterday: number;
  trend: number[];
  color: {
    bgLight: string;
    lineColor: string;
  };
}
export interface ExpenseData {
  name: string;
  value: number;
  color: string;
}
export interface DailyHourData {
  date: string;
  hours: string;
}