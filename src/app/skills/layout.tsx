import { generateMetadata } from '@/lib/seo';
import { generatePageSEO } from '../../../data/seo';

const seoConfig = generatePageSEO('skills');
export const metadata = generateMetadata(seoConfig);

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
