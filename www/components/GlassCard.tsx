import type { ReactNode } from "react";

export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[1.75rem] rounded-[1.75rem] border border-white/10 bg-white/50 shadow-[0_8px_32px_-8px_rgba(15,23,42,0.07)] backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.18)] ${className}`}
    >
      {children}
    </div>
  );
}
