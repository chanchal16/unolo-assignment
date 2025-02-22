import { EmployeeDetail, Status } from "@/types/type";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ employees: EmployeeDetail[] }>
) {
  const employees: EmployeeDetail[] = [
    {
      id: 1,
      initials: "KV",
      name: "Kumar Viswas",
      status: Status["never"],
      location: "NA",
      timestamp: null,
      source: null,
    },
    {
      id: 2,
      initials: "MT",
      name: "Mayur Tyagi",
      status: Status["punchedin"],
      location:
        "514 The Palm Springs Plaza, Golf Course Rd, DLF Phase 5, Sector 54",
      timestamp: "7 hours ago",
      source: "Unolo",
    },
    {
      id: 3,
      initials: "MB",
      name: "Mohan Bishnoi",
      status: Status["punchedout"],
      location: "Vikas Marg, South City II, Sector 49, Gurugram",
      timestamp: "2 months ago",
      source: null,
    },
    {
      id: 4,
      initials: "OB",
      name: "OM BHAGWAN",
      status: Status["punchedin"],
      location:
        "514 The Palm Springs Plaza, Golf Course Rd, DLF Phase 5, Sector 54",
      timestamp: "7 hours ago",
      source: "Unolo",
    },
  ];
  res.status(200).json({ employees });
}