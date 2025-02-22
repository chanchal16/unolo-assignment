import Nav from "@/components/Nav";
import Tab from "@/components/Tab";
import OffDutyEmployeesTable from "@/components/off-duty/OffDutyEmployeesTable";
import StatusCard from "@/components/status/StatusCard";
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
      <TeamAttendance />
      <OffDutyEmployeesTable />
      <h1>main page</h1>
    </div>
  );
}