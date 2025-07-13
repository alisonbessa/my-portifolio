import { CareerEntry } from '../../../data/career';
import Timeline from './Timeline';
import { TimelineEntry } from './TimelineEntry';

type Props = {
  entries: CareerEntry[];
};

export default function CareerTimeline({ entries }: Props) {
  const renderCareerEntry = (entry: CareerEntry) => (
    <TimelineEntry
      leftContent={
        <div>
          <h3 className="text-lg md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 mb-1">
            {entry.company}
          </h3>
          <p className="text-sm text-muted-foreground">{entry.period}</p>
        </div>
      }
      rightContent={
        <div>
          <h4 className="text-xl font-bold mb-2 text-primary">
            <a
              href={entry.companyLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-primary transition-colors"
            >
              {entry.title}
            </a>
          </h4>
          <p className="mb-3 text-lg text-foreground/90">{entry.description}</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            {entry.highlights.map((highlight, i) => (
              <li key={i} className="text-muted-foreground text-base">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      }
    />
  );

  return <Timeline entries={entries} renderEntry={renderCareerEntry} />;
}
