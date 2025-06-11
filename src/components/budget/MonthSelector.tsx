'use client';

import { useBudget } from '@/contexts/BudgetContext';

const MONTH_OPTIONS = [
  'January 2025',
  'February 2025', 
  'March 2025',
  'April 2025',
  'May 2025',
  'June 2025',
  'July 2025',
  'August 2025',
  'September 2025',
  'October 2025',
  'November 2025',
  'December 2025'
];

export function MonthSelector() {
  const { state, setSelectedMonth } = useBudget();

  return (
    <select 
      value={state.selectedMonth}
      onChange={(e) => setSelectedMonth(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
    >
      {MONTH_OPTIONS.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  );
}