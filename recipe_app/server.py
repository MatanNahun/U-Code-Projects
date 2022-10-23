from fastapi import FastAPI
from fastapi import Request, Response
import requests
import uvicorn
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()


app.mount("/client", StaticFiles(directory="client"), name="client")


@app.get("/")
def root():
    return FileResponse("index.html")


@app.get("/sanity")
def sanity():
    return {"message": "Server is up and running in sanity"}


@app.get("/recipes")
def get_recipes_by_ingredient(ingredient):
    recipes_by_ingredient = requests.get(
        f"https://recipes-goodness.herokuapp.com/recipes/{ingredient}"
    )
    return recipes_by_ingredient.json()


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8080, reload=True)
