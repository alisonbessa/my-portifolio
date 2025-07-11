import { AboutMeEntry } from '../../../data/aboutMe';
import Timeline from './Timeline';
import TimelineEntry from './TimelineEntry';
import AboutMeTimelineImages from './AboutMeTimelineImages';
import AboutMeTimelineTags from './AboutMeTimelineTags';

type Props = {
  entries: AboutMeEntry[];
};

export default function AboutMeTimeline({ entries }: Props) {
  const renderAboutMeEntry = (entry: AboutMeEntry) => (
    <TimelineEntry
      leftContent={
        <h3 className="text-lg md:text-2xl font-bold text-neutral-500 dark:text-neutral-500">
          {entry.title}
        </h3>
      }
      rightContent={
        <div>
          <AboutMeTimelineImages images={entry.images} title={entry.title} />
          <p className="mb-3 text-lg text-foreground/90">{entry.description}</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            {entry.reflections.map((r, i) => (
              <li key={i} className="text-muted-foreground text-base">
                {r}
              </li>
            ))}
          </ul>
          <AboutMeTimelineTags tags={entry.tags} />
        </div>
      }
    />
  );

  return <Timeline entries={entries} renderEntry={renderAboutMeEntry} />;
}
