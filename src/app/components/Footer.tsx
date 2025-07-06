import { socials, userName } from '../../../data/socials';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  mail: Mail,
};

export function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-5 bg-background border-t border-border mt-12">
      <div className="flex gap-6 mb-2">
        {socials.map(({ platform, url, icon }) => {
          const Icon = iconMap[icon as keyof typeof iconMap];
          return (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platform}
            >
              {Icon && <Icon size={28} strokeWidth={1.5} />}
            </a>
          );
        })}
      </div>
      <span className="text-xs text-foreground/60">
        &copy; {new Date().getFullYear()} {userName}. All rights reserved.
      </span>
    </footer>
  );
}
