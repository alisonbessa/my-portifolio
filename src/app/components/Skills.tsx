import type { Skill } from '../../../data/skills';

const categoryEmojis: Record<string, string> = {
  Frontend: '🎨',
  Backend: '🛠️',
  Database: '🗄️',
  Language: '💻',
  Testing: '🧪',
  Styling: '🎀',
  DevOps: '⚙️',
  Mobile: '📱',
  Cloud: '☁️',
  Architecture: '🏗️',
  'Auth & Security': '🔒',
  'Product & Analytics': '📊',
  Collaboration: '🤝',
  Other: '✨',
};

type SkillsProps = {
  title: string;
  subtitle: string;
  skills: Skill[];
};

export function Skills({ title, subtitle, skills }: SkillsProps) {
  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const cat = skill.category || 'Other';
    acc[cat] = acc[cat] || [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return (
    <section className="flex flex-col items-center py-12 w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-2">{title}</h2>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {Object.entries(grouped).map(([category, items]) => (
          <div
            key={category}
            className="bg-card/80 dark:bg-white/10 rounded-2xl p-6 shadow-xl dark:shadow-[0_4px_32px_0_rgba(0,0,0,0.7)] border border-border/60 transition-colors max-w-md w-full mx-auto"
          >
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <span>{categoryEmojis[category] || '✨'}</span>
              {category}
            </h3>
            <ul className="flex flex-col gap-1">
              {items.map((skill) => (
                <li key={skill.name} className="">
                  <span className="font-semibold">{skill.name}</span>
                  {skill.level && (
                    <span className="text-muted-foreground text-sm ml-2">{skill.level}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
