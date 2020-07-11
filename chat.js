var socket = io.connect('http://localhost:3000');

var mesaj = document.getElementById('mesaj');
var baslik = document.getElementById('baslik');
var btn = document.getElementById('gonder');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');


btn.addEventListener('click', function() {

    socket.emit('chat', {
        mesaj: mesaj.value,
        //baslik: baslik.value
    });
    mesaj.vallue = '';
});

socket.on('chat', function(data){
    output.innerHTML += '<p><stong>'+data.mesaj+'</stong></p>';
    feedback.innerhtml='';

})

mesaj.addEventListener('keypress',function () {
    socket.emit('yaziyor',baslik.value);
})

socket.on('yaziyor', function(data) {
    feedback.innerHTML += '<p><em>'+data+'yazıyor...:</em></p>';

})