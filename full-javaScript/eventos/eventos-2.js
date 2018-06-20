/** EVENTOS 
 * click -> evento cuando se hace un click en un elemento
 * mouseleave -> evento cuando sales de un elemento
 * mouseenter -> evento cuando pasas dentero de un elemento
 * contextmenu -> evento cuando se hace click derecho
 * 
*/

// Event Click
const boton = document.getElementById('boton');

// escuchador de events
const events = () => {

    // event click
    boton.addEventListener('click', miClick);

}
events();

// funcion del evento click
function miClick(e){
    console.log('me hicieron click')
    console.log(e.target.textContent)
}


// eventos del teclado
const input = document.getElementById('nombre');

// escuchador de events
const events2 = () => {

    // event keyup -> cuando soltamos una tecla
    input.addEventListener('keyup', miInput);

}
events2();

function miInput(e){

}