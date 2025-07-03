import { Hero } from './components/Hero';
import { homeTitle, homeSubtitle, homeDescription, resumeLink } from '../../data/home';

export default function Home() {
  return (
    <Hero
      title={homeTitle}
      subtitle={homeSubtitle}
      description={homeDescription}
      resumeLink={resumeLink}
    />
  );
}
