// Aca el juego seleccion un numero al azar para que adivine
let numeroAzar = Math.floor(Math.random()*100) + 1
let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

const boton = document.getElementById("boton");
const campoTexto = document.getElementById("numeroEntrada");

//Para al hacer ENTER, se accione el boton
campoTexto.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // Simula hacer clic en el botón
        boton.click();
    }
});

// Esta accion se va a ejecutar cuando se toque el boton chequear
function chequearResultado() {
    intentos ++
    intento.textContent = intentos
    
     let numeroIngresado = parseInt(numeroEntrada.value)

     if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor, introduce un numero valido entre 1 y 100';
        mensaje.style.color = 'red';
        return
     }

     if(numeroIngresado === numeroAzar) {
        mensaje.textContent = '¡Felicitaciones! ¡Haz adivinado el numero!';
        mensaje.style.color = 'green';
        numeroEntrada.ariaDisabled = true;
    
    } else if(numeroIngresado < numeroAzar) {
        mensaje.textContent = '¡MAS ALTO! El numero es mayor al que dijiste';
        mensaje.style.color = 'red';
    } else{
        mensaje.textContent = ' ¡MAS BAJO! El numero es menor al que dijiste';
        mensaje.style.color = 'red';
        return
    }


}