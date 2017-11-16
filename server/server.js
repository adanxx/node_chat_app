const path = require('path'); // the path-lib is build in, and dosen't require npm-download
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname + '/../public'); // the path-lib is an easy extention to direct to files in different directive 
const port = process.env.PORT || 5000; // our simple process path interchanges between the localport server and heroku server when it is online

const { generateMessage } = require('./utils/message');

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
    socket.emit('newMessage', generateMessage('Admin :', 'Welcome to the chat-App'));

    socket.broadcast.emit('newMessage', generateMessage('Admin :', 'New User joined the chat'));

    socket.on('createMessage', (message, callback)=> {
        console.log('createMessage: ', message)
        io.emit('newMessage', generateMessage(message.from, message.text));
        /*
        socket.broadcast.emit('newMessage', {
            from: message.from,
            text: message.text,
            CreateAt: new Date().getTime()
        });
        */
        callback();
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