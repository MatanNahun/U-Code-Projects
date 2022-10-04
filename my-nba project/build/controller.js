"use strict";
const model = new Model();
console.log(model);
const render = new Render();
// model
//   .getPlayersData("lakers", "2020")
//   .then(() => render.renderPlayers(model.players));
// show players after choose team and year option with Get Team button:
$("#result-players-btn").on("click", function () {
    const teamInput = document.getElementById("team");
    const yearInput = document.getElementById("year");
    const newPlayersResults = new Model();
    newPlayersResults
        .getPlayersData(teamInput.value, yearInput.value)
        .then(() => render.renderPlayers(newPlayersResults.players));
});
// add player to dreamTeam with add button
$("#results-container").on("click", ".add-to-dreamTeam-btn", function (event) {
    const firstName = String($(this).closest(".player-card").find(".player-detail")[0].textContent);
    const lastName = String($(this).closest(".player-card").find(".player-detail")[1].textContent);
    const jerseyNumber = String($(this).closest(".player-card").find(".player-detail")[2].textContent);
    const position = String($(this).closest(".player-card").find(".player-detail")[4].textContent);
    const newPlayerToAdd = new Player(firstName, lastName, jerseyNumber, position);
    model.addPlayerToDreamTeam(newPlayerToAdd);
});
$("#results-container").on("click", ".delete-from-dreamTeam-btn", function () {
    const PLAYER_DETAIL = $(this).closest(".player-card").find(".player-detail");
    const firstName = String(PLAYER_DETAIL[0].textContent);
    const lastName = String(PLAYER_DETAIL[1].textContent);
    const jerseyNumber = String(PLAYER_DETAIL[2].textContent);
    const position = String(PLAYER_DETAIL[4].textContent);
    const playerToDelete = new Player(firstName, lastName, jerseyNumber, position);
    console.log(playerToDelete);
    model.deletePlayerFromDreamTeam(playerToDelete);
});
// show dreamTeam with retreive button
$("#results-dreamTeam-btn").on("click", function () {
    const dreamTeamResults = new Model();
    dreamTeamResults
        .getDreamTeam()
        .then(() => render.renderDreamTeam(dreamTeamResults.dreamTeam));
});
