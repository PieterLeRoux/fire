'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useBudget } from '@/contexts/BudgetContext';
import { generateChartData } from '@/lib/budgetHelpers';

export function CashFlowChart() {
  const { state } = useBudget();
  const chartData = generateChartData(state.currentBudget.categories);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Cash Flow</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData.cashFlow} layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="category" type="category" width={80} />
          <Tooltip formatter={(value) => [`$${Math.abs(Number(value)).toLocaleString()}`, 'Amount']} />
          <Bar dataKey="amount">
            {chartData.cashFlow.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}