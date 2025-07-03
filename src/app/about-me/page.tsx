import { AboutMe } from '../components/AboutMe';
import { aboutMe, aboutMeSubtitle, aboutMeTitle } from '../../../data/aboutMe';

export default function AboutMePage() {
  return <AboutMe title={aboutMeTitle} subtitle={aboutMeSubtitle} aboutMe={aboutMe} />;
}
