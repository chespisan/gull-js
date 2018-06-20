/** DOM
 * Document
 * Object
 * Model
 */

 /** Fundamentos de DOM -> Nodos
  * Es todo el documento -> cualquier etiqueta etc en una página hace parte del dom - objetos etc
  * 
 */


// convertir nodeList a array
// Array.from(' lo que sea que vaya aqui adentro)

function cambiaColor(color) {
    caja.style.color = color;
}

// Conseguir elementos por su ID
 let caja = document.getElementById('caja');

  // acceder a sus propiedades, modificarlas etc
 caja.innerHTML = 'Hola soy la segunda caja';
 caja.className = 'caja';
 caja.style.background = 'green'
 console.log(caja)

 // conseguir elementos por su etiqueta
let todosDivs = document.getElementsByTagName('div');
console.log(todosDivs)

 // conseguir elementos por su clase
let capturarClases = document.querySelector('.caja');


 // EJEMPLO
 /** Crear elementos HTML con JavaScript
  *  document.CreateElement() -> con esto crearemos un elemento en el dom, como parametro enviamos la etiqueta nueva
  *  añadimos todos los atributos y demas que queremos para el nuevo elemento
  *  todo nuevo elemento tiene que ir dentro de un id padre
  *  Utilizamos 1 métodos para añadir "appendChild() y prepend()" -> se añade el método al id padre y como parametro enviamos el nuevo elemento
  *  appendChild() -> es  despues
  *  prepend() -> es antes    
  *  Ejemplo: ->
  */

    // capturamos el id padre
  let section = document.getElementById('mi-seccion');
    // Creamos una variable donde crearemos el  nuevo elemento 
  let parrafo = document.createElement('p');
    // añadimos  texto al nuevo elemento creado
  parrafo.textContent = 'Hola soy un parrafo creado desde JavaScript!';
    // añadimos dentro de la etiqueta del padre el nuevo elemento 
  section.appendChild(parrafo);
