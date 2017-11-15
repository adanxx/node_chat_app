var socket = io();

socket.on('connect', function () {
    console.log('connected to the server');

    socket.emit('newMessage', {
        to: 'JohnDoe@hotmail.com',
        text: 'Hi from John Doe'
    });

});

socket.on('disconnect', function () {
    console.log('Disconnected form the server')
});


socket.on('Message', function (message) {
    console.log('New Message', message);
});