"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Model {
    constructor() {
        this.players = [];
        this.dreamTeam = [];
    }
    getPlayersData(team, year) {
        return __awaiter(this, void 0, void 0, function* () {
            const checkbox_input = document.getElementById("checkbox");
            let URL = `/players/${team}/${year}`;
            URL = (checkbox_input === null || checkbox_input === void 0 ? void 0 : checkbox_input.checked) ? URL + "?dateOfBirth=true" : URL;
            console.log(URL);
            let playersData = yield $.get(URL);
            for (let i = 0; i < playersData.length; i++) {
                this.players.push(new Player(playersData[i]["firstName"], playersData[i]["lastName"], playersData[i]["jersey"], playersData[i]["pos"]));
            }
            console.log(this.players);
        });
    }
    addPlayerToDreamTeam(firstName, lastName, jerseyNumber, position) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(firstName);
            console.log(lastName);
            console.log(jerseyNumber);
            console.log(position);
            $.ajax({
                url: "/dreamTeam",
                type: "POST",
                data: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    jerseyNumber: jerseyNumber,
                    position: position,
                }),
                success: function () {
                    console.log("post to server");
                },
            });
        });
    }
}
$("#results-container").on("click", ".add-to-dreamTeam-btn", function (event) {
    const firstName = $(this)
        .closest(".player-card")
        .find(".player-detail")[0].textContent;
    const lastName = $(this)
        .closest(".player-card")
        .find(".player-detail")[1].textContent;
    const jerseyNumber = $(this)
        .closest(".player-card")
        .find(".player-detail")[2].textContent;
    const position = $(this)
        .closest(".player-card")
        .find(".player-detail")[4].textContent;
    model.addPlayerToDreamTeam(firstName, lastName, jerseyNumber, position);
});
// console.log("model");
// let modelExample = new Model();
// modelExample.getPlayersData("lakers", "2020");
function show() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield $.get("/sanity");
        console.log(res);
    });
}
function show_players() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield $.get("/players/lakers/2020");
        console.log(res);
    });
}
