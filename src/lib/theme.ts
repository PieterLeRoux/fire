import { createTheme } from '@mui/material/styles';

export const fireTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#10b981',      // Emerald green (FIRE/growth)
      light: '#34d399',
      dark: '#047857',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3b82f6',      // Professional blue
      light: '#60a5fa',
      dark: '#1d4ed8',
    },
    success: {
      main: '#22c55e',      // Green (positive/income)
      light: '#4ade80',
      dark: '#15803d',
    },
    error: {
      main: '#ef4444',      // Red (expenses/deficit)
      light: '#f87171',
      dark: '#dc2626',
    },
    warning: {
      main: '#f59e0b',      // Amber (goals/warnings)
      light: '#fbbf24',
      dark: '#d97706',
    },
    info: {
      main: '#8b5cf6',      // Purple (investments)
      light: '#a78bfa',
      dark: '#7c3aed',
    },
    background: {
      default: '#f8fafc',   // Light gray background
      paper: '#ffffff',     // White cards
    },
    text: {
      primary: '#0f172a',   // Dark slate
      secondary: '#475569', // Medium slate
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
          borderRadius: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export const budgetCategoryColors = {
  income: '#22c55e',        // Green
  investments: '#8b5cf6',   // Purple
  expenses: '#ef4444',      // Red
  debt: '#f59e0b',         // Amber
  spending: '#3b82f6',     // Blue
};