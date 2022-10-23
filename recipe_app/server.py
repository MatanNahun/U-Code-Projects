from fastapi import FastAPI
from fastapi import Request, Response
import requests
from utils import get_gluten_ingredients
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


# @app.get("/recipes/{ingredient}")
# def get_recipes_by_ingredient(ingredient, diet=None):

#     recipes_by_ingredient_raw = requests.get(
#         f"https://recipes-goodness.herokuapp.com/recipes/{ingredient}"
#     )
#     recipes_by_ingredient = recipes_by_ingredient_raw.json()["results"]

#     if diet == "gluten_free":
#         gluten_ingredients = get_gluten_ingredients()

#         recipes_gluten_free = []
#         for reciepe in recipes_by_ingredient:
#             for ingredient in reciepe["ingredients"]:
#                 print(ingredient)
#                 if ingredient in gluten_ingredients:
#                     print("true")
#                     break
#                 else:
#                     recipes_gluten_free.append(reciepe)
#             return recipes_gluten_free

#         return recipes_gluten_free

#     return recipes_by_ingredient


@app.get("/recipes/{ingredient}")
def get_recipes_by_ingredient(ingredient, diet=None):

    recipes_by_ingredient_raw = requests.get(
        f"https://recipes-goodness.herokuapp.com/recipes/{ingredient}"
    )
    recipes_by_ingredient = recipes_by_ingredient_raw.json()["results"]

    if diet == "gluten_free":
        recipes_gluten_free = []
        for reciepe in recipes_by_ingredient:
            if is_gluten_free(reciepe):
                recipes_gluten_free.append(reciepe)

        return recipes_gluten_free

    return recipes_by_ingredient


def is_gluten_free(reciepe):
    gluten_ingredients = get_gluten_ingredients()

    for ingredient in reciepe["ingredients"]:
        if ingredient in gluten_ingredients:
            print(reciepe)
            return False
    return True


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8020, reload=True)
