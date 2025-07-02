import type { PersonalEntry } from '../../../data/personalJourney';
import Link from 'next/link';
import Image from 'next/image';

type PersonalJourneyProps = {
  title: string;
  subtitle: string;
  personalJourney: PersonalEntry[];
};

export function PersonalJourney({ title, subtitle, personalJourney }: PersonalJourneyProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <ul>
        {personalJourney.map((entry) => (
          <li key={entry.slug}>
            <article>
              <h3>
                <Link href={`/journey/${entry.slug}`}>{entry.title}</Link>
              </h3>
              <p>{entry.date}</p>
              {entry.image && (
                <Image
                  src={entry.image}
                  alt={entry.title}
                  width={200}
                  height={120}
                  style={{ maxWidth: 200 }}
                />
              )}
              <p>{entry.description}</p>
              <ul>
                {entry.reflections.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
              <p>Tags: {entry.tags.join(', ')}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
