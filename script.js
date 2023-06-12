const semaforo = ['images/rojo.png', 'images/amarillo.png', 'images/verde.png'];

let i = 0;

setInterval(cambiarImg, 1500)

function cambiarImg() {    
    document.getElementById('imagen').src = semaforo[i % semaforo.length];
    i++
}