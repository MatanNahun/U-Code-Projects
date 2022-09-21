from operator import index
from tkinter.messagebox import YESNOCANCEL
from webbrowser import get
from fastapi import FastAPI
from fastapi import Request, Response
import requests
import uvicorn
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/build", StaticFiles(directory="build"), name="build")


teams_id = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756",
}


@app.get("/")
def root():
    return FileResponse("index.html")


@app.get("/sanity")
def sanity():
    return {"message": "Server is up and running in sanity"}


@app.get("/teams")
async def show_teams():
    teams = requests.get("http://data.nba.net/data/10s/prod/v1/2020/teams.json")
    return teams.json()


def get_player_by_year(year):
    players = requests.get(f"http://data.nba.net/10s/prod/v1/{year}/players.json")
    return players.json()["league"]["standard"]


@app.get("/players/{teamName}/{year}")
async def show_players_by_teamName_and_year(teamName, year):
    players_relevant_data = get_player_by_year(year)
    return [
        player
        for player in players_relevant_data
        if player["teamId"] == teams_id[teamName]
    ]


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8080, reload=True)
