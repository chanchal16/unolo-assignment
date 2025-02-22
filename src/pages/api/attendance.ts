import { teamAttendance } from "@/types/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ attendanceData: teamAttendance[] }>
) {
  const attendanceData: teamAttendance[] = [
    {
      team: "Bond",
      present: 0,
      absent: 1,
      total: 1,
    },
    {
      team: "Default",
      present: 2,
      absent: 5,
      total: 7,
    },
    {
      team: "Om Bhagwan",
      present: 1,
      absent: 0,
      total: 1,
    },
  ]?.map((team) => ({
    team: team.team,
    present: team.present,
    absent: team.absent,
    total: team.total,
    attendanceRate: Math.round(
      (team.present / (team.present + team.absent)) * 100
    ),
  }));
  res.status(200).json({ attendanceData });
}