export interface BudgetLineItem {
  id: string;
  name: string;
  budgeted: number;
  actual: number;
  isAutomated: boolean;
  accountId: string;
  categoryId: string;
  responsible: string;
  tags?: string[];
}

export interface BudgetCategory {
  id: string;
  name: string;
  type: 'income' | 'expense' | 'investment' | 'debt' | 'spending';
  color: string;
  items: BudgetLineItem[];
}

export interface Account {
  id: string;
  name: string;
  type: 'checking' | 'savings' | 'credit' | 'investment';
  institution: string;
}

export interface MonthlyBudget {
  id: string;
  month: number;
  year: number;
  categories: BudgetCategory[];
  accounts: Account[];
}

export interface BudgetSummary {
  totalIncome: number;
  totalInvestments: number;
  totalExpenses: number;
  totalDebt: number;
  totalSpending: number;
  surplus: number;
  savingsRate: number;
  timeToFI: string;
}

export interface ChartData {
  expenseBreakdown: {
    name: string;
    value: number;
    color: string;
  }[];
  cashFlow: {
    category: string;
    amount: number;
    color: string;
  }[];
  monthlyTrend: {
    month: string;
    surplus: number;
  }[];
}

export type CategoryType = 'income' | 'investments' | 'expenses' | 'debt' | 'spending';

export const CATEGORY_COLORS: Record<CategoryType, string> = {
  income: 'bg-emerald-600',
  investments: 'bg-purple-600', 
  expenses: 'bg-red-500',
  debt: 'bg-amber-500',
  spending: 'bg-cyan-500'
};

export const ACCOUNT_OPTIONS = [
  'SOFI-CHECK',
  'CHASE-UML', 
  'CHASE-AMZ',
  'CHASE-SAPHIRE',
  'MULTIPLE',
  ''
] as const;

export type AccountOption = typeof ACCOUNT_OPTIONS[number];