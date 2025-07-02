'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const THEME_KEY = 'theme';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem(THEME_KEY) as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      onClick={toggleTheme}
      className="bg-transparent border-none shadow-none outline-none p-0 m-0 flex items-center justify-center cursor-pointer text-foreground/80 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
