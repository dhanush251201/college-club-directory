from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import authentication as auth
import clubs as cb

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AuthModel(BaseModel):
    email : str
    password : str

class ClubModel(BaseModel):
    id: int | None = None
    recruitingYear: str | None = None
    dept: str | None = None
    type: str | None = None
    name: str | None = None
    description: str | None = None
    image: str | None = None
    imageLg: str | None = None
    incharge: str | None = None
    secretary: str | None = None
    email: str | None = None

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

@app.get("/clubByType/{type}")
async def clubByType(type):
    res = cb.clubByType(str(type))
    return res

@app.get("/clubByName/{name}")
async def clubByName(name):
    res = cb.clubByName(str(name))
    return res

@app.get("/clubByDept/{dept}")
async def clubByDept(dept):
    res = cb.clubByDept(str(dept))
    return res

@app.get("/clubByRecYear/{year}")
async def clubByType(year):
    res = cb.clubByType(str(year))
    return res