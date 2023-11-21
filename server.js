const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('Client connected');

    // Send the video to the client
    socket.on('video-frame', (base64Data) => {
        socket.emit('video-frame', base64Data);
    });

    socket.on('disconnect', () => console.log('Client disconnected'));
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
