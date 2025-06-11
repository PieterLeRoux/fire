export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function calculateSavingsRate(income: number, investments: number): number {
  if (income === 0) return 0;
  return (investments / income) * 100;
}

export function calculateNetSurplus(income: number, totalExpenses: number): number {
  return income - totalExpenses;
}

export function calculateTimeToFI(
  targetAmount: number = 1000000,
  annualSavings: number = 50000,
  returnRate: number = 0.07
): number {
  if (annualSavings <= 0) return Infinity;
  
  // Future value of annuity formula to calculate years needed
  const monthlyRate = returnRate / 12;
  const monthlySavings = annualSavings / 12;
  
  if (monthlyRate === 0) {
    return targetAmount / annualSavings;
  }
  
  // FV = PMT * (((1 + r)^n - 1) / r)
  // Solving for n: n = ln(1 + (FV * r / PMT)) / ln(1 + r)
  const years = Math.log(1 + (targetAmount * monthlyRate / monthlySavings)) / 
                Math.log(1 + monthlyRate) / 12;
  
  return Math.max(0, years);
}