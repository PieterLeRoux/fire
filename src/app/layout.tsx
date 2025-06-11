import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BudgetProvider } from "@/contexts/BudgetContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FIRE Budget Dashboard",
  description: "Financial Independence, Retire Early planning tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <BudgetProvider>
          {children}
        </BudgetProvider>
      </body>
    </html>
  );
}
