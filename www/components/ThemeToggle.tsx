'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonStar, SunMedium } from 'lucide-react';

const labels = {
  light: 'Claro',
  dark: 'Escuro',
};

import React from 'react';
export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const activeTheme = resolvedTheme || theme || 'light';
  const isDark = activeTheme === 'dark';

  const nextTheme = isDark ? 'light' : 'dark';

  return (
    <button
      type="button"
      aria-label="Alternar tema"
      title={`Ativar tema ${labels[nextTheme as keyof typeof labels]}`}
      onClick={() => setTheme(nextTheme)}
      className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-transparent px-3 py-2 text-sm font-semibold text-white"
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-emerald-200 to-lime-200 text-emerald-800 transition duration-300 ${
          isDark ? 'scale-110' : 'scale-100'
        }`}
      >
        {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
      </span>
      <span className="whitespace-nowrap opacity-80 transition duration-300 group-hover:opacity-100">
        {labels[isDark ? 'light' : 'dark']}
      </span>
    </button>
  );
}
