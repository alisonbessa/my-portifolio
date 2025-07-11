'use client';
import { career, careerTitle, careerSubtitle } from '../../../data/career';
import CareerTimeline from '../components/CareerTimeline';

export default function CareerPage() {
  return (
    <div className="w-full font-sans">
      <div className="max-w-[940px] mx-auto pt-20 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-2 text-black dark:text-white">
          {careerTitle}
        </h2>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto dark:text-neutral-300">
          {careerSubtitle}
        </p>
      </div>
      <CareerTimeline entries={career} />
    </div>
  );
}
