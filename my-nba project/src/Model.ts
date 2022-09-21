class Model {
  player: Player;

  constructor() {
    this.player = new Player();
  }

  async getPlayerData() {
    this.player.show_players_with_params("lakers", "2020");
  }
}

console.log("model");
let modelExample = new Model();
modelExample.getPlayerData();

async function show() {
  let res = await $.get("/sanity");
  console.log(res);
}

async function show_players() {
  let res = await $.get("/players/lakers/2020");
  console.log(res);
}
