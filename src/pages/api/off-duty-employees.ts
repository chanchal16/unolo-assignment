import { Employee } from "@/types/type";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const offDutyEmployees: Employee[] = [
    {
      id: 1,
      name: "John Doe",
      team: "default",
      role: "Software Engineer",
      reason: "Sick Leave",
    },
    {
      id: 2,
      name: "Michael Brown",
      team: "Bond",
      role: "Team Lead",
      reason: "Personal Leave",
    },
    {
      id: 3,
      name: "Emily Johnson",
      team: "Om Bhagwan",
      role: "Sr. Software Developer",
      reason: "Conference",
    },
  ];

  res.status(200).json({ employees: offDutyEmployees });
}