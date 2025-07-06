'use client';
import { aboutMe, aboutMeSubtitle, aboutMeTitle } from '../../../data/aboutMe';
import AboutMeTimeline from '../components/AboutMeTimeline';

export default function AboutMePage() {
  return (
    <div className="w-full font-sans">
      <div className="max-w-[940px] mx-auto pt-20 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-2 text-black dark:text-white">
          {aboutMeTitle}
        </h2>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto  dark:text-neutral-300">
          {aboutMeSubtitle}
        </p>
      </div>
      <AboutMeTimeline entries={aboutMe} />
    </div>
  );
}
