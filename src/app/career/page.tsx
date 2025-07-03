import { Career } from '../components/Career';
import { career, careerTitle, careerSubtitle } from '../../../data/career';

export default function CareerPage() {
  return (
    <main className="pt-20">
      <Career title={careerTitle} subtitle={careerSubtitle} career={career} />
    </main>
  );
}
