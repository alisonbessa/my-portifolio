import type { AboutMeEntry } from '../../../data/aboutMe';
import Link from 'next/link';
import Image from 'next/image';

type AboutMeProps = {
  title: string;
  subtitle: string;
  aboutMe: AboutMeEntry[];
};

export function AboutMe({ title, subtitle, aboutMe }: AboutMeProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <ul>
        {aboutMe.map((entry) => (
          <li key={entry.slug}>
            <article>
              <h3>
                <Link href={`/about-me/${entry.slug}`}>{entry.title}</Link>
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
