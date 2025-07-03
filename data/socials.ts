export const userName = 'John Doe';
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
    url: 'https://github.com/johndoe',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/johndoe/',
    icon: 'linkedin',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/johndoe',
    icon: 'instagram',
  },
  {
    platform: 'Email',
    url: 'mailto:johndoe@email.com',
    icon: 'mail',
  },
];
