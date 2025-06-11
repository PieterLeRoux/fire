'use client';

import React from 'react';
import { Typography, Box } from '@mui/material';
import {
  TrendingUp,
  Savings,
  AccountBalance,
  Timeline,
} from '@mui/icons-material';

import DashboardLayout from '@/components/layout/DashboardLayout';
import SummaryCard from '@/components/ui/SummaryCard';
import { sampleBudgetData } from '@/data/sampleBudget';
import { 
  formatCurrency, 
  formatPercentage, 
  calculateSavingsRate, 
  calculateNetSurplus,
  calculateTimeToFI,
} from '@/lib/utils';

export default function DashboardPage() {
  // Calculate summary metrics from sample data
  const totalIncome = sampleBudgetData.categories
    .find(cat => cat.type === 'income')?.items
    .reduce((sum, item) => sum + item.budgeted, 0) || 0;

  const totalInvestments = sampleBudgetData.categories
    .find(cat => cat.type === 'investments')?.items
    .reduce((sum, item) => sum + item.budgeted, 0) || 0;

  const totalExpenses = sampleBudgetData.categories
    .find(cat => cat.type === 'expenses')?.items
    .reduce((sum, item) => sum + item.budgeted, 0) || 0;

  const totalDebt = sampleBudgetData.categories
    .find(cat => cat.type === 'debt')?.items
    .reduce((sum, item) => sum + item.budgeted, 0) || 0;

  const totalSpending = sampleBudgetData.categories
    .find(cat => cat.type === 'spending')?.items
    .reduce((sum, item) => sum + item.budgeted, 0) || 0;

  const savingsRate = calculateSavingsRate(totalIncome, totalInvestments);
  const netSurplus = calculateNetSurplus(totalIncome, totalExpenses + totalDebt + totalSpending);
  const timeToFI = calculateTimeToFI(1000000, totalInvestments * 12, 0.07);

  return (
    <DashboardLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Budget Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          January 2025 • Track your journey to Financial Independence
        </Typography>
      </Box>

      {/* Summary Cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          gap: 3,
          mb: 4,
        }}
      >
        <SummaryCard
          title="Monthly Income"
          value={formatCurrency(totalIncome)}
          subtitle="Primary Salary"
          icon={TrendingUp}
          color="#22c55e"
          gradient="linear-gradient(135deg, #22c55e 0%, #16a34a 100%)"
        />
        
        <SummaryCard
          title="Savings Rate"
          value={formatPercentage(savingsRate)}
          subtitle="Investment Rate"
          icon={Savings}
          color="#10b981"
          gradient="linear-gradient(135deg, #10b981 0%, #059669 100%)"
        />
        
        <SummaryCard
          title="Monthly Surplus"
          value={formatCurrency(netSurplus)}
          subtitle={netSurplus >= 0 ? "Under Budget" : "Over Budget"}
          icon={AccountBalance}
          color={netSurplus >= 0 ? "#22c55e" : "#ef4444"}
          gradient={netSurplus >= 0 
            ? "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)"
            : "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
          }
        />
        
        <SummaryCard
          title="Time to FI"
          value={`${timeToFI.toFixed(1)} years`}
          subtitle="At current rate"
          icon={Timeline}
          color="#8b5cf6"
          gradient="linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
        />
      </Box>

      {/* Charts Section */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
          },
          gap: 3,
          mb: 4,
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: 3,
            p: 3,
            boxShadow: '0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
            height: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" color="text.secondary">
            📊 Expense Breakdown Chart
          </Typography>
        </Box>
        
        <Box
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: 3,
            p: 3,
            boxShadow: '0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
            height: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" color="text.secondary">
            📈 Monthly Cash Flow Chart
          </Typography>
        </Box>
      </Box>

      {/* Budget Categories */}
      <Box>
        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
          Budget Categories
        </Typography>
        
        {sampleBudgetData.categories.map((category) => (
          <Box
            key={category.id}
            sx={{
              backgroundColor: 'background.paper',
              borderRadius: 3,
              p: 3,
              mb: 2,
              boxShadow: '0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
              border: `2px solid ${category.color}20`,
            }}
          >
            <Typography variant="h6" component="h3" sx={{ color: category.color, mb: 2 }}>
              {category.name} ({formatCurrency(
                category.items.reduce((sum, item) => sum + item.budgeted, 0)
              )})
            </Typography>
            
            {category.items.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  py: 1,
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  '&:last-child': { borderBottom: 'none' },
                }}
              >
                <Typography variant="body1">{item.name}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    {sampleBudgetData.accounts.find(acc => acc.id === item.accountId)?.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: item.isAutomated ? 'success.main' : 'warning.main',
                      fontWeight: 500,
                    }}
                  >
                    {item.isAutomated ? 'Auto' : 'Manual'}
                  </Typography>
                  <Typography variant="body1" fontWeight={600}>
                    {formatCurrency(item.budgeted)}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </DashboardLayout>
  );
}
