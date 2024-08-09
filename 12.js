//Route Parameter

const express = require('express')
const app = express()

app.get('/:name',(req,res)=>{
    const name = req.params.name
    res.send(`Hello From ${name}`)
})

app.listen(3000, ()=>{
    console.log("Server is listing on 3000")
})