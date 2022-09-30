class Model {
  players: Player[];

  constructor() {
    this.players = [];
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

  // async getPlayerData(team: string, year: string) {
  //   let players = await $.get(`/players/${team}/${year}`);
  //   console.log(players);
  //   const playersList = [];
  //   let player_card_data = players.map((player: any) => {
  //     return {
  //       first_name: player["firstName"],
  //       last_name: player["lastName"],
  //       jersey_number: player["jersey"],
  //       position: player["pos"],
  //     };
  //   });
  //   console.log(player_card_data);
  // }
}

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
