'use client';

import { DollarSign, TrendingUp, Home, Car, Utensils } from 'lucide-react';
import { BudgetCategory, ACCOUNT_OPTIONS } from '@/lib/types';
import { useBudget } from '@/contexts/BudgetContext';
import { useState } from 'react';

interface BudgetTableProps {
  category: BudgetCategory;
}

const CATEGORY_ICONS = {
  income: DollarSign,
  investment: TrendingUp,
  expense: Home,
  debt: Car,
  spending: Utensils
};

export function BudgetTable({ category }: BudgetTableProps) {
  const { updateLineItem } = useBudget();
  const [editingItem, setEditingItem] = useState<string | null>(null);
  
  const Icon = CATEGORY_ICONS[category.type];
  const total = category.items.reduce((sum, item) => sum + item.budgeted, 0);

  const handleAmountEdit = (itemId: string, newAmount: string) => {
    const amount = parseFloat(newAmount.replace(/[^0-9.-]/g, '')) || 0;
    updateLineItem(category.id, itemId, { budgeted: amount });
    setEditingItem(null);
  };

  const handleAccountChange = (itemId: string, accountId: string) => {
    updateLineItem(category.id, itemId, { accountId });
  };

  const handleAutomationToggle = (itemId: string, isAutomated: boolean) => {
    updateLineItem(category.id, itemId, { isAutomated });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className={`${category.color} px-6 py-4 border-b`}>
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-white" />
          <h3 className="text-lg font-semibold text-white">{category.name}</h3>
          <span className="ml-auto text-white font-bold">
            ${total.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Automated</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responsible</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {category.items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                  {editingItem === item.id ? (
                    <input
                      type="text"
                      defaultValue={item.budgeted.toString()}
                      onBlur={(e) => handleAmountEdit(item.id, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleAmountEdit(item.id, e.currentTarget.value);
                        }
                        if (e.key === 'Escape') {
                          setEditingItem(null);
                        }
                      }}
                      className="w-20 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      autoFocus
                    />
                  ) : (
                    <button
                      onClick={() => setEditingItem(item.id)}
                      className="hover:bg-gray-100 px-2 py-1 rounded"
                    >
                      ${item.budgeted.toLocaleString()}
                    </button>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <select
                    value={item.accountId}
                    onChange={(e) => handleAccountChange(item.id, e.target.value)}
                    className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {ACCOUNT_OPTIONS.map((account) => (
                      <option key={account} value={account}>
                        {account || 'Multiple'}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => handleAutomationToggle(item.id, !item.isAutomated)}
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.isAutomated 
                        ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                        : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                    }`}
                  >
                    {item.isAutomated ? 'Auto' : 'Manual'}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.responsible}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}