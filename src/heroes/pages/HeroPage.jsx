import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../utils';

function HeroPage() {
  const { heroId } = useParams();
  const hero = getHeroById(heroId);
  const heroImageUrl = `/assets/heroes/${hero.id}.jpg`;

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={heroImageUrl}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <h1>{hero.superhero}</h1>
    </div>
  );
}
export default HeroPage;
