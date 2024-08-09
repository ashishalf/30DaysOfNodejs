//Hello using Express

const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello From Express.js")
})

app.listen(3000, ()=>{
    console.log("Server is listing on 3000")
})