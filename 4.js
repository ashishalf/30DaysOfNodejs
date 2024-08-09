//Http server
const http = require('http')

const PORT = 3000

const server = http.createServer((req, res)=>{
    const url = req.url
    if(url === '/'){
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('Hello worlds!')}
    else if(url === '/summer'){
        res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('Hot 🥵')
    }
})

server.listen(PORT, ()=>{
    console.log(`Server running on: ${PORT}`)
})