from pymongo import MongoClient
from pydantic import BaseModel
 
client = MongoClient("mongodb://localhost:27017")

db = client.ADL

collection = db.clubList

class ClubModel(BaseModel):
    id: int
    recruitingYear: str
    dept: str
    type: str
    name: str
    description: str
    image: str
    imageLg: str
    incharge: str
    secretary: str
    email: str

def addClub(club : ClubModel):
    collection.insert_one(club)
    print(club,"added")

tmp = {"id":1,
        "recruitingYear":'1',
        "dept":'CSE',
        "type":'Association',
        "name":'Computer Science and Engineering Association',
        "description":'CSEA, the disciplinary association for the department of computer science and engineering, stands as a platform to help the students enhance their practical knowledge through various events like group discussions, seminars, workshops and guest lectures. The association also helps the students to improve their technical skills through various competitions throughout the year.',
        "image":"Club1",
        "imageLg":"Club1lg",
        "incharge":'S. Arul Jothi',
        "secretary":'John',
        "email":'club1@mail.com'
}

addClub(tmp)