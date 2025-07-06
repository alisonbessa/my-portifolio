'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { Home as HomeIcon, Code2, Briefcase, User, Mail } from 'lucide-react';
import Link from 'next/link';

const sections = [
  { id: 'home', label: 'Home', icon: HomeIcon, href: '/' },
  { id: 'skills', label: 'Skills', icon: Code2, href: '/skills' },
  { id: 'career', label: 'Career', icon: User, href: '/career' },
  { id: 'projects', label: 'Projects', icon: Briefcase, href: '/projects' },
  { id: 'about-me', label: 'About Me', icon: Mail, href: '/about-me' },
  { id: 'contact', label: 'Contact', icon: Mail, href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <header
      className={cn(
        'fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center pointer-events-none',
        'pt-4',
      )}
      aria-label="Main navigation"
    >
      <nav
        className={cn(
          'flex items-center md:gap-1 px-3 py-1 rounded-full border border-border bg-white/20 backdrop-blur-sm shadow-sm pointer-events-auto',
          'max-w-fit',
        )}
        role="navigation"
      >
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive =
            section.href === '/' ? pathname === '/' : pathname.startsWith(section.href);
          return (
            <Link
              key={section.id}
              href={section.href}
              aria-label={section.label}
              aria-current={isActive ? 'page' : undefined}
              tabIndex={0}
              className={cn(
                'relative flex items-center gap-2 px-3 md:px-4 py-2 font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary/60',
                isMobile ? 'justify-center' : '',
                isActive
                  ? 'bg-white/40 border border-border shadow-sm dark:shadow-[0_2px_8px_0_rgba(255,255,255,0.1)] dark:bg-black/70 text-primary'
                  : 'bg-transparent border-none shadow-none text-foreground/80 hover:text-primary',
                'rounded-full cursor-pointer select-none',
                !isActive && 'hover:bg-transparent',
                'transition-all duration-300 ease-out',
              )}
            >
              <span className="md:hidden transition-all duration-300 ease-out">
                <Icon size={20} strokeWidth={2.2} />
              </span>
              <span className="hidden md:inline transition-all duration-300 ease-out">
                {section.label}
              </span>
              {isActive && (
                <span
                  className="absolute left-0 top-0 h-full w-full bg-white/40 border border-border rounded-full shadow-sm dark:shadow-[0_2px_8px_0_rgba(255,255,255,0.08)] -z-10 transition-all duration-300 ease-out"
                  style={{ top: 0, bottom: 0 }}
                />
              )}
            </Link>
          );
        })}
        <ThemeToggleWrapper />
      </nav>
    </header>
  );
}

function ThemeToggleWrapper() {
  return (
    <div
      className={cn(
        'flex items-center justify-center px-2 md:px-3',
        'bg-transparent border-none shadow-none',
      )}
    >
      <ThemeToggle />
    </div>
  );
}
