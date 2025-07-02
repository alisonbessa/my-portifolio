import type { Project } from '../../../data/projects';
import Link from 'next/link';

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
        {projects.map((project) => (
          <li key={project.slug}>
            <article>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Stack: {project.stack.join(', ')}</p>
              {project.demoUrl && (
                <>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                  {' | '}
                </>
              )}
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
              {project.tags && <p>Tags: {project.tags.join(', ')}</p>}
              <p>Date: {project.date}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
