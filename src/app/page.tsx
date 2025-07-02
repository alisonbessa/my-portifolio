import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { PersonalJourney } from './components/PersonalJourney';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { homeTitle, homeSubtitle, homeDescription } from '../../data/home';
import { skills, skillsTitle, skillsSubtitle } from '../../data/skills';
import { projects, projectsTitle, projectsSubtitle } from '../../data/projects';
import { journey, journeyTitle, journeySubtitle } from '../../data/journey';
import { socials, socialsTitle, socialsSubtitle } from '../../data/socials';
import {
  personalJourney,
  personalJourneyTitle,
  personalJourneySubtitle,
} from '../../data/personalJourney';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero title={homeTitle} subtitle={homeSubtitle} description={homeDescription} />
      <section id="skills">
        <Skills title={skillsTitle} subtitle={skillsSubtitle} skills={skills} />
      </section>
      <section id="projects">
        <Projects title={projectsTitle} subtitle={projectsSubtitle} projects={projects} />
      </section>
      <section id="journey">
        <Journey title={journeyTitle} subtitle={journeySubtitle} journey={journey} />
      </section>
      <section id="personal-journey">
        <PersonalJourney
          title={personalJourneyTitle}
          subtitle={personalJourneySubtitle}
          personalJourney={personalJourney}
        />
      </section>
      <section id="contact">
        <Footer title={socialsTitle} subtitle={socialsSubtitle} socials={socials} />
      </section>
    </main>
  );
}
