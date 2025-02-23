import { ExpenseData } from "@/types/type";
import { NextApiRequest, NextApiResponse } from "next";

// Mock Expense Data
const generateMockExpenses = () => {
  return {
    totalExpenses: Math.random() * 5000 + 1000,
    pendingExpenses: Math.random() * 2000,
    approvedExpenses: Math.random() * 2000,
    rejectedExpenses: Math.random() * 1000,
    paidOut: Math.random() * 1500,
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponse<{expenses:ExpenseData[]}>) {
  const expenses:ExpenseData[] = [
    {
        name:'Total Expenses',
        value: generateMockExpenses().totalExpenses,
        color:'#8b5cf6'
    },
    {
        name:'Pending',
        value: generateMockExpenses().pendingExpenses,
        color:'#f59e0b'
    },
    {
        name:'Approved',
        value: generateMockExpenses().approvedExpenses,
        color:'#84cc16',
    },
    {
        name:'Rejected',
        value: generateMockExpenses().rejectedExpenses,
        color:'#6b7280',
    },
    {
        name: 'Paid out',
        value: generateMockExpenses().paidOut,
        color:'#06b6d4'
    }
  ] ;
  
  res.status(200).json({ expenses });
}
