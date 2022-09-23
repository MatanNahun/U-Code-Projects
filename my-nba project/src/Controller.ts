const model = new Model();
console.log(model);

const render = new Render();

model
  .getPlayersData("lakers", "2020")
  .then(() => render.renderPlayers(model.players));

$("#result-players-btn").on("click", function () {
  const teamInput = document.getElementById("team") as HTMLInputElement;
  const yearInput = document.getElementById("year") as HTMLInputElement;

  const newPlayersResults = new Model();
  newPlayersResults
    .getPlayersData(teamInput.value, yearInput.value)
    .then(() => render.renderPlayers(newPlayersResults.players));
});
