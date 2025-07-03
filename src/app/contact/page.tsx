import {
  socials,
  socialsTitle,
  socialsSubtitle,
  location,
  availability,
  contactMessage,
} from '../../../data/socials';
import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  mail: Mail,
  phone: Phone,
};

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center py-12 w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-2">{socialsTitle}</h2>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto">
          {socialsSubtitle}
        </p>
      </div>
      <div className="max-w-xl w-full bg-card/80 dark:bg-white/10 rounded-2xl p-8 shadow-xl border border-border/60 mb-8">
        {location && (
          <div className="mb-4">
            <span className="block text-muted-foreground text-sm mb-1">Location</span>
            <span className="font-semibold text-base">{location}</span>
          </div>
        )}
        {availability && (
          <div className="mb-4">
            <span className="block text-muted-foreground text-sm mb-1">Availability</span>
            <span className="font-semibold text-base">{availability}</span>
          </div>
        )}
        {contactMessage && (
          <div className="mb-6">
            <span className="block text-muted-foreground text-sm mb-1">Message</span>
            <span className="text-base">{contactMessage}</span>
          </div>
        )}
        <ul className="space-y-3">
          {socials.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <li key={s.platform} className="flex items-center gap-3">
                {Icon && <Icon size={22} className="text-primary" />}
                <a
                  href={s.url}
                  className="underline text-primary hover:text-primary/80 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.platform}
                </a>
                {s.extra && <span className="text-muted-foreground text-xs ml-2">({s.extra})</span>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
