// Middleware

const express = require('express')
const app = express()

app.use((req, res, next)=>{
    console.log(`${req.method} and ${req.url}`)
    next()
})

app.get('/',(req,res)=>{
    res.send('Middleware.....')
})

app.listen(3000, ()=>{
    console.log("Server is listing on 3000")
})