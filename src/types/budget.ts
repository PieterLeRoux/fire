export interface BudgetLineItem {
  id: string;
  name: string;
  budgeted: number;
  actual: number;
  isAutomated: boolean;
  accountId: string;
  categoryId: string;
  responsible: 'You' | 'Partner';
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface BudgetCategory {
  id: string;
  name: string;
  type: 'income' | 'investments' | 'expenses' | 'debt' | 'spending';
  color: string;
  icon: string;
  items: BudgetLineItem[];
  isExpanded: boolean;
}

export interface Account {
  id: string;
  name: string;
  displayName: string;
  type: 'checking' | 'savings' | 'credit' | 'investment';
  institution: string;
}

export interface MonthlyBudget {
  id: string;
  month: number;
  year: number;
  categories: BudgetCategory[];
  accounts: Account[];
  createdAt: Date;
  updatedAt: Date;
}

export interface BudgetSummary {
  totalIncome: number;
  totalInvestments: number;
  totalExpenses: number;
  totalDebt: number;
  totalSpending: number;
  netSurplus: number;
  savingsRate: number;
  timeToFI: number;
}