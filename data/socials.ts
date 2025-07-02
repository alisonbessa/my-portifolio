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
    url: 'https://github.com/exampleuser',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/exampleuser',
    icon: 'linkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/exampleuser',
    icon: 'twitter',
  },
  {
    platform: 'Email',
    url: 'mailto:contact@example.com',
    icon: 'mail',
  },
];
