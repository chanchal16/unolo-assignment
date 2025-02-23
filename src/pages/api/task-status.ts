import { NextApiRequest, NextApiResponse } from "next";

// Mock task status data
const getTaskStatusData = () => {
  return {
    total: 10,
    notStarted: Math.floor(Math.random() * 3),
    delayed: Math.floor(Math.random() * 3),
    inProgress: Math.floor(Math.random() * 3),
    completed: Math.floor(Math.random() * 4),
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const taskStatus = getTaskStatusData();
  res.status(200).json(taskStatus);
}
