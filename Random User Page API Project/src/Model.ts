class Model {
  user: User;
  pokemonData: Pokemon;
  quoteData: Quote;
  about: About;

  constructor() {
    this.user = new User();
    this.pokemonData = new Pokemon();
    this.quoteData = new Quote();
    this.about = new About();
  }

  async getAllData() {
    await Promise.all([
      this.user.initUser(),
      this.pokemonData.initPokemon(),
      this.quoteData.initQuote(),
      this.about.initAbout(),
    ]);
  }
}
