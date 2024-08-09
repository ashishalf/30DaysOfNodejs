// Get Data from MongoDB

const express = require('express')
const app = express()
const {connectToDB} = require('./dbConnection')

app.use(express.json())

app.get('/',async(req,res)=>{
  try {
    const db = await connectToDB()
    const collection = db.collection('users') 
    const users = await collection.find().toArray()
    res.json(users)
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error'})
  }
})

app.post('/users', async(req, res)=>{
  try {
    const data = req.body
    const db = await connectToDB();
    const collection = db.collection("users");
    const insertData = await collection.insertOne(data)
    console.log(`${insertData} Document Inserted`)
  } catch (error) {
    console.error(error)
  }
})

app.put('/users/:firstName', async(req, res)=>{
  try {
    const db = await connectToDB();
    const collection = db.collection("users");
    const updateData = await collection.updateOne({firstName: req.params.firstName},{$set: req.body})
    console.log(`${updateData} Document Updated`)
  } catch (error) {
    console.error(error)
  }
})

app.delete('/users/:firstName', async(req, res)=>{
  try {
    const db = await connectToDB();
    const collection = db.collection("users");
    const fName = req.params.firstName
    const deletedData = await collection.deleteOne({ firstName: fName });
    console.log(`${deletedData} Document Deleted`);
  } catch (error) {
    console.error(error);
  }
})


app.listen(3000, ()=>{
    console.log("Server is listing on 3000")
})