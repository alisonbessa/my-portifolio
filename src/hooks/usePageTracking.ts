'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/components/GoogleAnalytics';
import { useAnalytics } from './useAnalytics';

export function usePageTracking() {
  const pathname = usePathname();
  const { trackTimeOnPage } = useAnalytics();
  const startTime = useRef<number>(Date.now());

  useEffect(() => {
    trackPageView(pathname);
    startTime.current = Date.now();

    return () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      if (timeSpent > 5) {
        trackTimeOnPage(timeSpent, pathname);
      }
    };
  }, [pathname, trackTimeOnPage]);
}
