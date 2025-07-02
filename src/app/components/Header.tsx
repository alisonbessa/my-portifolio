'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { Home, Code2, Briefcase, User, Mail } from 'lucide-react';

const sections = [
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'journey', label: 'Professional Journey', icon: User },
  { id: 'personal-journey', label: 'Personal Journey', icon: Home },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function Header() {
  const [active, setActive] = useState(sections[0].id);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (sections.some((s) => s.id === hash)) {
        setActive(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash.replace('#', '');
      if (sections.some((s) => s.id === hash)) {
        setActive(hash);
        return;
      }
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          sectionRefs.current[sections[i].id] = el;
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            setActive(sections[i].id);
            break;
          }
        }
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        setActive('contact');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center pointer-events-none',
        'pt-4',
      )}
      aria-label="Main navigation"
    >
      <motion.nav
        layout
        className={cn(
          'flex items-center gap-1 px-3 py-1 rounded-full border border-border bg-white/20 backdrop-blur-sm shadow-sm pointer-events-auto',
          'max-w-fit',
        )}
        role="navigation"
      >
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = active === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-label={section.label}
              aria-current={isActive ? 'page' : undefined}
              tabIndex={0}
              className={cn(
                'relative flex items-center gap-2 px-4 py-2 font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary/60',
                isMobile ? 'justify-center' : '',
                isActive
                  ? 'bg-white/40 border border-border shadow-sm dark:shadow-[0_2px_8px_0_rgba(255,255,255,0.1)] dark:bg-black/70 text-primary'
                  : 'bg-transparent border-none shadow-none text-foreground/80 hover:text-primary',
                'rounded-full cursor-pointer select-none',
                !isActive && 'hover:bg-transparent',
              )}
              onClick={() => {
                setActive(section.id);
                window.location.hash = section.id;
              }}
            >
              <span className="md:hidden">
                <Icon size={20} strokeWidth={2.2} />
              </span>
              <span className="hidden md:inline">{section.label}</span>
              {isActive && (
                <motion.div
                  layoutId="header-active"
                  className="absolute left-0 top-0 h-full w-full bg-white/40 border border-border rounded-full shadow-sm dark:shadow-[0_2px_8px_0_rgba(255,255,255,0.08)] -z-10"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  style={{ top: 0, bottom: 0 }}
                />
              )}
            </a>
          );
        })}
        <ThemeToggleWrapper />
      </motion.nav>
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
      <ThemeToggleSimple />
    </div>
  );
}

function ThemeToggleSimple() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      aria-label="Alternar tema"
      className={cn(
        'cursor-pointer p-0 m-0 bg-transparent border-none shadow-none outline-none flex items-center justify-center',
        hovered ? 'text-primary' : 'text-foreground/80',
        'transition-colors focus-visible:ring-2 focus-visible:ring-primary/60',
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
    >
      <ThemeToggle />
    </button>
  );
}
