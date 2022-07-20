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
        console.log('room joined: ', data)
    })

    socket.on('send_message', (data) => {
        console.log("message sent from: ", data.room)
        socket.to(data.room).emit('recieve_message', data.message);
    })

    socket.on('host_start_game', (data) => {
        console.log("Host has started game: ", data.roomNum)
        socket.to(data.roomNum).emit('recieve_host_start', {hostStart: true});
    })

})

server.listen(3001, () => {
    console.log('Server is running on port: 3001');
})