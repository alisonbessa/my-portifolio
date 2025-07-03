import { Projects } from '../components/Projects';
import { projects, projectsTitle, projectsSubtitle } from '../../../data/projects';

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <Projects title={projectsTitle} subtitle={projectsSubtitle} projects={projects} />
    </main>
  );
}
