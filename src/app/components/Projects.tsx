import type { Project } from '../../../data/projects';
import Link from 'next/link';
import { TagBadge } from './TagBadge';
import { T } from '../../../data/projects';

type ProjectsProps = {
  title: string;
  subtitle: string;
  projects: Project[];
};

export function Projects({ title, subtitle, projects }: ProjectsProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <ul>
        {projects.map((project) => {
          const techTags = (project.tags || []).filter((tag) => T[tag]?.type === 'tech');
          const softTags = (project.tags || []).filter((tag) => T[tag]?.type === 'soft');
          return (
            <li key={project.slug}>
              <article>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                )}
                {' | '}
                {project.repoUrl && !project.repoPrivate && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    Repository
                  </a>
                )}
                {project.repoPrivate && <span>Private Repository</span>}
                {' | '}
                <Link href={`/projects/${project.slug}`}>More details</Link>
                {project.details && (
                  <p>
                    <em>{project.details}</em>
                  </p>
                )}
                {techTags.length > 0 && (
                  <div className="flex flex-wrap mt-2">
                    <span className="mr-2 font-semibold text-sm">Tech Stack:</span>
                    {techTags.map((tag) => (
                      <TagBadge key={tag} tag={tag} />
                    ))}
                  </div>
                )}
                {softTags.length > 0 && (
                  <div className="flex flex-wrap mt-2">
                    <span className="mr-2 font-semibold text-sm">Soft Skills:</span>
                    {softTags.map((tag) => (
                      <TagBadge key={tag} tag={tag} />
                    ))}
                  </div>
                )}
                <p>Date: {project.date}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
