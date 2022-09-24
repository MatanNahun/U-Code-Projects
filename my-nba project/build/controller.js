"use strict";
const model = new Model();
console.log(model);
const render = new Render();
// model
//   .getPlayersData("lakers", "2020")
//   .then(() => render.renderPlayers(model.players));
$("#result-players-btn").on("click", function () {
    const teamInput = document.getElementById("team");
    const yearInput = document.getElementById("year");
    const newPlayersResults = new Model();
    newPlayersResults
        .getPlayersData(teamInput.value, yearInput.value)
        .then(() => render.renderPlayers(newPlayersResults.players));
});
