import { Skills } from '../components/Skills';
import { skills, skillsTitle, skillsSubtitle } from '../../../data/skills';

export default function SkillsPage() {
  return (
    <main className="pt-20">
      <Skills title={skillsTitle} subtitle={skillsSubtitle} skills={skills} />
    </main>
  );
}
