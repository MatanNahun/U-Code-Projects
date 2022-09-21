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
class Player {
    constructor() {
        this.firstName = "firstName";
        this.lastName = "lastName";
        this.jerseyNumber = "jerseyNumber";
        this.position = "position";
    }
    show_players_with_params(team, year) {
        return __awaiter(this, void 0, void 0, function* () {
            let players = yield $.get(`/players/${team}/${year}`);
            console.log(players);
            let player_card_data = players.map((player) => {
                return {
                    first_name: player["firstName"],
                    last_name: player["lastName"],
                    jersey_number: player["jersey"],
                    position: player["pos"],
                };
            });
            console.log(player_card_data);
        });
    }
}
// let playerExample = new Player();
// playerExample.show_players_with_params("lakers", "2020");
