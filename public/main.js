$(function() {
    // socket iniciado
    var socket = io()

    // variables
    var message = $('#chat-message')
    var chat = $('#chat')

    function pintarMsgEntrante(data) {
        chat.append(`hola ${data} <br/>`)
    }

    message.focus()

    $('#message-box').submit(function(e) {
        e.preventDefault()
            // chat.append(message.val() + '<br/>');
        socket.emit('mensaje-del-cliente', message.val())
        console.log(message.val());
        message.val('')

    })

    socket.on('mensaje-del-servidor', (data) => {
        //console.log(data);
        pintarMsgEntrante(data);

    })
})