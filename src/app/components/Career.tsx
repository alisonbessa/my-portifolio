import type { CareerEntry } from '../../../data/career';
import Link from 'next/link';

type CareerProps = {
  title: string;
  subtitle: string;
  career: CareerEntry[];
};

export function Career({ title, subtitle, career }: CareerProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <ul>
        {career.map((entry) => (
          <li key={entry.slug}>
            <article>
              <h3>
                <Link href={`/career/${entry.slug}`}>
                  {entry.title} @ {entry.company}
                </Link>
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
