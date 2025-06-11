# Claude Memory File

This file enables memory persistence for the Fire project repository.

## Project Overview
- Repository: fire
- Main branch: main
- Project Type: FIRE (Financial Independence Retire Early) planning web app
- Phase: Phase 1 MVP - Budget Dashboard (Google Sheets replacement)

## Tech Stack
- Next.js 15 with App Router
- TypeScript (strict mode)
- Tailwind CSS with emerald theme (#10b981 primary)
- shadcn/ui component library
- Recharts for data visualization
- localStorage for data persistence (Phase 1)
- Lucide React for icons

## Project Structure
```
/src
  /app - Next.js 14 App Router
  /components 
    /budget - Budget-specific components
    /charts - Data visualization components  
    /ui - Reusable UI components (shadcn/ui)
  /lib - Utilities, data types, helpers
  /hooks - Custom React hooks for state management
  /contexts - React Context providers
```

## Current Status
- ✅ Next.js 15 project setup with TypeScript and App Router
- ✅ Tailwind CSS configured with emerald theme
- ✅ shadcn/ui installed and configured
- ✅ Recharts and Lucide React installed
- ✅ Project folder structure created
- 🚧 Working on TypeScript interfaces and React Context

## Key Features to Implement (Phase 1)
1. Budget Dashboard with 5 categories (Income, Investments, Expenses, Debt, Spending)
2. Summary cards (Monthly Income, Savings Rate, Surplus, Time to FI)
3. Interactive budget tables with inline editing
4. Charts: Expense breakdown pie, Cash flow bar, Monthly trend line
5. Month selector and navigation
6. localStorage persistence

## Sample Data Structure
Based on actual budget with McKinsey income ($12,927), various investments (401k, ROTH, S&P), expenses (rent, food, utilities), and accounts (SOFI-CHECK, CHASE-UML, etc.)

## Development Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run lint` - Run ESLint