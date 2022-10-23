import re
from tempfile import _TemporaryFileWrapper
import pymysql
from fastapi import FastAPI, HTTPException, Response, status

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="recipes_app",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor,
)


def get_dairy_ingredients():
    try:
        with connection.cursor() as cursor:
            query = f"SELECT name FROM dairy_ingredients"
            cursor.execute(query)
            dairy_ingredients = cursor.fetchall()
            dairy_ingredients_names = [
                ingredient["name"] for ingredient in dairy_ingredients
            ]
            return dairy_ingredients_names
    except:
        print("Error with getting dairy_ingredients")


def get_gluten_ingredients():
    try:
        with connection.cursor() as cursor:
            query = f"SELECT name FROM gluten_ingredients"
            cursor.execute(query)
            gluten_ingredients = cursor.fetchall()
            gluten_ingredients_names = [
                ingredient["name"] for ingredient in gluten_ingredients
            ]
            return gluten_ingredients_names
    except:
        print("Error with getting gluten_ingredients")


# get_gluten_ingredients()
