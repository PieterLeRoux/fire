import { MonthlyBudget, Account } from './types';

export const sampleAccounts: Account[] = [
  { id: 'sofi-check', name: 'SOFI-CHECK', type: 'checking', institution: 'SoFi' },
  { id: 'chase-uml', name: 'CHASE-UML', type: 'credit', institution: 'Chase' },
  { id: 'chase-amz', name: 'CHASE-AMZ', type: 'credit', institution: 'Chase' },
  { id: 'chase-saphire', name: 'CHASE-SAPHIRE', type: 'credit', institution: 'Chase' },
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
          id: 'mckinsey-salary',
          name: 'McKinsey',
          budgeted: 12927.28,
          actual: 12927.28,
          isAutomated: true,
          accountId: 'sofi-check',
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
          id: 'alight-401k',
          name: 'Alight (401k)',
          budgeted: 1916,
          actual: 1916,
          isAutomated: true,
          accountId: 'sofi-check',
          categoryId: 'investments',
          responsible: 'You'
        },
        {
          id: 'fidelity-roth',
          name: 'Fidelity (ROTH)',
          budgeted: 584,
          actual: 584,
          isAutomated: true,
          accountId: 'sofi-check',
          categoryId: 'investments',
          responsible: 'You'
        },
        {
          id: 'schwab-sp',
          name: 'Schwab (S&P)',
          budgeted: 4000,
          actual: 4000,
          isAutomated: true,
          accountId: 'sofi-check',
          categoryId: 'investments',
          responsible: 'You'
        },
        {
          id: 'crypto',
          name: 'Crypto',
          budgeted: 0,
          actual: 0,
          isAutomated: false,
          accountId: 'sofi-check',
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
          budgeted: 1925,
          actual: 1925,
          isAutomated: true,
          accountId: 'sofi-check',
          categoryId: 'expenses',
          responsible: 'You'
        },
        {
          id: 'food',
          name: 'Food',
          budgeted: 900,
          actual: 900,
          isAutomated: false,
          accountId: '',
          categoryId: 'expenses',
          responsible: 'You'
        },
        {
          id: 'misia-pet',
          name: 'Misia (Pet)',
          budgeted: 177,
          actual: 177,
          isAutomated: false,
          accountId: '',
          categoryId: 'expenses',
          responsible: 'You'
        },
        {
          id: 'fuel',
          name: 'Fuel',
          budgeted: 180,
          actual: 180,
          isAutomated: false,
          accountId: 'chase-uml',
          categoryId: 'expenses',
          responsible: 'You'
        },
        {
          id: 'auto-insurance',
          name: 'Auto Insurance',
          budgeted: 208,
          actual: 208,
          isAutomated: true,
          accountId: 'sofi-check',
          categoryId: 'expenses',
          responsible: 'You'
        },
        {
          id: 'utilities',
          name: 'Utilities',
          budgeted: 70,
          actual: 70,
          isAutomated: true,
          accountId: 'multiple',
          categoryId: 'expenses',
          responsible: 'You'
        },
        {
          id: 'subscriptions',
          name: 'Subscriptions',
          budgeted: 159,
          actual: 159,
          isAutomated: true,
          accountId: 'multiple',
          categoryId: 'expenses',
          responsible: 'You'
        },
        {
          id: 'miscellaneous',
          name: 'Miscellaneous',
          budgeted: 390,
          actual: 390,
          isAutomated: false,
          accountId: 'multiple',
          categoryId: 'expenses',
          responsible: 'You'
        },
        {
          id: 'business',
          name: 'Business',
          budgeted: 6,
          actual: 6,
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
          id: 'jeep-payment',
          name: 'Jeep',
          budgeted: 750,
          actual: 750,
          isAutomated: false,
          accountId: 'sofi-check',
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
          budgeted: 1700,
          actual: 1700,
          isAutomated: false,
          accountId: 'sofi-check',
          categoryId: 'spending',
          responsible: 'You'
        }
      ]
    }
  ]
};