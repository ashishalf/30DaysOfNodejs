//TCP Server

const net = require('net')

const server = net.createServer((socket)=>{
    socket.on('data',(data)=>{
socket.write(data)
    })
})
server.listen(3000, ()=>{
    console.log("TCP Server Listing on 3000")
})