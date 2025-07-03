import { aboutMe, AboutMeEntry } from '../../../../data/aboutMe';
import Link from 'next/link';
import Image from 'next/image';
import { NotFound } from '../../components/NotFound';

export default async function AboutMeDetailPage({ params }: { params: { slug: string } }) {
  const entry = (aboutMe as AboutMeEntry[]).find((p) => p.slug === params.slug);

  if (!entry) {
    return (
      <NotFound
        backHref="/about-me"
        backLabel="← Back to About Me"
        message="The requested entry was not found."
      />
    );
  }

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <nav style={{ marginBottom: 24 }}>
        <Link href="/about-me">← Back to About Me</Link>
      </nav>
      <h1>{entry.title}</h1>
      <p>
        <strong>Date:</strong> {entry.date}
      </p>
      {entry.image && (
        <Image
          src={entry.image}
          alt={entry.title}
          width={400}
          height={250}
          style={{ maxWidth: 400, borderRadius: 8, height: 'auto' }}
        />
      )}
      <p>{entry.description}</p>
      <section>
        <h2>Reflections</h2>
        <ul>
          {entry.reflections.map((r: string, i: number) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>
      <p>
        <strong>Tags:</strong> {entry.tags.join(', ')}
      </p>
    </div>
  );
}
