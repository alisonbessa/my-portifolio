import { career, CareerEntry } from '../../../../data/career';
import Link from 'next/link';
import { NotFound } from '../../components/NotFound';

export default async function CareerDetailPage({ params }: { params: { slug: string } }) {
  const entry = (career as CareerEntry[]).find((j) => j.slug === params.slug);

  if (!entry) {
    return (
      <NotFound
        backHref="/career"
        backLabel="← Back to Career"
        message="The requested role or experience was not found."
      />
    );
  }

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <nav style={{ marginBottom: 24 }}>
        <Link href="/career">← Back to Career</Link>
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
          {entry.highlights.map((h: string, i: number) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
