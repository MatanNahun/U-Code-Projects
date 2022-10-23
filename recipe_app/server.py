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


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8080, reload=True)
