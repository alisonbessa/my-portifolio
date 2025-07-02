import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../../../data/projects';
import Image from 'next/image';

type ProjectPageProps = {
  params: { slug: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <nav style={{ marginBottom: 24 }}>
        <Link href="/">← Back to Home</Link>
      </nav>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {project.thumbnail && (
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={600}
          height={340}
          style={{ borderRadius: 8 }}
        />
      )}
      <section>
        <h2>Stack</h2>
        <ul>
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {project.tags && (
          <p>
            <strong>Tags:</strong> {project.tags.join(', ')}
          </p>
        )}
        <p>
          <strong>Date:</strong> {project.date}
        </p>
      </section>
      {project.details && (
        <section>
          <h2>Details</h2>
          <p>{project.details}</p>
        </section>
      )}
      {project.motivation && (
        <section>
          <h2>Motivation</h2>
          <p>{project.motivation}</p>
        </section>
      )}
      {project.challenges && project.challenges.length > 0 && (
        <section>
          <h2>Challenges</h2>
          <ul>
            {project.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </section>
      )}
      {project.learnings && project.learnings.length > 0 && (
        <section>
          <h2>Learnings</h2>
          <ul>
            {project.learnings.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </section>
      )}
      <section style={{ marginTop: 24 }}>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: 16 }}
          >
            Live Demo
          </a>
        )}
        {project.repoUrl && !project.repoPrivate && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            Repository
          </a>
        )}
        {project.repoPrivate && (
          <span style={{ color: 'red', marginLeft: 8 }}>Private Repository</span>
        )}
      </section>
    </main>
  );
}
