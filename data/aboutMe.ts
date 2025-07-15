export const aboutMeTitle = 'Personal Journey';
export const aboutMeSubtitle =
  'Stories, challenges, and lessons learned outside the professional environment.';

export type AboutMeEntry = {
  slug: string;
  title: string;
  images?: string[];
  description: string;
  reflections: string[];
  tags: string[];
};

export const aboutMe: AboutMeEntry[] = [
  {
    slug: 'born-curious',
    title: 'Born Curious, Raised to Build',
    images: ['/images/about/1.png'],
    description:
      "I grew up in a modest neighborhood, and one of my first gifts was a set of screwdrivers. My parents couldn't always pay for help, so I saw them fix and create things with their own hands. That shaped how I see learning and self-reliance.",
    reflections: [
      'Curiosity drives long-term growth.',
      'Fixing things teaches creativity and persistence.',
      'Being resourceful matters more than having resources.',
    ],
    tags: ['Curiosity', 'Creativity', 'Resilience'],
  },
  {
    slug: 'martial-arts-journey',
    title: 'Finding Discipline Through Martial Arts',
    images: ['/images/about/2.png'],
    description:
      "I joined a capoeira project to build confidence and ended up discovering a lifelong respect for martial arts. Since then, I've trained kickboxing, muay thai, and now jiu-jitsu.",
    reflections: [
      'Discipline is built in silence, not in noise.',
      'Martial arts balance intensity with control.',
      'Training the body sharpens the mind.',
    ],
    tags: ['Discipline', 'Confidence', 'Consistency'],
  },
  {
    slug: 'creative-competitions',
    title: 'Bridge Building, Robot Championships and a Lot of Mud',
    images: ['/images/about/3.png', '/images/about/4.png'],
    description:
      'During high school, I went deep into hands-on learning. I joined spaghetti bridge competitions, built off-road prototypes, and got involved in robotics. That was my way into the world of engineering.',
    reflections: [
      'Failure is part of building things that work.',
      'Learning by doing sticks with you longer.',
      'Tinkering builds confidence in complex problems.',
    ],
    tags: ['Engineering', 'Creativity', 'Maker Mindset'],
  },
  {
    slug: 'robotics-usa',
    title: 'Robot Wars and an Unexpected Handshake',
    images: ['/images/about/5.png', '/images/about/6.png'],
    description:
      'At RoboGames 2010, I was the pilot of our main catagory combat robot. We beat the undefeated world champion in the opening match, and Grant Imahara from MythBusters came over and shook my hand. That moment is still surreal.',
    reflections: [
      'Hard work behind the scenes leads to magic on stage.',
      'Wins feel better when shared with a great team.',
      'Unexpected moments make the best memories.',
    ],
    tags: ['Teamwork', 'Engineering', 'Competition'],
  },
  {
    slug: 'life-abroad',
    title: 'Studying Abroad Changed Everything',
    images: ['/images/about/7.png'],
    description:
      'At Florida State University, I took engineering classes and worked on a defense research project. Living with international students gave me new perspectives and a lasting sense of global community.',
    reflections: [
      'Different cultures teach you how to listen.',
      'Living abroad tests your independence in the best way.',
      'Science brings people together.',
    ],
    tags: ['Global Perspective', 'Science', 'Culture'],
  },
  {
    slug: 'developer-life',
    title: 'From Educator to Software Engineer',
    images: ['/images/about/8.png', '/images/about/9.png'],
    description: `While teaching kids to code, I realized I loved programming too. I made the switch, went through a bootcamp, and became a developer. Now I build tools that help real people, and I'm always learning.`,
    reflections: [
      `It's okay to reinvent yourself.`,
      'Good code solves a problem; great code solves a need.',
      'Empathy helps more than most people think.',
    ],
    tags: ['Career Change', 'Frontend', 'Empathy'],
  },
  {
    slug: 'future-vision',
    title: `Where I'm Heading Next`,
    images: ['/images/about/10.png'],
    description: `I want to work on global teams solving meaningful problems. I'm not chasing hype. I'm chasing purpose, people, and the kind of software that quietly improves lives.`,
    reflections: [
      `You don't need to be loud to make impact.`,
      'The best tools feel invisible to the user.',
      'Technology should always serve humans, not the other way around.',
    ],
    tags: ['Vision', 'Human-Centered Design', 'Impact'],
  },
];
