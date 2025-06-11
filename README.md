# FIRE Budget Dashboard

A professional-grade budget dashboard for FIRE (Financial Independence Retire Early) planning, built with Next.js and Material-UI. This application serves as a sophisticated replacement for Google Sheets budget tracking, offering enterprise-level financial planning capabilities.

## 🎯 Project Overview

**FIRE Budget Dashboard** is a comprehensive financial planning application designed for professionals pursuing Financial Independence and Early Retirement. Built with modern web technologies, it provides an intuitive interface for budget tracking, investment monitoring, and FIRE goal planning.

### Key Features
- **📊 Interactive Budget Dashboard** - Real-time budget tracking with 5 main categories (Income, Investments, Expenses, Debt, Spending)
- **📈 Financial Visualization** - Charts for expense breakdown, cash flow analysis, and monthly trends
- **💰 FIRE Metrics** - Automated calculations for savings rate, time to FI, and surplus/deficit tracking
- **🏦 Account Management** - Multi-account support with automation toggles
- **📱 Responsive Design** - Professional Material-UI interface optimized for all devices
- **💾 Data Persistence** - Local storage with future cloud sync capabilities

## 🛠 Tech Stack

- **Framework:** Next.js 14 with App Router and TypeScript
- **UI Library:** Material-UI (MUI) with custom FIRE theme
- **Charts:** @mui/x-charts for financial visualizations
- **Data Tables:** @mui/x-data-grid for budget management
- **State Management:** React Context with localStorage persistence
- **Styling:** Material-UI theming system with emerald green primary (#10b981)
- **Icons:** @mui/icons-material
- **Code Quality:** ESLint + Prettier + TypeScript strict mode

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/fire-budget-dashboard.git
cd fire-budget-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 🎨 Design System

The application uses a custom FIRE-themed design system built on Material-UI:

- **Primary:** #10b981 (Emerald green - growth, prosperity)
- **Secondary:** #3b82f6 (Professional blue - trust, stability)
- **Success:** #22c55e (Income categories)
- **Error:** #ef4444 (Expense categories)
- **Warning:** #f59e0b (Debt categories)
- **Info:** #8b5cf6 (Investment categories)

## 📈 Dashboard Components

### Summary Cards
- Monthly Income tracking
- Savings Rate with progress indicators
- Monthly Surplus/Deficit analysis
- Time to Financial Independence calculations

### Budget Categories
- **Income** (Green) - Salary, bonuses, side income
- **Investments** (Purple) - 401k, Roth IRA, index funds
- **Expenses** (Red) - Rent, utilities, insurance, necessities
- **Debt Payments** (Amber) - Loans, credit cards
- **Discretionary Spending** (Blue) - Travel, entertainment, hobbies

### Interactive Features
- Inline editing for all budget items
- Account assignment with dropdown selection
- Automation toggles (Auto/Manual)
- Month navigation and budget cloning
- Real-time calculation updates

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format with Prettier
npm run type-check   # TypeScript validation
```

## 🏗 Project Structure

```
/src
  /app              # Next.js 14 App Router
    layout.tsx      # Theme provider setup
    page.tsx        # Main dashboard
  /components       
    /budget         # Budget-specific components
    /charts         # Financial visualizations
    /ui             # Reusable UI components
    /layout         # Navigation components
  /lib             
    theme.ts        # Material-UI theme config
    types.ts        # TypeScript interfaces
  /hooks            # Custom React hooks
  /contexts         # React Context providers
  /data             # Sample data and constants
```

## 📊 Sample Data

The application includes anonymized sample budget data featuring:
- Professional salary ($12,927.28/month)
- Multiple investment accounts (401k, Roth IRA, index funds)
- Comprehensive expense tracking
- Debt management (auto loans)
- Discretionary spending categories

Account types supported:
- SOFI-CHECK (SoFi Checking)
- CHASE-UML (Chase United)
- CHASE-AMZ (Chase Amazon)
- CHASE-SAPHIRE (Chase Sapphire)
- MULTIPLE (Multiple Accounts)

## 🚀 Deployment

Optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel --prod

# Or build locally
npm run build
npm start
```

## 🛣 Roadmap

### Phase 1: Budget Dashboard MVP ✅
- Interactive budget tracking
- Financial visualizations
- FIRE metrics calculations

### Phase 2: Net Worth Tracker (Planned)
- Asset and liability tracking
- Account linking capabilities
- Net worth trend analysis

### Phase 3: FIRE Calculators (Planned)
- Retirement projection tools
- Goal setting and tracking
- Scenario planning

### Future Phases
- AI-powered investment analysis
- Retirement strategy optimization
- International retirement planning

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests for any improvements.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by [Material Dashboard React](https://github.com/creativetimofficial/material-dashboard-react)
- Built for the FIRE community pursuing financial independence
- Designed for professionals seeking enterprise-grade financial planning tools
