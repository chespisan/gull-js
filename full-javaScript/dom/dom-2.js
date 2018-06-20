/** Ejercicios DOM 2 */

// getAttribute -> nos devuelve un atributo(id,class,value, etc) del elemento seleccionado
// ejemplo:
let miSeccion = document.getElementById('mi-seccion');
console.log(miSeccion.getAttribute('id'));

//setAttribute -> Define un atributo
// ejemplo:
let h1 = document.querySelector('h1');
h1.setAttribute('id','title')
console.log(h1)


/** classList -> nos devuelve una lista de clases,  trae sus métodos
 *  add() -> nos sirve para agregar ima clase o clases
 *  remove() -> sirve para remover una clase
 *  toggle() -> sirve para añadir o quitar una clase dependiendo si esta la tiene o no
 */


 /** CONTENIDO métodos
  *  textContent -> nos devuelve  solo el texto del elemento html, no importa sus subniveles
  *  innerHTML -> nos devuelve el texto con las etiquetas html etc que este en ese elemento
  *  outerHTML -> nos devuelve toda la etiqueta html
 */

 /** CREAR ELEMENTOS 
  * siempre para añadir un nuevo elemento, se tiene que agregar dentro de un elemento ya existente
  * document.createElement() -> crear un nuevo elemento en el DOM, como parametro se envia la etiqueta del elemento nuevo
  * appendChild() -> añadir al elemento ya existente, como parametro enviamos el nuevo elemento creado
  * a este elemento creado se le pueden añadir todo tipo de atributos y propiedades
 */