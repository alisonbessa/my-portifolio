import type { Project } from '../../../data/projects';
import { ProjectCard } from './ProjectCard';

type ProjectsProps = {
  title: string;
  subtitle: string;
  projects: Project[];
};

export function Projects({ title, subtitle, projects }: ProjectsProps) {
  return (
    <section className="flex flex-col items-center py-12 w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-2">{title}</h2>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
