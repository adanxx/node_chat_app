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

   var li = jQuery('<li></li>');
   li.text(message.from+' '+message.text);

   jQuery('#messages').append(li);
});

/*
socket.emit('createMessage', {
    from: 'Frank Castle',
    text: 'Hi from the punisher'
}, function (data) {
    console.log('Got it', data);
});
*/

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function (){

    });
});

