'use client';

import { DollarSign, TrendingUp, Target, PiggyBank, CreditCard } from 'lucide-react';
import { useBudget } from '@/contexts/BudgetContext';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  subtitle?: string;
}

function MetricCard({ title, value, icon: Icon, color, subtitle }: MetricCardProps) {
  const displayValue = typeof value === 'number' 
    ? value < 0 
      ? `-$${Math.abs(value).toLocaleString()}`
      : `$${value.toLocaleString()}`
    : value;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-2xl font-bold ${color}`}>
            {displayValue}
          </p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
    </div>
  );
}

export function SummaryCards() {
  const { summary } = useBudget();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <MetricCard
        title="Monthly Income"
        value={summary.totalIncome}
        icon={DollarSign}
        color="text-emerald-600"
        subtitle="McKinsey Salary"
      />
      <MetricCard
        title="Savings Rate"
        value={`${summary.savingsRate}%`}
        icon={Target}
        color="text-purple-600"
        subtitle="Investment Rate"
      />
      <MetricCard
        title="Monthly Surplus"
        value={summary.surplus}
        icon={summary.surplus >= 0 ? TrendingUp : CreditCard}
        color={summary.surplus >= 0 ? "text-green-600" : "text-red-600"}
        subtitle={summary.surplus >= 0 ? "Above Budget" : "Over Budget"}
      />
      <MetricCard
        title="Time to FI"
        value={summary.timeToFI}
        icon={PiggyBank}
        color="text-blue-600"
        subtitle="At current rate"
      />
    </div>
  );
}