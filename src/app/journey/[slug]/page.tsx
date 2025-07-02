import { journey } from '../../../../data/journey';
import { personalJourney } from '../../../../data/personalJourney';
import Link from 'next/link';
import Image from 'next/image';

export default function JourneyDetailPage({ params }: { params: { slug: string } }) {
  const entry = journey.find((j) => j.slug === params.slug);
  const personal = personalJourney.find((p) => p.slug === params.slug);

  if (!entry && !personal) {
    return (
      <main style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
        <nav style={{ marginBottom: 24 }}>
          <Link href="/">← Back to Home</Link>
        </nav>
        <h1>Page not found</h1>
        <p>The requested role or experience was not found.</p>
      </main>
    );
  }

  if (entry) {
    return (
      <main style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
        <nav style={{ marginBottom: 24 }}>
          <Link href="/">← Back to Home</Link>
        </nav>
        <h1>
          {entry.title} @ {entry.company}
        </h1>
        <p>
          <strong>Period:</strong> {entry.period}
        </p>
        <p>{entry.description}</p>
        <section>
          <h2>Highlights</h2>
          <ul>
            {entry.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </section>
      </main>
    );
  }

  // Personal Journey
  if (!personal) return null;
  return (
    <main style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <nav style={{ marginBottom: 24 }}>
        <Link href="/">← Back to Home</Link>
      </nav>
      <h1>{personal.title}</h1>
      <p>
        <strong>Date:</strong> {personal.date}
      </p>
      {personal.image && (
        <Image
          src={personal.image}
          alt={personal.title}
          width={400}
          height={250}
          style={{ maxWidth: 400, borderRadius: 8, height: 'auto' }}
        />
      )}
      <p>{personal.description}</p>
      <section>
        <h2>Reflections</h2>
        <ul>
          {personal.reflections.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>
      <p>
        <strong>Tags:</strong> {personal.tags.join(', ')}
      </p>
    </main>
  );
}
