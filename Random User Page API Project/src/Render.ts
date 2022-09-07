class Render {
  private renderUser(user: User): void {
    const sourceUserInfo = $("#user-template").html();
    const template = Handlebars.compile(sourceUserInfo);

    let userInfo = template({
      firstName: user.firstName,
      lastName: user.lastName,
      city: user.city,
      state: user.state,
      pictureURL: user.pictureURL,
    });
    $(".user-container").empty();
    $(".user-container").append(userInfo);
  }

  private renderFriends(friends: string[]): void {
    const sourceFriends = $("#friends-template").html();
    const template = Handlebars.compile(sourceFriends);
    $(".friends-container").empty();
    for (let friend of friends) {
      let userFriend = template({ friend });

      $(".friends-container").append(userFriend);
    }
  }

  private renderQuote(quote: Quote): void {
    const sourceQuote = $("#quote-template").html();
    const template = Handlebars.compile(sourceQuote);
    let quoteToRender = template({ quoteText: quote.text });
    $(".quote-container").empty();
    $(".quote-container").append(quoteToRender);
  }

  private renderPokemon(pokemon: Pokemon): void {
    const sourcePokemon = $("#pokemon-template").html();
    const template = Handlebars.compile(sourcePokemon);
    let pokeomonToRender = template({
      pokemonName: pokemon.name,
      spriteURL: pokemon.spriteLink,
    });
    $(".pokemon-container").empty();
    $(".pokemon-container").append(pokeomonToRender);
  }

  private renderAbout(about: About): void {
    const sourceAbout = $("#about-template").html();
    const template = Handlebars.compile(sourceAbout);
    for (let sentence of about.text) {
      let aboutToRender = template({ aboutText: sentence });
      $(".meat-container").empty();
      $(".meat-container").append(aboutToRender);
    }
  }

  renderAll(model: Model): void {
    this.renderUser(model.user);
    this.renderFriends(model.user.friends);
    this.renderPokemon(model.pokemonData);
    this.renderQuote(model.quoteData);
    this.renderAbout(model.about);
  }
}
