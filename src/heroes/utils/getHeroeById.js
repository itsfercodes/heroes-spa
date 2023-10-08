import heroesList from '../data/heroes';

const getHeroById = (id) => heroesList.find((hero) => hero.id === id);

export default getHeroById;
