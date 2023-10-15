import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import useForm from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../utils';

function SearchPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { query = '' } = queryString.parse(location.search);

  const heroesFound = getHeroesByName(query);

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?query=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search for a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {!query && <div className="alert alert-warning">Search a hero</div>}

          {heroesFound.length === 0 && query && (
            <div className="alert alert-danger">
              No hero found with <strong>{query}</strong> 😔
            </div>
          )}

          {heroesFound.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  );
}
export default SearchPage;
