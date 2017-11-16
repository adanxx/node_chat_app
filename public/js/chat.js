var socket = io();

function scrollToBottom() {
    // selecter
    var messages = jQuery('#messages');
    var newMessage = messages.children('li:last-child')
    //Height
    var clientHeight = messages.prop('clientHeight');
    var scrollTop = messages.prop('scrollTop');
    var scrollHeight = messages.prop('scrollHeight');

    var newMessageHeight = newMessage.innerHeight();
    var lastMessage = newMessage.prev().innerHeight();


    if (clientHeight + scrollTop + newMessageHeight + lastMessage >= scrollHeight) {
        //console.log('Should scroll');
        messages.scrollTop(scrollHeight);
    }
}



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
    //console.log('New Message:', message);

    var formatTime = moment(message.createAt).format('h:m a');
    var template = jQuery('#message-template').html();
    var html = Mustache.render(template, {
        text: message.text,
        from: message.from,
        createAt: formatTime
    });

    jQuery('#messages').append(html);
    scrollToBottom();
    /*
    var formatTime = moment(message.createAt).format('h:m a'); 
    var li = jQuery('<li></li>');
    li.text(message.from+' '+ formatTime+' - '+message.text);
    jQuery('#messages').append(li);
    */
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

    var messageTextBox = jQuery('[name=message]');

    socket.emit('createMessage', {
        from: 'User',
        text: messageTextBox.val()
    }, function () {
        messageTextBox.val('');
    });
});

