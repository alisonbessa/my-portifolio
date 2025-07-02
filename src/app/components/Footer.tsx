import type { Social } from '../../../data/socials';

type FooterProps = {
  title: string;
  subtitle: string;
  socials: Social[];
};

export function Footer({ title, subtitle, socials }: FooterProps) {
  return (
    <footer>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <ul>
        {socials.map((social) => (
          <li key={social.platform}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              {social.icon ? <span>{social.icon}</span> : null} {social.platform}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
