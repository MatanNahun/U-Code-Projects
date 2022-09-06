console.log("Model");

class Model {
  user: User;
  //   user = $.get("https://randomuser.me/api/");

  constructor() {
    this.user = new User([], "Haifa", "Isreal", "matan", "Nahum", "link");
    $.ajax({
      url: "https://randomuser.me/api/?results=7",
      dataType: "json",
      success: function (UserData) {
        console.log(UserData);
        const userFirstName = UserData.results[0].name.first;
        console.log(userFirstName);
        const userLastName = UserData.results[0].name.last;
        console.log(userLastName);
        const userCity = UserData.results[0].location.city;
        console.log(userCity);
        const userState = UserData.results[0].location.state;
        console.log(userState);

        const userFriends: string[] = [];
        for (let i = 1; i < UserData.results.length; i++) {
          userFriends.push(
            UserData.results[i].name.first + " " + UserData.results[i].name.last
          );
        }
        console.log(userFriends);
        const userPictureLink = UserData.results[0].picture.thumbnail;
        console.log(userPictureLink);
      },
    });

    $.ajax({
      url: "https://api.kanye.rest",
      dataType: "json",
      success: function (kanyeData) {
        const quote = kanyeData.quote;
        console.log(quote);
      },
    });

    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${this.randomID()}/`,
      dataType: "json",
      success: function (pokemonData) {
        console.log(pokemonData);
        const pokemonName = pokemonData.name;
        console.log(pokemonName);
        const pokemonSpriteLink = pokemonData.sprites.front_default;
        console.log(pokemonSpriteLink);
      },
    });

    $.ajax({
      url: "https://baconipsum.com/api/?type=meat-and-filler",
      dataType: "json",
      success: function (baconData) {
        const randomBaconData = baconData;
        console.log(randomBaconData[0]);
      },
    });
  }

  randomID(): number {
    return Math.floor(Math.random() * 900);
  }
}
// const user1 = new User([], "Haifa", "Isreal", "matan", "Nahum", "link");
const model = new Model();
