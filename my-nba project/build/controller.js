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
$("#results-container").on("click", ".add-to-dreamTeam-btn", function (event) {
    const firstName = String($(this).closest(".player-card").find(".player-detail")[0].textContent);
    const lastName = String($(this).closest(".player-card").find(".player-detail")[1].textContent);
    const jerseyNumber = String($(this).closest(".player-card").find(".player-detail")[2].textContent);
    const position = String($(this).closest(".player-card").find(".player-detail")[4].textContent);
    const newPlayerToAdd = new Player(firstName, lastName, jerseyNumber, position);
    model.addPlayerToDreamTeam(newPlayerToAdd);
});
