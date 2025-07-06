import { Career } from '../components/Career';
import { career, careerTitle, careerSubtitle } from '../../../data/career';

export default function CareerPage() {
  return <Career title={careerTitle} subtitle={careerSubtitle} career={career} />;
}
