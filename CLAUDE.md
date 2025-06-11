# Claude Memory File

This file enables memory persistence for the Fire project repository.

## Project Overview
- Repository: fire
- Main branch: main
- Project Type: FIRE (Financial Independence Retire Early) planning web app
- Phase: Phase 1 MVP - Budget Dashboard (Professional admin dashboard replacement for Google Sheets)
- Target Aesthetic: Material Dashboard React style with financial focus

## Tech Stack Update (CHANGED)
- **Framework:** Next.js 14 with App Router and TypeScript (strict mode)
- **UI Library:** Material-UI (MUI) with custom FIRE theme *(CHANGED from shadcn/ui)*
- **Styling:** Material-UI theming system *(CHANGED from Tailwind)*
- **Charts:** @mui/x-charts for data visualization *(CHANGED from Recharts)*
- **Data Grid:** @mui/x-data-grid for budget tables
- **Icons:** @mui/icons-material *(CHANGED from Lucide)*
- **Fonts:** Inter and Roboto via @fontsource
- **State:** React Context + localStorage persistence
- **Code Quality:** ESLint + Prettier + TypeScript strict mode

## Design System (NEW)
### **FIRE Theme Colors:**
- **Primary:** #10b981 (Emerald green - growth, money, prosperity)
- **Secondary:** #3b82f6 (Professional blue - trust, stability)
- **Success:** #22c55e (Green - positive/income)
- **Error:** #ef4444 (Red - expenses/deficit)
- **Warning:** #f59e0b (Amber - goals/warnings)
- **Info:** #8b5cf6 (Purple - investments)
- **Background:** #f8fafc (Light gray)
- **Paper:** #ffffff (White cards)

### **Budget Category Colors:**
- Income: Green (#22c55e)
- Investments: Purple (#8b5cf6)
- Expenses: Red (#ef4444)
- Debt: Amber (#f59e0b)
- Spending: Blue (#3b82f6)

## Project Structure (MIGRATED TO ROOT)
```
/fire (ROOT DIRECTORY)
  /src - Source code
    /app - Next.js 15 App Router
      layout.tsx - ThemeProvider + CssBaseline
      page.tsx - Main dashboard
      globals.css - Global styles
    /components 
      /budget - Budget-specific components (MUI-based)
      /charts - @mui/x-charts components  
      /ui - Reusable MUI components
      /layout - AppBar, Navigation components
    /lib 
      theme.ts - Material-UI theme configuration
      utils.ts - Helper functions
    /types 
      budget.ts - TypeScript interfaces
    /hooks - Custom React hooks for state management
    /contexts - React Context providers for budget data
    /data - Sample data and constants (anonymized)
  /public - Static assets
  package.json - Dependencies and scripts
  tsconfig.json - TypeScript configuration
  next.config.ts - Next.js configuration
  .eslintrc.json - ESLint configuration
  .prettierrc - Prettier configuration
  CLAUDE.md - This project memory file
  README.md - Project documentation
```

## Current Status (PHASE 1A COMPLETE)
- ✅ **Fresh Next.js 15 project** created with TypeScript and App Router
- ✅ **Material-UI integration** complete with custom FIRE theme
- ✅ **Project structure** migrated to root directory for multi-phase expansion
- ✅ **Sample data anonymized** - no specific companies, names, or sensitive numbers
- ✅ **Core dashboard** implemented with 4 summary cards and category sections
- ✅ **Professional design** matching Material Dashboard React aesthetic
- ✅ **Build and linting** working perfectly with zero errors
- 🎯 **Next step:** Phase 1B - Add charts and interactive tables with @mui/x-charts

## Key Features to Implement (Phase 1)
### **Dashboard Layout:**
1. **Top Navigation:** AppBar with month selector and user menu
2. **Summary Cards (4 cards):**
   - Monthly Income: $12,927.28 (McKinsey Salary)
   - Savings Rate: 50.3% with progress indicator
   - Monthly Surplus/Deficit: -$37.72 (color-coded)
   - Time to FI: 24.9 years
3. **Charts Section (2 charts):**
   - Expense Breakdown: PieChart with category colors
   - Monthly Cash Flow: BarChart showing income vs expenses
4. **Budget Categories (5 collapsible sections):**
   - Income (Green) - TrendingUpIcon
   - Investments (Purple) - ShowChartIcon
   - Expenses (Red) - ReceiptIcon
   - Debt Payments (Amber) - CreditCardIcon
   - Discretionary Spending (Blue) - ShoppingCartIcon

### **Interactive Features:**
- DataGrid tables with inline editing
- Account dropdowns (SOFI-CHECK, CHASE-UML, etc.)
- Automation toggles (Auto/Manual switches)
- Add/edit/delete budget line items
- Month navigation and cloning
- Real-time calculations and totals

## Sample Data Structure (DETAILED)
```typescript
interface BudgetLineItem {
  id: string;
  name: string;
  budgeted: number;
  actual: number;
  isAutomated: boolean;
  accountId: string;
  categoryId: string;
  responsible: 'You' | 'Partner';
  tags?: string[];
}

// Sample items:
// Income: McKinsey $12,927.28 (SOFI-CHECK, Auto)
// Investments: 401k $1,916, Roth $584, S&P $4,000
// Expenses: Rent $1,925, Food $900, Insurance $208, etc.
// Debt: Jeep $750
// Spending: Travel $1,700
```

## Accounts System
- SOFI-CHECK (SoFi Checking)
- CHASE-UML (Chase United)
- CHASE-AMZ (Chase Amazon) 
- CHASE-SAPHIRE (Chase Sapphire)
- MULTIPLE (Multiple Accounts)

## Development Priorities
### **Phase 1A: Foundation**
1. Fresh Next.js + TypeScript + Material-UI setup
2. Theme configuration and design system
3. Basic layout with AppBar and responsive grid

### **Phase 1B: Dashboard Components**
1. Summary cards with gradients and icons
2. Chart components using @mui/x-charts
3. Budget category accordion sections
4. DataGrid tables for line items

### **Phase 1C: Interactions**
1. Inline editing and form validation
2. CRUD operations for budget items
3. localStorage persistence
4. Month navigation

### **Phase 1D: Polish**
1. Mobile responsiveness
2. Loading states and animations
3. Error handling and user feedback
4. Performance optimization

## Future Phases (Context Only)
- **Phase 2:** Net Worth Tracker with account linking
- **Phase 3:** FIRE projection calculators and goal setting
- **Phase 4:** AI-powered investment analysis (Claude-Flow integration)
- **Phase 5:** Retirement strategy generator with AI agents
- **Phase 6:** International retirement location analysis
- **Phase 7:** Modular AI financial planning tools

## Development Commands (MUI Project)
- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format with Prettier
- `npm run type-check` - TypeScript validation

## Reference Design
- **Inspiration:** [Material Dashboard React](https://github.com/creativetimofficial/material-dashboard-react)
- **Target:** Professional admin dashboard for personal finance
- **Quality:** Enterprise-grade financial planning application

## Deployment
- **Platform:** Vercel with custom subdomain
- **Domain:** budget.yourdomain.com (or similar)
- **Environment:** Production-ready with proper error handling

## Notes
- **Fresh start approach:** New Next.js project due to Claude Code integration issues
- **Material-UI choice:** Visual quality significantly better than basic Tailwind
- **Professional focus:** Target McKinsey-level professional appearance
- **Scalability:** Architecture ready for multi-phase expansion