import type { JourneyEntry } from '../../../data/journey';

type JourneyProps = {
  title: string;
  subtitle: string;
  journey: JourneyEntry[];
};

export function Journey({ title, subtitle, journey }: JourneyProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <ul>
        {journey.map((entry) => (
          <li key={entry.slug}>
            <article>
              <h3>
                {entry.title} @ {entry.company}
              </h3>
              <p>{entry.period}</p>
              <p>{entry.description}</p>
              <ul>
                {entry.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
