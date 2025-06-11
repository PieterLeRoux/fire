import { BudgetCategory, ChartData } from './types';

export function generateChartData(categories: BudgetCategory[]): ChartData {
  // Expense breakdown pie chart data
  const expenseCategory = categories.find(cat => cat.type === 'expense');
  const expenseBreakdown = expenseCategory?.items.map(item => ({
    name: item.name,
    value: item.budgeted,
    color: getExpenseColor(item.name)
  })) || [];

  // Cash flow bar chart data
  const cashFlow = categories.map(category => {
    const total = category.items.reduce((sum, item) => sum + item.budgeted, 0);
    const multiplier = category.type === 'income' ? 1 : -1;
    
    return {
      category: category.name,
      amount: total * multiplier,
      color: getCategoryColor(category.type)
    };
  });

  // Monthly trend line chart data (mock data for now)
  const monthlyTrend = [
    { month: 'Oct', surplus: 150 },
    { month: 'Nov', surplus: -50 },
    { month: 'Dec', surplus: 200 },
    { month: 'Jan', surplus: calculateSurplus(categories) }
  ];

  return {
    expenseBreakdown,
    cashFlow,
    monthlyTrend
  };
}

function calculateSurplus(categories: BudgetCategory[]): number {
  const totals = categories.reduce((acc, category) => {
    const categoryTotal = category.items.reduce((sum, item) => sum + item.budgeted, 0);
    
    switch (category.type) {
      case 'income':
        acc.income += categoryTotal;
        break;
      case 'investment':
        acc.investments += categoryTotal;
        break;
      case 'expense':
        acc.expenses += categoryTotal;
        break;
      case 'debt':
        acc.debt += categoryTotal;
        break;
      case 'spending':
        acc.spending += categoryTotal;
        break;
    }
    
    return acc;
  }, { income: 0, investments: 0, expenses: 0, debt: 0, spending: 0 });

  return totals.income - totals.investments - totals.expenses - totals.debt - totals.spending;
}

function getExpenseColor(itemName: string): string {
  const colorMap: Record<string, string> = {
    'Rent': '#ef4444',
    'Food': '#f97316', 
    'Fuel': '#eab308',
    'Auto Insurance': '#eab308',
    'Subscriptions': '#22c55e',
    'Misia (Pet)': '#06b6d4',
    'Utilities': '#8b5cf6',
    'Miscellaneous': '#6b7280',
    'Business': '#6b7280'
  };
  
  return colorMap[itemName] || '#6b7280';
}

function getCategoryColor(type: string): string {
  const colorMap: Record<string, string> = {
    'income': '#10b981',
    'investment': '#8b5cf6',
    'expense': '#ef4444',
    'debt': '#f59e0b',
    'spending': '#06b6d4'
  };
  
  return colorMap[type] || '#6b7280';
}