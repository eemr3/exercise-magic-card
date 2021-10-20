const { getMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  // implemente sua função aqui
  favoriteCards.splice(4, favoriteCards.length - 4);
}

describe(' Testa a função getMagicCard', () => { 
    afterEach(() => {
      retrievesFavoriteCards();
    });

  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(2);
    await getMagicCard('130553');
    
    // implemente seus testes aqui
    const lastPosition = favoriteCards.length - 1;
    expect(favoriteCards.length).toBe(5);
    expect(favoriteCards[lastPosition].name).toBe('Beacon of Immortality');
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);
    expect(favoriteCards).toHaveLength(4);
    // implemente seus testes aqui
    const nameFavoriteCards = favoriteCards.map((favoriteCard) => favoriteCard.name);
    expect(nameFavoriteCards).toEqual([
      "Ancestor's Chosen",
      "Angel of Mercy",
      "Aven Cloudchaser",
      "Ballista Squad",
    ]);
  });
  
});
