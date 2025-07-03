export const aboutMeTitle = 'Personal Journey';
export const aboutMeSubtitle =
  'Stories, challenges, and lessons learned outside the professional environment.';

export type AboutMeEntry = {
  slug: string;
  title: string;
  date: string;
  image?: string;
  description: string;
  reflections: string[];
  tags: string[];
};

export const aboutMe: AboutMeEntry[] = [
  {
    slug: 'marathon-challenge',
    title: 'Completing My First Marathon',
    date: '2022-10-15',
    image: '/images/personal/marathon.png',
    description:
      'A journey of discipline and perseverance to finish a full marathon after months of training.',
    reflections: [
      'Consistency beats motivation.',
      'Small daily efforts lead to big achievements.',
      'Physical challenges build mental strength.',
    ],
    tags: ['Discipline', 'Endurance', 'Routine'],
  },
  {
    slug: 'digital-detox-week',
    title: 'A Week Without Social Media',
    date: '2023-03-05',
    image: '/images/personal/detox.png',
    description:
      'Taking a break from digital distractions to reconnect with offline activities and mindfulness.',
    reflections: ['Mindful breaks improve focus.', 'Offline time enhances creativity.'],
    tags: ['Wellness', 'Routine', 'Mindfulness'],
  },
];
