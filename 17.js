const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json([
        {name: 'Ashish'}
    ])
})

app.listen(3000, ()=>{
    console.log("Server is listing on 3000")
})