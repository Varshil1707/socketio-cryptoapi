const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const cors = require('cors');
const app = express()
const port = 4500
const server = http.createServer(app)
const io = socketIo(server)

app.get('/',((req,res)=>{
    res.send("It's working")
}))

io.on("connection",(()=>{
    console.log("Connection occur")
}))

server.listen(port,console.log(`server is working on http://localhost:${port}`))