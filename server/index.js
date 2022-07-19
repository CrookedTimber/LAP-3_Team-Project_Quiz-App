const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ['GET', 'POST'],
    },
});

io.on("connection", (socket) => {
    console.log('user connected: ', socket.id);

    socket.on('join_room', (data) => {
        socket.join(data);
        console.log('room created: ', data)
    })

    socket.on('send_message', (data) => {
        console.log(`${data.message} ${data.socketID}`);
        socket.to(data.room).emit('recieve_message', data);
    })
})

server.listen(3001, () => {
    console.log('Server is running on port: 3001');
})