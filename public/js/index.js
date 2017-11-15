var socket = io();

socket.on('connect', function () {
    console.log('connected to the server');

   

    /*
    socket.emit('newMessage', {
        from: 'JohnDoe@hotmail.com',
        text: 'Hi from John Doe'
    });
    */
});

socket.on('disconnect', function () {
    console.log('Disconnected form the server')
});


socket.on('newMessage', function (message) {
    console.log('New Message:', message);
});