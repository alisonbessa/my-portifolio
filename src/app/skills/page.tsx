import { Skills } from '../components/Skills';
import { skills, skillsTitle, skillsSubtitle } from '../../../data/skills';

export default function SkillsPage() {
  return <Skills title={skillsTitle} subtitle={skillsSubtitle} skills={skills} />;
}
