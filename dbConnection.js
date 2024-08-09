const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";

const dbName = "users-data";

const client = new MongoClient(url);

const connectToDB = async () => {
  try {
    await client.connect();
    console.log("Connected");
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.log(error);
  }
};  

module.exports = {connectToDB}