import pymongo
from pymongo import MongoClient
 
client = MongoClient("mongodb://localhost:27017")

db = client.ADL

collection = db.clubList

collection.insert_one({
    
})

for i in collection.find():
    print(i)