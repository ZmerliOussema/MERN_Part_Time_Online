const express = require('express');
const app = express();
const cors = require('cors');
const socket = require('socket.io');
const port = 8000;
app.use(cors());

const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

// to initialize the socket, we need to invoke a new instance
//     of socket.io and pass it our express server instance
// We must also include a configuration settings object to prevent CORS errors
const io = socket(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

io.on("connection", socket => {
    console.log('Nice to meet you ' + socket.id);

    socket.on('disconnect', () => {
        console.log(`User of Id ${socket.id} has disconnected`)
    })
    
    socket.on("event_from_client", data => {
        console.log(data)
    });

    let data = 'Hello from the server !!!'
    socket.broadcast.emit("Welcome", data);
});



