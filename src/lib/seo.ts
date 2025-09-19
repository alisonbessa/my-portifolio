import type { Metadata } from 'next';
import type { SEOConfig } from '../../data/seo';

export function generateMetadata(seoConfig: SEOConfig): Metadata {
  return {
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: seoConfig.keywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.author,
    robots: seoConfig.robots,
    openGraph: {
      type: seoConfig.type,
      title: seoConfig.title,
      description: seoConfig.description,
      url: seoConfig.url,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      images: [
        {
          url: seoConfig.image.url,
          width: seoConfig.image.width,
          height: seoConfig.image.height,
          alt: seoConfig.image.alt,
        },
      ],
    },
    twitter: {
      card: seoConfig.twitter.card,
      site: seoConfig.twitter.site,
      creator: seoConfig.twitter.creator,
      title: seoConfig.title,
      description: seoConfig.description,
      images: [seoConfig.image.url],
    },
    alternates: {
      canonical: seoConfig.canonical || seoConfig.url,
    },
    icons: {
      icon: [
        { url: '/profile1x1.png', sizes: '32x32', type: 'image/png' },
        { url: '/profile1x1.png', sizes: '16x16', type: 'image/png' },
        { url: '/profile1x1.png', sizes: 'any' },
      ],
      apple: [{ url: '/profile1x1.png', sizes: '180x180', type: 'image/png' }],
      other: [
        {
          rel: 'mask-icon',
          url: '/profile1x1.png',
          color: '#000000',
        },
      ],
    },
    manifest: '/site.webmanifest',
    other: {
      'msapplication-TileColor': '#000000',
      'msapplication-config': '/browserconfig.xml',
    },
  };
}

export function generateStructuredData(seoConfig: SEOConfig) {
  const baseUrl = seoConfig.url.replace(/\/$/, '');

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: seoConfig.author,
    jobTitle: 'Full Stack Developer',
    description: seoConfig.description,
    url: baseUrl,
    image: `${baseUrl}${seoConfig.image.url}`,
    sameAs: [
      'https://github.com/alisonbessa',
      'https://www.linkedin.com/in/alisonbessa/',
      'https://instagram.com/alisonbessa',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Docker',
      'Git',
      'REST APIs',
      'GraphQL',
      'Full Stack Development',
      'Web Development',
      'Software Engineering',
      'Frontend Development',
      'Backend Development',
      'Database Design',
      'UI/UX Implementation',
      'Responsive Web Design',
      'Mobile Development',
      'DevOps',
      'Agile Methodology',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Universidade Federal de Itajubá',
      alternateName: 'UNIFEI',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Freelancer',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Full Stack Developer',
      occupationalCategory: 'Software Development',
      skills: 'React, TypeScript, Next.js, Node.js, JavaScript, Python, Web Development',
    },
    nationality: {
      '@type': 'Country',
      name: 'Brazil',
    },
  };
}

export function generateBreadcrumbStructuredData(
  breadcrumbs: Array<{ name: string; url: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };
}
