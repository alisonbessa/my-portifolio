import { generateMetadata } from '@/lib/seo';
import { generatePageSEO } from '../../../data/seo';

const seoConfig = generatePageSEO('contact');
export const metadata = generateMetadata(seoConfig);

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
