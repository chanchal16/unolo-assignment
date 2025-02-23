import { MetricCardProps } from "@/types/type";
import React from "react";
import {
  FileText,
  Camera,
  Users,
  ShoppingBag,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const iconMap = {
  FileText: <FileText className="h-6 w-6 text-blue-500" />,
  Camera: <Camera className="h-6 w-6 text-emerald-500" />,
  Users: <Users className="h-6 w-6 text-purple-500" />,
  ShoppingBag: <ShoppingBag className="h-6 w-6 text-amber-500" />,
};

const MetricCard = ({
  label,
  value,
  yesterday,
  icon,
  trend,
  color,
}: MetricCardProps) => {
  const percentageChange =
    yesterday === 0 ? 100 : ((value - yesterday) / yesterday) * 100;
  const trendData = trend.map((y, i) => ({ day: `Day ${i + 1}`, value: y }));
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  return (
    <div className="p-4 space-y-2 shadow-md">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${color.bgLight}`}>
              {IconComponent}
            </div>
            <span className="text-sm text-gray-500">{label}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">{value}</span>
            <div
              className={`flex items-center text-sm ${
                percentageChange >= 0 ? "text-emerald-600" : "text-red-600"
              }`}
            >
              {percentageChange >= 0 ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span>{percentageChange.toFixed(0)}%</span>
            </div>
          </div>
        </div>

        <div className="h-12 w-24">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={color.lineColor}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-4 flex items-center text-sm text-gray-500">
        <span>Yesterday: {yesterday}</span>
      </div>
    </div>
  );
};
export default MetricCard;