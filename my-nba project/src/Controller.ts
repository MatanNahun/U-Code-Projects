const model = new Model();
const render = new Render();

// show players after choose team and year option with Get Team button:
$("#result-players-btn").on("click", function () {
  const teamInput = document.getElementById("team") as HTMLInputElement;
  const yearInput = document.getElementById("year") as HTMLInputElement;

  const newPlayersResults = new Model();
  newPlayersResults
    .getPlayersData(teamInput.value, yearInput.value)
    .then(() => render.renderPlayers(newPlayersResults.players));
});

// add player to dreamTeam with add button
$("#results-container").on("click", ".add-to-dreamTeam-btn", function (event) {
  const PLAYER_DETAIL = $(this).closest(".player-card").find(".player-detail");
  const firstName = String(PLAYER_DETAIL[0].textContent);
  const lastName = String(PLAYER_DETAIL[1].textContent);
  const jerseyNumber = String(PLAYER_DETAIL[2].textContent);
  const position = String(PLAYER_DETAIL[4].textContent);

  const newPlayerToAdd = new Player(
    firstName,
    lastName,
    jerseyNumber,
    position
  );

  model.addPlayerToDreamTeam(newPlayerToAdd);
});

// delete player from dreamTeam with delete button
$("#results-container").on("click", ".delete-from-dreamTeam-btn", function () {
  const PLAYER_DETAIL = $(this)
    .closest(".player-card")
    .find(".dreamTeam-player-detail");
  const firstName = String(PLAYER_DETAIL[0].textContent);
  const lastName = String(PLAYER_DETAIL[1].textContent);
  const jerseyNumber = String(PLAYER_DETAIL[2].textContent);
  const position = String(PLAYER_DETAIL[4].textContent);

  const playerToDelete = new Player(
    firstName,
    lastName,
    jerseyNumber,
    position
  );

  model.deletePlayerFromDreamTeam(playerToDelete);
  const dreamTeamAfterDeletePlayer = new Model();
  dreamTeamAfterDeletePlayer
    .getDreamTeam()
    .then(() => render.renderDreamTeam(dreamTeamAfterDeletePlayer.dreamTeam));
});

// show dreamTeam with retreive button
$("#results-dreamTeam-btn").on("click", function () {
  const dreamTeamResults = new Model();
  dreamTeamResults
    .getDreamTeam()
    .then(() => render.renderDreamTeam(dreamTeamResults.dreamTeam));
});

$("#results-container").on("click", ".player-card", function () {
  const PLAYER_DETAIL = $(this).find(".player-detail");

  let firstName = String(PLAYER_DETAIL[0].textContent);
  let lastName = String(PLAYER_DETAIL[1].textContent);

  let firstNameLowerCase = firstName.toLowerCase();
  let lastNameLowerCase = lastName.toLowerCase();

  console.log(firstNameLowerCase);
  console.log(lastNameLowerCase);

  model.getStatitsticsPlayer(lastNameLowerCase, firstNameLowerCase);
});
