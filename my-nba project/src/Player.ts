class Player {
  firstName: string;
  lastName: string;
  jerseyNumber: string;
  position: string;

  constructor() {
    this.firstName = "firstName";
    this.lastName = "lastName";
    this.jerseyNumber = "jerseyNumber";
    this.position = "position";
  }

  async show_players_with_params(team: string, year: string) {
    let players = await $.get(`/players/${team}/${year}`);
    console.log(players);
    let player_card_data = players.map((player: any) => {
      return {
        first_name: player["firstName"],
        last_name: player["lastName"],
        jersey_number: player["jersey"],
        position: player["pos"],
      };
    });
    console.log(player_card_data);
  }
}

// let playerExample = new Player();
// playerExample.show_players_with_params("lakers", "2020");
