import { contact } from '../../../data/contact';

export default function ContactPage() {
  return (
    <main className="pt-20 max-w-xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-6">{contact.message}</p>
      <ul className="space-y-2">
        <li>
          <a
            href={`mailto:${contact.email}`}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email: {contact.email}
          </a>
        </li>
        <li>
          <a
            href={contact.linkedin}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn: {contact.linkedin.replace('https://', '')}
          </a>
        </li>
        <li>
          <a
            href={contact.github}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub: {contact.github.replace('https://', '')}
          </a>
        </li>
      </ul>
    </main>
  );
}
