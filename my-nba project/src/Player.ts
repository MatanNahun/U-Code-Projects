class Player {
  firstName: string;
  lastName: string;
  jerseyNumber: string;
  position: string;

  constructor(
    firstName: string,
    lastName: string,
    jerseyNumber: string,
    position: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.jerseyNumber = jerseyNumber;
    this.position = position;
  }

  // async get_players_by_team_and_year(team: string, year: string) {
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

// let playerExample = new Player("matan", "nahum", "12", "gard");
// console.log(playerExample);
// playerExample.get_players_by_team_and_year("lakers", "2020");
