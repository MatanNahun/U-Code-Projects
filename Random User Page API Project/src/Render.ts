console.log("Render");

class Render {
  renderAll(model: Model): void {}

  renderUser(user: User): void {
    const sourceUserInfo = $("#user-template").html();
    const template = Handlebars.compile(sourceUserInfo);

    let userInfo = template({
      firstName: user.firstName,
      lastName: user.lastName,
      city: user.city,
      state: user.state,
      pictureURL: user.pictureURL,
    });
    $(".user-container").append(userInfo);
  }

  renderFriends(friends: string[]): void {
    const sourceFriends = $("#friends-template").html();
    const template = Handlebars.compile(sourceFriends);
    for (let friend of friends) {
      let userFriend = template({ friend });
      $(".friends").append(userFriend);
    }
  }

  renderQuote(quote: string): void {
    const sourceQuote = $("#quote-template").html();
    const template = Handlebars.compile(sourceQuote);
    let quoteToRender = template({ quote });
    $(".quote-container").append(quoteToRender);
  }

  renderPokemon(pokemon: Pokemon): void {
    const sourcePokemon = $("#pokemon-template").html();
    const template = Handlebars.compile(sourcePokemon);
    let pokeomonToRender = template({
      pokemonName: pokemon.name,
      spriteURL: pokemon.spriteLink,
    });
    $(".pokemon-container").append(pokeomonToRender);
  }

  renderAbout(about: About): void {
    const sourceAbout = $("#about-template").html();
    const template = Handlebars.compile(sourceAbout);
    for (let sentence of about.text) {
      let aboutToRender = template({ aboutText: sentence });
      $(".meat-container").append(aboutToRender);
    }
  }
}

// const modelToRender = new Model();
// console.log(modelToRender.user);

// const Render1 = new Render();
// Render1.renderUser(modelToRender.user);
