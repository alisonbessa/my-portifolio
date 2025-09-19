'use client';

import { useCallback } from 'react';
import { trackEvent } from '@/components/GoogleAnalytics';

export function useAnalytics() {
  const trackClick = useCallback((elementName: string, elementCategory?: string) => {
    trackEvent('click', {
      element_name: elementName,
      element_category: elementCategory || 'general',
    });
  }, []);

  const trackDownload = useCallback((fileName: string) => {
    trackEvent('file_download', {
      file_name: fileName,
    });
  }, []);

  const trackExternalLink = useCallback((url: string, linkText: string) => {
    trackEvent('external_link', {
      link_url: url,
      link_text: linkText,
    });
  }, []);

  const trackProjectView = useCallback((projectSlug: string, projectTitle: string) => {
    trackEvent('project_view', {
      project_slug: projectSlug,
      project_title: projectTitle,
    });
  }, []);

  const trackScrollDepth = useCallback((percentage: number) => {
    trackEvent('scroll_depth', {
      scroll_percentage: percentage,
    });
  }, []);

  const trackTimeOnPage = useCallback((timeInSeconds: number, page: string) => {
    trackEvent('time_on_page', {
      time_seconds: timeInSeconds,
      page_name: page,
    });
  }, []);

  return {
    trackClick,
    trackDownload,
    trackExternalLink,
    trackProjectView,
    trackScrollDepth,
    trackTimeOnPage,
  };
}
