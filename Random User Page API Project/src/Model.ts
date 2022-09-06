console.log("Model");

class Model {
  user: User;
  pokemonData: Pokemon;
  quoteData: Quote;
  about: About;

  constructor() {
    this.user = new User();
    // this.user.initUser();

    this.pokemonData = new Pokemon();
    // this.pokemonData.initPokemon();

    this.quoteData = new Quote();
    // this.quoteData.initQuote();

    this.about = new About();
    // this.about.initAbout();
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

// const model = new Model();
// console.log(model);
