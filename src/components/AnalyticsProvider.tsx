'use client';

import { useScrollTracking } from '@/hooks/useScrollTracking';
import { usePageTracking } from '@/hooks/usePageTracking';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useScrollTracking();
  usePageTracking();

  return <>{children}</>;
}
