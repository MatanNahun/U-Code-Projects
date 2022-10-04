"use strict";
class Render {
    renderPlayers(players) {
        const sourcePlayers = $("#results-template").html();
        const template = Handlebars.compile(sourcePlayers);
        let newHTML = template({ players });
        $(".players-results").empty();
        $(".players-results").append(newHTML);
    }
    renderDreamTeam(dreamTeam) {
        const sourceDreamTeam = $("#results-dreamTeam-template").html();
        const template = Handlebars.compile(sourceDreamTeam);
        let newHTML = template({ dreamTeam });
        $(".players-results").empty();
        $(".players-results").append(newHTML);
    }
}
