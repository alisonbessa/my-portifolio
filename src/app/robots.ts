import type { MetadataRoute } from 'next';
import { defaultSEO } from '../../data/seo';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${defaultSEO.url}/sitemap.xml`,
  };
}
