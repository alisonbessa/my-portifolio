import type { CareerEntry } from '../../../data/career';

type CareerProps = {
  title: string;
  subtitle: string;
  career: CareerEntry[];
};

export function Career({ title, subtitle, career }: CareerProps) {
  return (
    <section className="flex flex-col items-center py-12 w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-2">{title}</h2>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {career.map((entry) => (
          <div
            key={entry.slug}
            className="bg-card/80 dark:bg-white/10 rounded-2xl p-6 shadow-xl dark:shadow-[0_4px_32px_0_rgba(0,0,0,0.7)] border border-border/60 transition-colors max-w-md w-full mx-auto flex flex-col justify-between"
          >
            <article className="flex flex-col h-full">
              <h3 className="text-xl font-bold mb-1">
                <a
                  href={entry.companyLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-primary transition-colors"
                >
                  {entry.title}
                  <p className="text-primary font-semibold">@ {entry.company}</p>
                </a>
              </h3>
              <p className="text-muted-foreground text-sm mb-2">{entry.period}</p>
              <p className="mb-3 text-base text-foreground/90">{entry.description}</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                {entry.highlights.map((h, i) => (
                  <li key={i} className="text-muted-foreground text-sm">
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
