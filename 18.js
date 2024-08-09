//Error handling
const express = require('express')
const app = express()



app.get('/',(req,res)=>{
    res.send('Working')
})

app.use((req, res, next)=>{
    res.status(404).send("Not valid Route.")
})

app.listen(3000, ()=>{
    console.log("Server is listing on 3000")
})