from fastapi import FastAPI
from pydantic import BaseModel

import authentication as auth

app = FastAPI()

class AuthModel(BaseModel):
    email : str
    password : str


@app.get("/")
def root():
    return {"message": "Hello World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

@app.post("/login")
async def login(authVal:AuthModel):
    res = auth.login(authVal.email,authVal.password)
    return res

@app.post("/signup")
async def signup(authVal:AuthModel):
    res = auth.signup(authVal.email,authVal.password)
    return res