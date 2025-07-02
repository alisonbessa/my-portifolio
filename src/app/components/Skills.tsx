import type { Skill } from '../../../data/skills';

type SkillsProps = {
  title: string;
  subtitle: string;
  skills: Skill[];
};

export function Skills({ title, subtitle, skills }: SkillsProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill.name}>
            <strong>{skill.name}</strong>
            {skill.level && ` (${skill.level})`}
            {skill.category && ` - ${skill.category}`}
          </li>
        ))}
      </ul>
    </section>
  );
}
