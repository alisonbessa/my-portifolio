export const userName = 'Alison Bessa';
export const socialsTitle = 'Social & Contact';
export const socialsSubtitle = 'Where you can find or contact me.';

export type Social = {
  platform: string;
  url: string;
  icon?: string;
  extra?: string;
};

export const location = 'São Paulo, Brazil (GMT-3)';
// Example
// export const availability = 'Open to new opportunities and freelance projects';
export const availability = null;
export const contactMessage =
  "Let's connect! Feel free to reach out for collaborations, networking, or just to say hi.";

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
    extra: 'Preferred for professional contact',
  },
];
