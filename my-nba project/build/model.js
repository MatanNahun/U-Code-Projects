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
    addPlayerToDreamTeam(playerToAdd) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(playerToAdd);
            $.ajax({
                url: "/dreamTeam",
                type: "POST",
                data: JSON.stringify(playerToAdd),
                success: function () {
                    console.log("post to server");
                },
            });
        });
    }
    getDreamTeam() {
        return __awaiter(this, void 0, void 0, function* () {
            let dreamTeamData = yield $.get("/dreamTeam");
            console.log(dreamTeamData);
            for (let i = 0; i < dreamTeamData.length; i++) {
                this.dreamTeam.push(new Player(dreamTeamData[i]["firstName"], dreamTeamData[i]["lastName"], dreamTeamData[i]["jerseyNumber"], dreamTeamData[i]["position"]));
            }
            console.log(this.dreamTeam);
        });
    }
}
// console.log("model");
// let modelExample = new Model();
// modelExample.getDreamTeam();
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
