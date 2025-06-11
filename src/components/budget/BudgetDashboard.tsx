'use client';

import { useBudget } from '@/contexts/BudgetContext';
import { BudgetTable } from './BudgetTable';

export function BudgetDashboard() {
  const { state } = useBudget();
  const { currentBudget } = state;

  return (
    <div className="space-y-6">
      {currentBudget.categories.map((category) => (
        <BudgetTable key={category.id} category={category} />
      ))}
    </div>
  );
}