class Render {
  renderPlayers(players: Player[]): void {
    const sourcePlayers = $("#results-template").html();
    const template = Handlebars.compile(sourcePlayers);
    let newHTML = template({ players });
    $(".players-results").empty();
    $(".players-results").append(newHTML);
  }
}

console.log("render");
