






//comando para establecer la coneccion

var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Perdimos coneccion con el servidor');
});

socket.on('estadoActual', function (res) {
    label.text(res.actual);
});

$('button').on('click', function () {
    socket.emit('siguienteTicket', null, function (siguienteTicket) {
        label.text(siguienteTicket);
    });
})