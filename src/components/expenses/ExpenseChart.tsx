import { ExpenseData } from "@/types/type";
import React, { useEffect, useState } from "react";
import { DonutChart } from "../DonutChart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "../ui/skeleton";

const ExpenseChart = () => {
  const [expenses, setExpenses] = useState<ExpenseData[]>([]);
  const [selectedRange, setSelectedRange] = useState("This Month");

  async function fetchData() {
    try {
      const res = await fetch("/api/expenses");
      const data = await res.json();
      setExpenses(data.expenses);
    } catch (error) {
      console.error("Failed to fetch status data:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [selectedRange]);

  return (
    <div className="p-4 shadow-md rounded-xl">
      {!expenses.length && <Skeleton className="w-full h-full rounded-xl" />}
      {!!expenses.length && (
        <>
          <div className="flex justify-between items-center ">
            <h3 className="text-base font-medium">Expense Overview</h3>
            <Select
              defaultValue="This Month"
              value={selectedRange}
              onValueChange={setSelectedRange}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="This Month">This Month</SelectItem>
                <SelectItem value="Last Month">Last Month</SelectItem>
                <SelectItem value="This Year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="!m-auto flex flex-col items-center justify-center">
            <div className="bg-gray-50 rounded-md p-1">
              <span className="text-sm mr-1 ">Total:</span>
              <span className="text-sm font-medium">
                ₹{expenses[0]?.value.toFixed(3)}
              </span>
            </div>

            <DonutChart
              data={expenses}
              variant="pie"
              category="name"
              value="value"
              colors={["violet", "amber", "lime", "gray", "cyan"]}
              valueFormatter={(value: number) => `₹${value.toFixed(2)}`}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-3">
            {expenses?.slice(1).map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-gray-50"
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex-1">
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">
                    ₹{item.value.toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ExpenseChart;