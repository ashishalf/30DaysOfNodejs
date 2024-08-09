const express = require('express')
const bodyparser = require('body-parser')
const app = express()

app.use(bodyparser.urlencoded({extended:false}))


app.post('/submit',(req,res)=>{
   const formData = req.body
   res.send(`Form Data: ${JSON.stringify(formData)}`) 
})

app.listen(3000, ()=>{
    console.log("Server is listing on 3000")
})