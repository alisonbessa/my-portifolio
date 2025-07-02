const sections = [
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Professional Journey' },
  { id: 'personal-journey', label: 'Personal Journey' },
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', justifyContent: 'center', padding: '1rem' }}>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
