import { socials } from '../../../data/socials';

export default function ContactPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <ul className="space-y-2">
        {socials.map((s) => (
          <li key={s.platform}>
            <a
              href={s.url}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.platform}: {s.url.replace('mailto:', '').replace('https://', '')}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
