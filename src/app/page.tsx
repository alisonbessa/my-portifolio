import { Hero } from './components/Hero';
import { homeTitle, homeSubtitle, homeDescription } from '../../data/home';

export default function Home() {
  return (
    <main className="pt-20">
      <Hero title={homeTitle} subtitle={homeSubtitle} description={homeDescription} />
    </main>
  );
}
