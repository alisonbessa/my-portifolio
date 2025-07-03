export const userName = 'Alison Bessa';
export const socialsTitle = 'Social & Contact';
export const socialsSubtitle = 'Where you can find or contact me.';

export type Social = {
  platform: string;
  url: string;
  icon?: string;
};

export const socials: Social[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/alisonbessa',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alisonbessa/',
    icon: 'linkedin',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/alisonbessa',
    icon: 'instagram',
  },
  {
    platform: 'Email',
    url: 'mailto:alisonbessa@gmail.com',
    icon: 'mail',
  },
];
