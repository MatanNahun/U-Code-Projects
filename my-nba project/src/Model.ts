class Model {
  players: Player[];
  dreamTeam: Player[];

  constructor() {
    this.players = [];
    this.dreamTeam = [];
  }

  async getPlayersData(team: string, year: string) {
    const checkbox_input = document.getElementById(
      "checkbox"
    ) as HTMLInputElement;

    let URL: string = `/players/${team}/${year}`;
    URL = checkbox_input?.checked ? URL + "?dateOfBirth=true" : URL;
    console.log(URL);

    let playersData = await $.get(URL);
    for (let i = 0; i < playersData.length; i++) {
      this.players.push(
        new Player(
          playersData[i]["firstName"],
          playersData[i]["lastName"],
          playersData[i]["jersey"],
          playersData[i]["pos"]
        )
      );
    }
    console.log(this.players);
  }

  async addPlayerToDreamTeam(
    firstName: any,
    lastName: any,
    jerseyNumber: any,
    position: any
  ) {
    console.log(firstName);
    console.log(lastName);
    console.log(jerseyNumber);
    console.log(position);
    $.ajax({
      url: "/dreamTeam",
      type: 'POST',
      data: 

    })
  }
}

$("#results-container").on("click", ".add-to-dreamTeam-btn", function (event) {
  const firstName = $(this)
    .closest(".player-card")
    .find(".player-detail")[0].textContent;

  const lastName = $(this)
    .closest(".player-card")
    .find(".player-detail")[1].textContent;

  const jerseyNumber = $(this)
    .closest(".player-card")
    .find(".player-detail")[2].textContent;

  const position = $(this)
    .closest(".player-card")
    .find(".player-detail")[4].textContent;

  model.addPlayerToDreamTeam(firstName, lastName, jerseyNumber, position);
});

// console.log("model");
// let modelExample = new Model();
// modelExample.getPlayersData("lakers", "2020");

async function show() {
  let res = await $.get("/sanity");
  console.log(res);
}

async function show_players() {
  let res = await $.get("/players/lakers/2020");
  console.log(res);
}
