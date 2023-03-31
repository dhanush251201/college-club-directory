import pymongo
from pymongo import MongoClient
 
client = MongoClient("mongodb://localhost:27017")

db = client.ADL

collection = db.AuthDB

# collection.insert_one()

def login(email,password):
    results = collection.find({'email':email})
    for res in results:
        if not res:
            return {'status':404,'message':'user does not exist!'}
        if res['password'] == password:
            return {'status':200,'message':'successful login'}
        else:
            return {'status':404,'message':'Password does not match'}
    return {'status':404,'message':'user does not exist!'}

def signup(email,password):
    results = collection.find({'email':email})
    for i in results:
        return {'status':409,'message':'User already exists'}
    collection.insert_one({'email':email,'password':password})
    return {'status':200,'message':"USer created successfully"}