import { AboutMeEntry } from '../../../data/aboutMe';
import AboutMeTimelineImages from './AboutMeTimelineImages';
import AboutMeTimelineTags from './AboutMeTimelineTags';

type Props = {
  entry: AboutMeEntry;
};

export default function AboutMeTimelineEntry({ entry }: Props) {
  return (
    <div className="flex justify-start pt-10 md:pt-40 md:gap-10">
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
        </div>
        <h3 className="hidden md:block text-lg md:pl-20 md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 ">
          {entry.title}
        </h3>
      </div>
      <div className="relative pl-20 pr-4 md:pl-4 w-full max-w-[940px]">
        <h3 className="md:hidden block text-lg mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
          {entry.title}
        </h3>
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
    </div>
  );
}
