import { NextApiRequest, NextApiResponse } from "next";

// Generate mock daily working hours
const generateMockDailyHours = (days: number) => {
  const today = new Date();
  return Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - i);
    return {
      date: date.toISOString().split("T")[0], // Format: YYYY-MM-DD
      hours: (Math.random() * 8).toFixed(2), // Random hours between 0 - 8
    };
  }).reverse();
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { range } = req.query;
  let days = 30; // Default: Last 30 days

  if (range === "Last Month") days = 60; // Show last 60 days
  else if (range === "Last 7 Days") days = 7;

  res.status(200).json({ dailyHours: generateMockDailyHours(days) });
}
