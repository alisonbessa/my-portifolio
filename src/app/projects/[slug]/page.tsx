import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../../../data/projects';
import ProjectTimeline from '../../components/ProjectTimeline';
import Image from 'next/image';
import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { defaultSEO } from '../../../../data/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return generateSEOMetadata(defaultSEO);
  }

  const seoConfig = {
    ...defaultSEO,
    title: `${project.title} | Alison Bessa`,
    description:
      project.description ||
      `Project ${project.title} developed by Alison Bessa. See details, technologies used and results achieved.`,
    url: `${defaultSEO.url}/projects/${project.slug}`,
    keywords: [
      ...defaultSEO.keywords,
      project.title,
      'project',
      'development',
      ...(project.tags || []),
    ],
    image: {
      ...defaultSEO.image,
      url: project.thumbnail || defaultSEO.image.url,
      alt: `${project.title} - Alison Bessa`,
    },
  };

  return generateSEOMetadata(seoConfig);
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="w-full font-sans">
      <div className="max-w-[940px] mx-auto pt-5 lg:pt-20">
        <nav className="mb-6">
          <Link
            href="/projects"
            className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
          >
            ← Back to Projects
          </Link>
        </nav>
        {project.thumbnail && (
          <div className="mb-8">
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={800}
              height={400}
              className="rounded-lg object-cover w-full max-h-96"
            />
          </div>
        )}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-2 text-black dark:text-white">
            {project.title}
          </h1>
        </div>
      </div>
      <ProjectTimeline project={project} />
    </div>
  );
}
