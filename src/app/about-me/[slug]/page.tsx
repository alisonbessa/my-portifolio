import { aboutMe, AboutMeEntry } from '../../../../data/aboutMe';
import Link from 'next/link';
import Image from 'next/image';
import { NotFound } from '../../components/NotFound';

export function generateStaticParams() {
  return aboutMe.map((entry) => ({
    slug: entry.slug,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AboutMeDetailPage(props: any) {
  const { params } = props;
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
    <div className="max-w-[700px] mx-auto p-6">
      <nav className="mb-6">
        <Link href="/about-me">← Back to About Me</Link>
      </nav>
      <h1>{entry.title}</h1>
      {entry.images && entry.images.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          {entry.images.map((img) => (
            <Image
              key={img}
              src={img}
              alt={entry.title}
              width={400}
              height={250}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,42,53,0.06),_0_1px_1px_rgba(0,0,0,0.05),_0_0_0_1px_rgba(34,42,53,0.04),_0_0_4px_rgba(34,42,53,0.08),_0_16px_68px_rgba(47,48,55,0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          ))}
        </div>
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
