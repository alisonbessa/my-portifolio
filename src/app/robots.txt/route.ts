import { defaultSEO } from '../../../data/seo';

export function GET() {
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${defaultSEO.url}/sitemap.xml
  `.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
