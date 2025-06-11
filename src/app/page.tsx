import { SummaryCards } from '@/components/budget/SummaryCards';
import { MonthSelector } from '@/components/budget/MonthSelector';
import { BudgetDashboard } from '@/components/budget/BudgetDashboard';
import { ExpenseBreakdownChart } from '@/components/charts/ExpenseBreakdownChart';
import { CashFlowChart } from '@/components/charts/CashFlowChart';
import { MonthlyTrendChart } from '@/components/charts/MonthlyTrendChart';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">FIRE Budget Dashboard</h1>
              <p className="text-gray-600 mt-2">Financial Independence, Retire Early Planning</p>
            </div>
            <MonthSelector />
          </div>
        </div>

        {/* Key Metrics */}
        <SummaryCards />

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ExpenseBreakdownChart />
          <CashFlowChart />
        </div>

        {/* Budget Tables */}
        <BudgetDashboard />

        {/* Monthly Trend */}
        <div className="mt-8">
          <MonthlyTrendChart />
        </div>
      </div>
    </div>
  );
}
