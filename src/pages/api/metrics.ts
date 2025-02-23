// pages/api/metrics.ts
import { NextApiRequest, NextApiResponse } from "next";
import { MetricCardProps } from "@/types/type";

export default function handler(req: NextApiRequest, res: NextApiResponse<{ metrics: MetricCardProps[] }>) {
  const metrics:MetricCardProps[] = [
    {
      id: "forms_filled",
      label: "Forms Filled",
      icon: "FileText",
      value: Math.floor(Math.random() * 10),
      yesterday: Math.floor(Math.random() * 10),
      trend: Array.from({ length: 7 }, () => Math.floor(Math.random() * 10)),
      color: {
        bgLight: 'bg-blue-50',
        lineColor: '#3B82F6'
      }
    },
    {
      id: "photos_uploaded",
      label: "Photos Uploaded",
      icon: "Camera",
      value: Math.floor(Math.random() * 10),
      yesterday: Math.floor(Math.random() * 10),
      trend: Array.from({ length: 7 }, () => Math.floor(Math.random() * 10)),
      color: {
        bgLight: 'bg-emerald-50',
        lineColor: '#10B981'
      }
    },
    {
      id: "new_clients",
      label: "New Clients",
      icon: "Users",
      value: Math.floor(Math.random() * 5),
      yesterday: Math.floor(Math.random() * 5),
      trend: Array.from({ length: 7 }, () => Math.floor(Math.random() * 5)),
      color: {
        bgLight: 'bg-purple-50',
        lineColor: '#8B5CF6'
      }
    },
    {
      id: "orders_submitted",
      label: "Orders Submitted",
      icon: "ShoppingBag",
      value: Math.floor(Math.random() * 5),
      yesterday: Math.floor(Math.random() * 5),
      trend: Array.from({ length: 7 }, () => Math.floor(Math.random() * 5)),
      color: {
        bgLight: 'bg-amber-50',
        lineColor: '#F59E0B'
      }
    },
  ];

  res.status(200).json({metrics});
}