const path = require('path'); // the path-lib is build in, and dosen't require npm-download
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname + '/../public'); // the path-lib is an easy extention to direct to files in different directive 
const port = process.env.PORT || 3000; // our simple process path interchanges between the localport server and heroku server when it is online


var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath)); // we use a path-lib to direct the server to index.html page.


io.on('connection', (socket) => {
    console.log();
    console.log('new user connected');

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