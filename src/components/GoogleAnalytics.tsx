'use client';

import { GoogleAnalytics as GA } from '@next/third-parties/google';
import { useEffect, useState } from 'react';

interface GoogleAnalyticsProps {
  gaId: string;
}

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ga-consent');
    if (consent === 'accepted') {
      setHasConsent(true);
    }
  }, []);

  if (!gaId || !hasConsent || process.env.NODE_ENV !== 'production') {
    return null;
  }

  return <GA gaId={gaId} />;
}

export function trackEvent(
  eventName: string,
  parameters?: Record<string, string | number | boolean>,
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
}

export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      page_path: url,
    });
  }
}
