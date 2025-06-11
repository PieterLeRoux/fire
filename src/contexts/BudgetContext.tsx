'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { MonthlyBudget, BudgetLineItem, BudgetSummary } from '@/lib/types';
import { sampleBudget } from '@/lib/sampleData';

interface BudgetState {
  currentBudget: MonthlyBudget;
  selectedMonth: string;
  isLoading: boolean;
  error: string | null;
}

type BudgetAction = 
  | { type: 'SET_BUDGET'; payload: MonthlyBudget }
  | { type: 'SET_SELECTED_MONTH'; payload: string }
  | { type: 'UPDATE_LINE_ITEM'; payload: { categoryId: string; itemId: string; updates: Partial<BudgetLineItem> } }
  | { type: 'ADD_LINE_ITEM'; payload: { categoryId: string; item: BudgetLineItem } }
  | { type: 'REMOVE_LINE_ITEM'; payload: { categoryId: string; itemId: string } }
  | { type: 'SAVE_TO_STORAGE' }
  | { type: 'LOAD_FROM_STORAGE' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

const initialState: BudgetState = {
  currentBudget: sampleBudget,
  selectedMonth: 'January 2025',
  isLoading: false,
  error: null
};

function budgetReducer(state: BudgetState, action: BudgetAction): BudgetState {
  switch (action.type) {
    case 'SET_BUDGET':
      return { ...state, currentBudget: action.payload };
    
    case 'SET_SELECTED_MONTH':
      return { ...state, selectedMonth: action.payload };
    
    case 'UPDATE_LINE_ITEM': {
      const { categoryId, itemId, updates } = action.payload;
      const updatedBudget = {
        ...state.currentBudget,
        categories: state.currentBudget.categories.map(category => 
          category.id === categoryId 
            ? {
                ...category,
                items: category.items.map(item =>
                  item.id === itemId ? { ...item, ...updates } : item
                )
              }
            : category
        )
      };
      return { ...state, currentBudget: updatedBudget };
    }
    
    case 'ADD_LINE_ITEM': {
      const { categoryId, item } = action.payload;
      const updatedBudget = {
        ...state.currentBudget,
        categories: state.currentBudget.categories.map(category =>
          category.id === categoryId
            ? { ...category, items: [...category.items, item] }
            : category
        )
      };
      return { ...state, currentBudget: updatedBudget };
    }
    
    case 'REMOVE_LINE_ITEM': {
      const { categoryId, itemId } = action.payload;
      const updatedBudget = {
        ...state.currentBudget,
        categories: state.currentBudget.categories.map(category =>
          category.id === categoryId
            ? { ...category, items: category.items.filter(item => item.id !== itemId) }
            : category
        )
      };
      return { ...state, currentBudget: updatedBudget };
    }
    
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    default:
      return state;
  }
}

interface BudgetContextType {
  state: BudgetState;
  dispatch: React.Dispatch<BudgetAction>;
  summary: BudgetSummary;
  updateLineItem: (categoryId: string, itemId: string, updates: Partial<BudgetLineItem>) => void;
  addLineItem: (categoryId: string, item: BudgetLineItem) => void;
  removeLineItem: (categoryId: string, itemId: string) => void;
  setSelectedMonth: (month: string) => void;
  saveToStorage: () => void;
  loadFromStorage: () => void;
}

const BudgetContext = createContext<BudgetContextType | undefined>(undefined);

export function BudgetProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  // Calculate budget summary
  const summary: BudgetSummary = React.useMemo(() => {
    const categories = state.currentBudget.categories;
    
    const totals = categories.reduce((acc, category) => {
      const categoryTotal = category.items.reduce((sum, item) => sum + item.budgeted, 0);
      
      switch (category.type) {
        case 'income':
          acc.totalIncome += categoryTotal;
          break;
        case 'investment':
          acc.totalInvestments += categoryTotal;
          break;
        case 'expense':
          acc.totalExpenses += categoryTotal;
          break;
        case 'debt':
          acc.totalDebt += categoryTotal;
          break;
        case 'spending':
          acc.totalSpending += categoryTotal;
          break;
      }
      
      return acc;
    }, {
      totalIncome: 0,
      totalInvestments: 0,
      totalExpenses: 0,
      totalDebt: 0,
      totalSpending: 0
    });

    const surplus = totals.totalIncome - totals.totalInvestments - totals.totalExpenses - totals.totalDebt - totals.totalSpending;
    const savingsRate = totals.totalIncome > 0 ? (totals.totalInvestments / totals.totalIncome) * 100 : 0;
    
    // Simple FIRE calculation: assume 25x annual expenses rule
    const annualExpenses = (totals.totalExpenses + totals.totalDebt + totals.totalSpending) * 12;
    const fireNumber = annualExpenses * 25;
    const annualSavings = totals.totalInvestments * 12;
    const yearsToFI = annualSavings > 0 ? fireNumber / annualSavings : 0;
    
    return {
      ...totals,
      surplus,
      savingsRate: Math.round(savingsRate * 10) / 10,
      timeToFI: yearsToFI > 0 ? `${Math.round(yearsToFI * 10) / 10} years` : 'Not on track'
    };
  }, [state.currentBudget]);

  // Action creators
  const updateLineItem = (categoryId: string, itemId: string, updates: Partial<BudgetLineItem>) => {
    dispatch({ type: 'UPDATE_LINE_ITEM', payload: { categoryId, itemId, updates } });
  };

  const addLineItem = (categoryId: string, item: BudgetLineItem) => {
    dispatch({ type: 'ADD_LINE_ITEM', payload: { categoryId, item } });
  };

  const removeLineItem = (categoryId: string, itemId: string) => {
    dispatch({ type: 'REMOVE_LINE_ITEM', payload: { categoryId, itemId } });
  };

  const setSelectedMonth = (month: string) => {
    dispatch({ type: 'SET_SELECTED_MONTH', payload: month });
  };

  const saveToStorage = () => {
    try {
      localStorage.setItem('fire-budget', JSON.stringify(state.currentBudget));
      localStorage.setItem('fire-selected-month', state.selectedMonth);
    } catch {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to save budget to storage' });
    }
  };

  const loadFromStorage = () => {
    try {
      const savedBudget = localStorage.getItem('fire-budget');
      const savedMonth = localStorage.getItem('fire-selected-month');
      
      if (savedBudget) {
        const budget = JSON.parse(savedBudget);
        dispatch({ type: 'SET_BUDGET', payload: budget });
      }
      
      if (savedMonth) {
        dispatch({ type: 'SET_SELECTED_MONTH', payload: savedMonth });
      }
    } catch {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to load budget from storage' });
    }
  };

  // Auto-save on budget changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      saveToStorage();
    }, 1000); // Debounce saves by 1 second

    return () => clearTimeout(timeoutId);
  }, [state.currentBudget, state.selectedMonth, saveToStorage]);

  // Load from storage on mount
  useEffect(() => {
    loadFromStorage();
  }, []);

  const contextValue: BudgetContextType = {
    state,
    dispatch,
    summary,
    updateLineItem,
    addLineItem,
    removeLineItem,
    setSelectedMonth,
    saveToStorage,
    loadFromStorage
  };

  return (
    <BudgetContext.Provider value={contextValue}>
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudget() {
  const context = useContext(BudgetContext);
  if (context === undefined) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
}