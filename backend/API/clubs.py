import pymongo
from pymongo import MongoClient
import json
from bson.json_util import dumps
 
client = MongoClient("mongodb://localhost:27017")

db = client.ADL

collection = db.clubList

def clubByType(type):
    res = collection.find({"type":type})
    return dumps(res)

def clubByName(name):
    res = collection.find({"name":name})
    return dumps(res)

def clubByDept(dept):
    res = collection.find({"dept":dept})
    return dumps(res)

def clubByrecYear(recYear):
    res = collection.find({"recruitingYear":recYear})
    return dumps(res)