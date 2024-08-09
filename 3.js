//Write file
const fs = require('fs')

fs.writeFile('sample.txt', 'Hello Kachu', (err)=>{
    if(err){
        console.log('Error:', err)
    }
    else{
        console.log('File Created.')
    }
})