/** Ejercicio DOM, Evenetos y funciones
 *  1. formulario campos: Nombre, Apellidos, Edad
    2. Boton de enviar formulario
    3. Mostrar datos por pantalla
    4. Tener  un boton que al darle click nos muesttre los datos actuales de formulario
 */

 // capturamos los id del DOM
 const form = document.getElementById('form');
 const enviar = document.getElementById('enviar');
 const mostrar = document.getElementById('mostrar');
 const listaDatos = document.getElementById('mostrar-datos');

 // function of events
 const eventListener = () => {
    enviar.addEventListener('click', guardarDatos);
    mostrar.addEventListener('click', crearElement)
 }
eventListener();

// function
function guardarDatos(e) {
  let datos = form.querySelectorAll('input');
    for (let dato of datos){
        console.log(dato.value);
    }
}

function crearElement(){
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    
    li.innerHTML = `
    <li>Su nombre es ${nombre.value}</li>
    <li>Su apellido es ${apellidos.value}</li>
    <li>Su edad es ${edad.value}</li>
    `;
    
    ul.appendChild(li);
    listaDatos.appendChild(ul);
}
