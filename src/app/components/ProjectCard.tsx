import type { Project } from '../../../data/projects';
import { TagBadge } from './TagBadge';
import Image from 'next/image';
import { T } from '../../../data/projects';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: Project }) {
  const techTags = (project.tags || []).filter((tag) => T[tag]?.type === 'tech');
  const softTags = (project.tags || []).filter((tag) => T[tag]?.type === 'soft');
  return (
    <div className="bg-card/80 dark:bg-white/10 rounded-2xl p-6 shadow-xl dark:shadow-[0_4px_32px_0_rgba(0,0,0,0.7)] border border-border/60 transition-colors max-w-md w-full mx-auto flex flex-col justify-between">
      <article className="flex flex-col h-full">
        {project.thumbnail ? (
          <div className="mb-3 w-full flex justify-center">
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={320}
              height={180}
              className="rounded-lg object-cover max-h-40 w-full"
            />
          </div>
        ) : (
          <div className="mb-3 w-full flex justify-center" style={{ height: 180 }} />
        )}
        <h3 className="text-xl font-bold mb-1 text-primary">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:underline hover:text-primary transition-colors"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mb-3 text-base text-foreground/90">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {techTags.length > 0 && (
            <>
              <span className="mr-2 font-semibold text-sm">Tech Stack:</span>
              {techTags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {softTags.length > 0 && (
            <>
              <span className="mr-2 font-semibold text-sm">Soft Skills:</span>
              {softTags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </>
          )}
        </div>
        <div className="flex flex-wrap gap-4 mt-auto pt-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary hover:text-primary/80 text-sm"
            >
              Demo
            </a>
          )}
          {project.repoUrl && !project.repoPrivate && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary hover:text-primary/80 text-sm"
            >
              Repository
            </a>
          )}
          {project.repoPrivate && (
            <span className="text-muted-foreground text-sm">Private Repository</span>
          )}
        </div>
      </article>
    </div>
  );
}
