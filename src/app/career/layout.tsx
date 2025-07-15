import { generateMetadata } from '@/lib/seo';
import { generatePageSEO } from '../../../data/seo';

const seoConfig = generatePageSEO('career');
export const metadata = generateMetadata(seoConfig);

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
