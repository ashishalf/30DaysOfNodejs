//Read File

const fs = require('fs')

const filename  = 'sample.txt'

fs.readFile(filename, 'utf8', (err, data)=>{
    if(err){
        console.log("Error:", err)
        return
    }
    else{
        console.log("Data:", data)
    }
})