'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useBudget } from '@/contexts/BudgetContext';
import { generateChartData } from '@/lib/budgetHelpers';

export function MonthlyTrendChart() {
  const { state } = useBudget();
  const chartData = generateChartData(state.currentBudget.categories);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Surplus Trend</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData.monthlyTrend}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Surplus']} />
          <Line 
            type="monotone" 
            dataKey="surplus" 
            stroke="#10b981" 
            strokeWidth={3} 
            dot={{ fill: '#10b981', r: 6 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}