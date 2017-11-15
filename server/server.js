const path = require('path'); // the path-lib is build in, and dosen't require npm-download
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname + '/../public'); // the path-lib is an easy extention to direct to files in different directive 
const port = process.env.PORT || 5000; // our simple process path interchanges between the localport server and heroku server when it is online


var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath)); // we use a path-lib to direct the server to index.html page.


io.on('connection', (socket) => {
    console.log();
    console.log('new user connected');

    /*
    socket.emit('Message', {
     from: 'dummy2@hotmail.com',
     text: 'Hi you  got mail',
     CreateAt: '1234'

    });
    */
    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat-app',
        CreateAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user as join the chat',
        CreateAt: new Date().getTime()
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage: ', message)
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            CreateAt: new Date().getTime()
        });

        socket.broadcast.emit('newMessage', {
            from: message.from,
            text: message.text,
            CreateAt: new Date().getTime()
        });

    });

    socket.on('disconnect', () => {
        console.log();
        console.log('Client disconnected form the server');
    });

});



server.listen(port, () => {

    console.log('Server is runing on Port:' + port);
})

///console.log(__dirname + '/../public');  //dirname reference the current directiv, in this case it "server-folder"
//console.log(publicPath);