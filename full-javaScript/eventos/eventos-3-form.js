/** EVENTOS DE FORMULARIO JS 
 * focus -> cuando se selecciona el campo
 * blur -> cuando se sale del camoo seleccionado, despues del focus
 * reset() -> resetea todo el formulario
 * change -> para cambiar un tipo de input, como checkbox
*/

const form = document.getElementById('form');
const rememberPassword = document.getElementById('remember-password');

form.addEventListener('submit', () => {
    console.log('ha guardado sus datos')
});

rememberPassword.addEventListener('change', e => {
    if(e.target.checked) {
        console.log('El usuario ha solicitado recordar su contraseña')
    } else {
        console.log('El usuario NO ha solicitado recordar su contraseña')

    }
})


/*****************  EVENTOS DEL DOM Y DEL NAVEGADOR  ******************* 
 * DOMContentloaded -> evento que espera que cargue todo el dom y despues se ejecuta
 * load -> carga todo la pagina
 * evento scroll -> cuando se hace scroll devuelve
 * evento resize, ocurre cuando redimensiinamos la pantalla
 * */

/*****************  EVENTOS De multimedia  *******************
 * Métodos para las etiquetas video de html
 * play() -> método o evento que se puede ejecutar para iniciar a ejecutar un video
 * puse() -> método que hace lo contrario de play, pausa el video
 */

 /*****************  PROPAGANCION DE EVENTOS  ******************* 
  * Los eventos click suben hacia el padre se propagan hacia fuera
  * e.stopPropagation() -> podemos cancelr  la propagacion en los padres si la necesitamos
  * 
 */

 // ejemplo: div dentro d eun div dentro de otro div
 document.querySelectorAll('div').forEach(el => {
     el.addEventListener('click',(e) => {
         console.log('Hiciste click en el div ${e.target.id}')
     })
 })

 /*****************  DELEGACION DE EVENTOS ******************* 
  * capturando el  elemento padre, podemos acceder a los elementos hijos y saber 
  * cual hacemos click
 */

// ejemplo gallery
const gallery = document.getElementById('gallery');

gallery.addEventListener('click', (e) => {
    const t = e.target
    const images = Array.from(gallery.querySelectorAll('img'));
    const i = images.indexOf(t)
    console.log(`Hiciste click en la imagen ${i + 1}`);

})