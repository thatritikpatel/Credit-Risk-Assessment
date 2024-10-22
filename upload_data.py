
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import pandas as pd
import json

uri = "mongodb+srv://ritik:pasword1234@creditriskassessment.nwxfr.mongodb.net/?retryWrites=true&w=majority&appName=creditriskassessment"


# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))


#create database name and collection name
DATABASE_NAME="creditriskassessment"
COLLECTION_NAME='defaults'

df=pd.read_csv(r"C:\Users\pcc\Desktop\Python Projects\Default of Credit Card Clients\notebooks\UCI_Credit_Card.csv")

df=df.drop("ID",axis=1)

json_record=list(json.loads(df.T.to_json()).values())

client[DATABASE_NAME][COLLECTION_NAME].insert_many(json_record)