import { generateMetadata } from '@/lib/seo';
import { generatePageSEO } from '../../../data/seo';

const seoConfig = generatePageSEO('projects');
export const metadata = generateMetadata(seoConfig);

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
