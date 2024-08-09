//Json File handling

const fs = require('fs')
const { parse } = require('path')

fs.readFile('data.json', 'utf8', (err, data)=>{
    if(err){
        console.log(err)
        return
    }

    let jsonData

    try {

        jsonData = JSON.parse(data)
        console.log(jsonData)
        
    } catch (error) {
        console.log(error)
        return
    }

    jsonData.newKey = 'newValue'

    const jsonString = JSON.stringify(jsonData, null, 2)

    fs.writeFile('data.json', jsonString, (err)=>{
        console.log(err)
        return
    })


})