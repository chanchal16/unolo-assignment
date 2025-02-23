import Nav from "@/components/Nav";
import Tab from "@/components/Tab";
import DailyHoursChart from "@/components/daily-hours/DailyHoursChart";
import EmployeeList from "@/components/employee-list/EmployeeList";
import ExpenseChart from "@/components/expenses/ExpenseChart";
import Metrics from "@/components/metrics/Metrics";
import OffDutyEmployeesTable from "@/components/off-duty/OffDutyEmployeesTable";
import StatusCard from "@/components/status/StatusCard";
import TaskStatusChart from "@/components/task-status/TaskStatusChart";
import TeamAttendance from "@/components/team-attendance/TeamAttendance";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} w-full px-4 min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <Nav />
      <Tab />
      <StatusCard />
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 my-3">
        <div>
          <EmployeeList />
        </div>
        <div className="grid gap-4">
          <TeamAttendance />
          <OffDutyEmployeesTable />
        </div>
      </section>
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 my-3">
        <Metrics />
        <ExpenseChart />
      </section>
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 my-3">
        <DailyHoursChart />
        <TaskStatusChart />
      </section>
      
    </div>
  );
}