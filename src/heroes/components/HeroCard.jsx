import { Link } from 'react-router-dom';

function HeroCard({ hero }) {
  const {
    id,
    superhero,
    alter_ego: alterEgo,
    first_appearance: firstAppearance,
    characters
  } = hero;

  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img className="card-img" src={heroImageUrl} alt={superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="cad-title">{superhero}</h5>

              <p className="card-text">{alterEgo}</p>

              {alterEgo !== characters && <p>{characters}</p>}

              <p className="card-text">
                <small className="text-mutter">{firstAppearance}</small>
              </p>

              <Link to={`/hero/${id}`}>More info...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroCard;
