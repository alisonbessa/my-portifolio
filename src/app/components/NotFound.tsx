import Link from 'next/link';

export function NotFound({
  backHref = '/',
  backLabel = '← Back to Home',
  title = 'Page not found',
  message = 'The requested resource was not found.',
}: {
  backHref?: string;
  backLabel?: string;
  title?: string;
  message?: string;
}) {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <nav style={{ marginBottom: 24 }}>
        <Link href={backHref}>{backLabel}</Link>
      </nav>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
}
