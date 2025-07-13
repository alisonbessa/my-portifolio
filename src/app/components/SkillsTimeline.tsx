import { SkillCategory } from '../../../data/skills';
import Timeline from './Timeline';
import { TimelineEntry } from './TimelineEntry';

type Props = {
  entries: SkillCategory[];
};

export default function SkillsTimeline({ entries }: Props) {
  const renderSkillEntry = (entry: SkillCategory) => (
    <TimelineEntry
      leftContent={
        <div>
          <h3 className="text-lg md:text-2xl font-bold text-neutral-500 dark:text-neutral-500 mb-1">
            {entry.title}
          </h3>
          <p className="text-sm text-muted-foreground">{entry.period}</p>
        </div>
      }
      rightContent={
        <div>
          <p className="mb-4 text-lg text-foreground/90">{entry.description}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {entry.skills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-card/40 dark:bg-white/5 rounded-lg border border-border/30"
              >
                <span className="font-semibold text-foreground">{skill.name}</span>
                {skill.level && (
                  <span
                    className={`text-sm px-2 py-1 rounded-full ${
                      skill.level === 'advanced'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : skill.level === 'intermediate'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                    }`}
                  >
                    {skill.level}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      }
    />
  );

  return <Timeline entries={entries} renderEntry={renderSkillEntry} />;
}
