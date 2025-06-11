import { MonthlyBudget } from '@/types/budget';

export const sampleBudgetData: MonthlyBudget = {
  id: 'jan-2025',
  month: 1,
  year: 2025,
  categories: [
    {
      id: 'income',
      name: 'Income',
      type: 'income',
      color: '#22c55e',
      icon: 'TrendingUp',
      isExpanded: true,
      items: [
        {
          id: 'income-1',
          name: 'Primary Salary',
          budgeted: 8500.00,
          actual: 8500.00,
          isAutomated: true,
          accountId: 'checking-main',
          categoryId: 'income',
          responsible: 'You',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    },
    {
      id: 'investments',
      name: 'Investments',
      type: 'investments',
      color: '#8b5cf6',
      icon: 'ShowChart',
      isExpanded: true,
      items: [
        {
          id: 'inv-1',
          name: '401k Contribution',
          budgeted: 1500.00,
          actual: 1500.00,
          isAutomated: true,
          accountId: 'checking-main',
          categoryId: 'investments',
          responsible: 'You',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'inv-2',
          name: 'Roth IRA',
          budgeted: 500.00,
          actual: 500.00,
          isAutomated: true,
          accountId: 'checking-main',
          categoryId: 'investments',
          responsible: 'You',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'inv-3',
          name: 'Index Funds',
          budgeted: 2000.00,
          actual: 2000.00,
          isAutomated: true,
          accountId: 'checking-main',
          categoryId: 'investments',
          responsible: 'You',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    },
    {
      id: 'expenses',
      name: 'Expenses',
      type: 'expenses',
      color: '#ef4444',
      icon: 'Receipt',
      isExpanded: true,
      items: [
        {
          id: 'exp-1',
          name: 'Housing',
          budgeted: 1800.00,
          actual: 1800.00,
          isAutomated: true,
          accountId: 'checking-main',
          categoryId: 'expenses',
          responsible: 'You',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'exp-2',
          name: 'Food & Groceries',
          budgeted: 650.00,
          actual: 650.00,
          isAutomated: false,
          accountId: 'multiple',
          categoryId: 'expenses',
          responsible: 'You',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'exp-3',
          name: 'Insurance',
          budgeted: 300.00,
          actual: 300.00,
          isAutomated: true,
          accountId: 'checking-main',
          categoryId: 'expenses',
          responsible: 'You',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'exp-4',
          name: 'Transportation',
          budgeted: 200.00,
          actual: 200.00,
          isAutomated: false,
          accountId: 'credit-rewards',
          categoryId: 'expenses',
          responsible: 'You',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'exp-5',
          name: 'Utilities',
          budgeted: 150.00,
          actual: 150.00,
          isAutomated: true,
          accountId: 'multiple',
          categoryId: 'expenses',
          responsible: 'You',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'exp-6',
          name: 'Subscriptions',
          budgeted: 120.00,
          actual: 120.00,
          isAutomated: true,
          accountId: 'multiple',
          categoryId: 'expenses',
          responsible: 'You',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    },
    {
      id: 'debt',
      name: 'Debt Payments',
      type: 'debt',
      color: '#f59e0b',
      icon: 'CreditCard',
      isExpanded: true,
      items: [
        {
          id: 'debt-1',
          name: 'Auto Loan',
          budgeted: 450.00,
          actual: 450.00,
          isAutomated: false,
          accountId: 'checking-main',
          categoryId: 'debt',
          responsible: 'You',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    },
    {
      id: 'spending',
      name: 'Discretionary Spending',
      type: 'spending',
      color: '#3b82f6',
      icon: 'ShoppingCart',
      isExpanded: true,
      items: [
        {
          id: 'spend-1',
          name: 'Entertainment',
          budgeted: 400.00,
          actual: 400.00,
          isAutomated: false,
          accountId: 'checking-main',
          categoryId: 'spending',
          responsible: 'You',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    }
  ],
  accounts: [
    { 
      id: 'checking-main', 
      name: 'CHECKING-MAIN', 
      displayName: 'Primary Checking', 
      type: 'checking', 
      institution: 'Bank A' 
    },
    { 
      id: 'credit-rewards', 
      name: 'CREDIT-REWARDS', 
      displayName: 'Rewards Credit Card', 
      type: 'credit', 
      institution: 'Bank B' 
    },
    { 
      id: 'credit-travel', 
      name: 'CREDIT-TRAVEL', 
      displayName: 'Travel Credit Card', 
      type: 'credit', 
      institution: 'Bank B' 
    },
    { 
      id: 'credit-cashback', 
      name: 'CREDIT-CASHBACK', 
      displayName: 'Cashback Credit Card', 
      type: 'credit', 
      institution: 'Bank C' 
    },
    { 
      id: 'multiple', 
      name: 'MULTIPLE', 
      displayName: 'Multiple Accounts', 
      type: 'checking', 
      institution: 'Various' 
    },
  ],
  createdAt: new Date(),
  updatedAt: new Date(),
};