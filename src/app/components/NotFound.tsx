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
    <div className="max-w-[700px] mx-auto p-6">
      <nav className="mb-6">
        <Link href={backHref}>{backLabel}</Link>
      </nav>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
}
