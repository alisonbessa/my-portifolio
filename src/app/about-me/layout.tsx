import { generateMetadata } from '@/lib/seo';
import { generatePageSEO } from '../../../data/seo';

const seoConfig = generatePageSEO('about');
export const metadata = generateMetadata(seoConfig);

export default function AboutMeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
