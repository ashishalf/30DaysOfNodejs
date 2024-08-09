//Print all names of files 
const fs = require('fs')

fs.readdir('.', (err, files)=>{
    if(err){
        console.log(err)
    }
    files.forEach((file)=>{
        console.log(file)
    })
})