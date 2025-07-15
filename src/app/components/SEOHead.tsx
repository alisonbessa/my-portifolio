'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { generateBreadcrumbStructuredData } from '@/lib/seo';
import { defaultSEO } from '../../../data/seo';

interface SEOHeadProps {
  title?: string;
  description?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  additionalStructuredData?: object;
}

export function SEOHead({
  title,
  description,
  breadcrumbs,
  additionalStructuredData,
}: SEOHeadProps) {
  const pathname = usePathname();

  const pageTitle = title || defaultSEO.title;
  const pageDescription = description || defaultSEO.description;
  const currentUrl = `${defaultSEO.url}${pathname}`;

  const breadcrumbData = breadcrumbs ? generateBreadcrumbStructuredData(breadcrumbs) : null;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={currentUrl} />

      {breadcrumbData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData),
          }}
        />
      )}

      {additionalStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(additionalStructuredData),
          }}
        />
      )}
    </Head>
  );
}
