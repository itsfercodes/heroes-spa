import heroesList from '../data/heroes';

const getHeroesByName = (name = '') => {
  const parsedName = name.toLocaleLowerCase().trim();

  if (parsedName.length === 0) return [];

  return heroesList.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(parsedName)
  );
};

export default getHeroesByName;
