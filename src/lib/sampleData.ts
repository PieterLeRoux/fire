import { MonthlyBudget, Account } from './types';

export const sampleAccounts: Account[] = [
  { id: 'bank-checking', name: 'BANK-CHECKING', type: 'checking', institution: 'Bank A' },
  { id: 'credit-rewards', name: 'CREDIT-REWARDS', type: 'credit', institution: 'Bank B' },
  { id: 'credit-cashback', name: 'CREDIT-CASHBACK', type: 'credit', institution: 'Bank B' },
  { id: 'credit-travel', name: 'CREDIT-TRAVEL', type: 'credit', institution: 'Bank B' },
  { id: 'multiple', name: 'MULTIPLE', type: 'checking', institution: 'Various' }
];

export const sampleBudget: MonthlyBudget = {
  id: 'january-2025',
  month: 1,
  year: 2025,
  accounts: sampleAccounts,
  categories: [
    {
      id: 'income',
      name: 'Income',
      type: 'income',
      color: 'bg-emerald-600',
      items: [
        {
          id: 'primary-salary',
          name: 'Primary Job',
          budgeted: 8500.00,
          actual: 8500.00,
          isAutomated: true,
          accountId: 'bank-checking',
          categoryId: 'income',
          responsible: 'You'
        }
      ]
    },
    {
      id: 'investments',
      name: 'Investments',
      type: 'investment',
      color: 'bg-purple-600',
      items: [
        {
          id: 'company-401k',
          name: 'Company 401k',
          budgeted: 1275,
          actual: 1275,
          isAutomated: true,
          accountId: 'bank-checking',
          categoryId: 'investments',
          responsible: 'You'
        },
        {
          id: 'roth-ira',
          name: 'Roth IRA',
          budgeted: 500,
          actual: 500,
          isAutomated: true,
          accountId: 'bank-checking',
          categoryId: 'investments',
          responsible: 'You'
        },
        {
          id: 'index-funds',
          name: 'Index Funds',
          budgeted: 2000,
          actual: 2000,
          isAutomated: true,
          accountId: 'bank-checking',
          categoryId: 'investments',
          responsible: 'You'
        },
        {
          id: 'crypto',
          name: 'Crypto',
          budgeted: 200,
          actual: 200,
          isAutomated: false,
          accountId: 'bank-checking',
          categoryId: 'investments',
          responsible: 'You'
        }
      ]
    },
    {
      id: 'expenses',
      name: 'Expenses',
      type: 'expense',
      color: 'bg-red-500',
      items: [
        {
          id: 'rent',
          name: 'Rent',
          budgeted: 1500,
          actual: 1500,
          isAutomated: true,
          accountId: 'bank-checking',
          categoryId: 'expenses',
          responsible: 'You'
        },
        {
          id: 'food',
          name: 'Food',
          budgeted: 600,
          actual: 600,
          isAutomated: false,
          accountId: '',
          categoryId: 'expenses',
          responsible: 'You'
        },
        {
          id: 'pet-expenses',
          name: 'Pet Expenses',
          budgeted: 150,
          actual: 150,
          isAutomated: false,
          accountId: '',
          categoryId: 'expenses',
          responsible: 'You'
        },
        {
          id: 'fuel',
          name: 'Fuel',
          budgeted: 200,
          actual: 200,
          isAutomated: false,
          accountId: 'credit-rewards',
          categoryId: 'expenses',
          responsible: 'You'
        },
        {
          id: 'auto-insurance',
          name: 'Auto Insurance',
          budgeted: 150,
          actual: 150,
          isAutomated: true,
          accountId: 'bank-checking',
          categoryId: 'expenses',
          responsible: 'You'
        },
        {
          id: 'utilities',
          name: 'Utilities',
          budgeted: 120,
          actual: 120,
          isAutomated: true,
          accountId: 'multiple',
          categoryId: 'expenses',
          responsible: 'You'
        },
        {
          id: 'subscriptions',
          name: 'Subscriptions',
          budgeted: 80,
          actual: 80,
          isAutomated: true,
          accountId: 'multiple',
          categoryId: 'expenses',
          responsible: 'You'
        },
        {
          id: 'miscellaneous',
          name: 'Miscellaneous',
          budgeted: 300,
          actual: 300,
          isAutomated: false,
          accountId: 'multiple',
          categoryId: 'expenses',
          responsible: 'You'
        },
        {
          id: 'business',
          name: 'Business',
          budgeted: 50,
          actual: 50,
          isAutomated: true,
          accountId: 'multiple',
          categoryId: 'expenses',
          responsible: 'You'
        }
      ]
    },
    {
      id: 'debt',
      name: 'Debt Payments',
      type: 'debt',
      color: 'bg-amber-500',
      items: [
        {
          id: 'car-payment',
          name: 'Car Payment',
          budgeted: 450,
          actual: 450,
          isAutomated: false,
          accountId: 'bank-checking',
          categoryId: 'debt',
          responsible: 'You'
        }
      ]
    },
    {
      id: 'spending',
      name: 'Discretionary Spending',
      type: 'spending',
      color: 'bg-cyan-500',
      items: [
        {
          id: 'travel',
          name: 'Travel',
          budgeted: 800,
          actual: 800,
          isAutomated: false,
          accountId: 'bank-checking',
          categoryId: 'spending',
          responsible: 'You'
        }
      ]
    }
  ]
};