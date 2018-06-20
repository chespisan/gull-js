/** EVENTOS JS 
 * Eventos mouse
*/

// evento mouse
let boton = document.querySelector('#boton');

// Escuchador de eventos
const escuchadorEvent = () => {
    // método evento click
    boton.addEventListener('click', cambiarColor);

    // método evento mouseover -> cuando pasas encima de un elemento
    // método evento mouseout -> cuando se sale de un elemento
    boton.addEventListener('mouseover', cambiarColor2)
}
escuchadorEvent()

// funcion para activar evento click
function cambiarColor() {
    console.log('Cambiar color de fondo del boton')
    boton.style.background = 'red';
};

// funcion para activar evento de mouse over
function cambiarColor2() {
    console.log('Cambiar color de fondo del boton')
    boton.style.background = 'green';
};


/**************  EVENTOS DEL TECLADO ****************** 
 * Evento focus -> cuando entramos a un campu input
 * Evento blur -> cuando salimos de un campo input
 * Evento keydown -> cuando se pulsa una tecla
 * Evento keypress -> cuando se presiona una tecla
 * Evento keyup -> cuando se suelta una tecla
*/

// variables que captura el input del form
let input = document.querySelector('#nombre');

// function escuchadora de eventos
function escuchadorEvent2() {

    // evento focus -> 
    input.addEventListener('focus', () => {
        console.log('activado evento focus dentro del input')
    })

    // evento blur
    input.addEventListener('blur', () => {
        console.log('activado evento blur cuando salimos del input')
    })

    // evento keydown
    input.addEventListener('keydown', (e) => {
        console.log('activado evento keydown se pulso una tecla');
        
    })

    // evento keypress
    input.addEventListener('keypress', (e) => {
        console.log('activado evento keypress cuando se presiona una tecla');
        console.log(e.key)
    })

    // evento keyup
    input.addEventListener('keyup', () => {
        console.log('activado evento keyup cuando se suelta una tecla')
    })
    
}
escuchadorEvent2();

/**************  EVENTOS DEL LOADER ****************** 
 * Evento loader -> cuando carga todo el dom
 * window.addEventListener('load', ()=> console.log('Esto es un ejemplo'))
*/