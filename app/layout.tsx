import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProviders } from "./theme-provider";

export const metadata: Metadata = {
  title: "Leena | Assistente de compra diária",
  description: "Assistente de compras para vendedores informais da metropolitanea de Maputo",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className="bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}
