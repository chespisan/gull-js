/** CSSOM - REFERENTE A DOM EN CSS 
 *  style -> manipular los  estilus de css de un elemento desde js
 *  matchMedia -> nos evalua una query con js
 *  getComputedStyle() -> todos los estilos calculados del elemento0000
 *  getBoundingClientReact().top,.left.y.left etc -> nos puede dar elbvalor exacto de un objeto, elemento html del DOM
*/

// ejemplo con matchMedia crear mediaquery con js
const titulo = document.getElementById('titulo');
const descripcion = document.getElementById('descripcion');
const mediumBp = matchMedia('(min-width: 640px) and (orientation: portrait)');

const changeColor = () => {
    if(mediumBp.matches) {
        document.body.style.background = 'red';
    } else {
        document.body.style.background = 'yellow'
    }
}

addEventListener('resize', changeColor)

// saber la smedidas exactas con, naturalWidth y naturalHeight