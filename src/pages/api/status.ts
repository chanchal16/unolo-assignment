import { AttendanceStatus, Metrics } from "@/types/type";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ statusData: AttendanceStatus[]; metrics: Metrics }>
) {
  // Mock real-time attendance data
  const statusData: AttendanceStatus[] = [
    { name: "Punched In", value: Math.floor(Math.random() * 50) + 10 },
    { name: "Punched Out", value: Math.floor(Math.random() * 50) + 10 },
  ];

  // Total employees calculation
  const totalEmployees = statusData.reduce((sum, item) => sum + item.value, 0);

  const inactiveData = Array.from({ length: 8 }, (_, i) => {
    const hour = 9 + i;
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour > 12 ? hour - 12 : hour; // Convert 13+ to 1PM, 2PM, etc.
    return {
      time: `${displayHour}${period}`,
      count: Math.floor(Math.random() * 20) + 5, // Random count between 5 and 25
    };
  });

  // Sum up all inactive users
  const inactive = inactiveData.reduce((sum, item) => sum + item.count, 0);

  // Staffing strength (randomized for demonstration)
  const requiredStrength = Math.floor(Math.random() * 100) + 50; // Required: 50-150
  const currentStrength = totalEmployees - inactive; // Active employees
  const coverage =
    ((currentStrength / requiredStrength) * 100).toFixed(2) + "%"; // Coverage percentage

  // Metrics data
  const metrics: Metrics = {
    totalEmployees,
    presentToday: statusData.find((d) => d.name === "Punched In")?.value ?? 0,
    absentToday: statusData.find((d) => d.name === "Punched Out")?.value ?? 0,
    inactive,
    inactiveData,
    staffingStrength: {
      current: currentStrength,
      required: requiredStrength,
      coverage,
    },
  };

  res.status(200).json({ statusData, metrics });
}