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

/*
    --- client emission ---
    socket.emit('SendMessage', {message: 'hello'});

    useEffect(() => {
        socket.on('recieveMessage', (data) => {
            alert(data.message)
        })
    }, [socket])

    --- server listener ---
    io.on('SendMessage', (data) => {
        console.log(data);
        socket.broadcast.emit('recieveMessage');
    })
*/

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on('send_message', (data) => {
        socket.broadcast.emit('recieve_message', data);
    })
})

server.listen(3001, () => {
    console.log('Server is running on port: 3001');
})