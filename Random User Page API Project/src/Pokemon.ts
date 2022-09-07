class Pokemon {
  name: string;
  spriteLink: string;

  constructor() {
    this.name = "pokemonName";
    this.spriteLink = "spriteLink";
  }

  randomID(): number {
    return Math.floor(Math.random() * 900);
  }

  initPokemon() {
    var $pokemon = $(this); // get access to pokemon with closure
    return $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${this.randomID()}/`,
      dataType: "json",
      success: function (pokemonData) {
        $pokemon[0].name = pokemonData.name;
        $pokemon[0].spriteLink = pokemonData.sprites.front_default;
      },
    });
  }
}
