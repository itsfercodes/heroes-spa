import { useMemo } from 'react';
import { getHeroesByPublisher } from '../utils';
import HeroCard from './HeroCard';

function HeroList({ publisher }) {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
}
export default HeroList;
