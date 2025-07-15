'use client';
import { Project } from '../../../data/projects';
import Timeline from './Timeline';
import { TimelineEntry } from './TimelineEntry';
import { TagBadge } from './TagBadge';
import { T } from '../../../data/projects';

type ProjectTimelineEntry = {
  slug: string;
  title: string;
  content: React.ReactNode;
};

type Props = {
  project: Project;
};

export default function ProjectTimeline({ project }: Props) {
  const techTags = (project.tags || []).filter((tag) => T[tag]?.type === 'tech');
  const softTags = (project.tags || []).filter((tag) => T[tag]?.type === 'soft');

  const timelineEntries: ProjectTimelineEntry[] = [];

  timelineEntries.push({
    slug: 'overview',
    title: 'Overview',
    content: (
      <TimelineEntry
        leftContent={
          <div>
            <h3 className="text-lg md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 mb-1">
              Overview
            </h3>
          </div>
        }
        rightContent={
          <div>
            <div className="mb-6">
              <p className="text-lg mb-4 text-foreground/90">{project.description}</p>
              <div className="flex flex-wrap gap-4 mb-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    View Demo
                  </a>
                )}
                {project.repoUrl && !project.repoPrivate && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors"
                  >
                    View Code
                  </a>
                )}
                {project.repoPrivate && (
                  <span className="px-4 py-2 bg-muted text-muted-foreground rounded-md">
                    Private Repository
                  </span>
                )}
              </div>
            </div>
          </div>
        }
        isFirst={true}
      />
    ),
  });

  if (techTags.length > 0 || softTags.length > 0) {
    timelineEntries.push({
      slug: 'tech-stack',
      title: 'Tech Stack',
      content: (
        <TimelineEntry
          leftContent={
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 mb-1">
                Tech Stack
              </h3>
            </div>
          }
          rightContent={
            <div className="space-y-4">
              {techTags.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {techTags.map((tag) => (
                      <TagBadge key={tag} tag={tag} />
                    ))}
                  </div>
                </div>
              )}
              {softTags.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold mb-3">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {softTags.map((tag) => (
                      <TagBadge key={tag} tag={tag} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          }
        />
      ),
    });
  }

  if (project.motivation) {
    timelineEntries.push({
      slug: 'motivation',
      title: 'Motivation',
      content: (
        <TimelineEntry
          leftContent={
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 mb-1">
                Motivation
              </h3>
            </div>
          }
          rightContent={
            <div>
              <p className="text-lg text-foreground/90">{project.motivation}</p>
            </div>
          }
        />
      ),
    });
  }

  if (project.challenges && project.challenges.length > 0) {
    timelineEntries.push({
      slug: 'challenges',
      title: 'Challenges',
      content: (
        <TimelineEntry
          leftContent={
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 mb-1">
                Challenges
              </h3>
            </div>
          }
          rightContent={
            <div>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-base text-foreground/90">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
        />
      ),
    });
  }

  if (project.learnings && project.learnings.length > 0) {
    timelineEntries.push({
      slug: 'learnings',
      title: 'Learnings',
      content: (
        <TimelineEntry
          leftContent={
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 mb-1">
                Learnings
              </h3>
            </div>
          }
          rightContent={
            <div>
              <ul className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span className="text-base text-foreground/90">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
        />
      ),
    });
  }

  if (project.details && Object.keys(project.details).length > 0) {
    Object.entries(project.details).forEach(([section, content]) => {
      timelineEntries.push({
        slug: `details-${section.toLowerCase().replace(/\s+/g, '-')}`,
        title: section,
        content: (
          <TimelineEntry
            leftContent={
              <div>
                <h3 className="text-lg md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 mb-1">
                  {section}
                </h3>
              </div>
            }
            rightContent={
              <div>
                <p className="text-base text-foreground/90 leading-relaxed">{content}</p>
              </div>
            }
          />
        ),
      });
    });
  }

  const renderEntry = (entry: ProjectTimelineEntry) => entry.content;

  return <Timeline entries={timelineEntries} renderEntry={renderEntry} />;
}
