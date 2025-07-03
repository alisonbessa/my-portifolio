import { AboutMe } from '../components/AboutMe';
import { aboutMe, aboutMeSubtitle, aboutMeTitle } from '../../../data/aboutMe';

export default function AboutMePage() {
  return (
    <main className="pt-20">
      <AboutMe title={aboutMeTitle} subtitle={aboutMeSubtitle} aboutMe={aboutMe} />
    </main>
  );
}
