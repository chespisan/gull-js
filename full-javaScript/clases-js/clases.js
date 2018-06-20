/** Clases JS */

let enviar = document.getElementById('enviar');
let lista = document.getElementById('lista');
let form = document.getElementById('form');
let nomForm = form.querySelector('#nombre').value
let emailForm = form.querySelector('#correo').value


class Usuario {
    constructor(nombre, apellido, correo, edad){
        this.nombre = nomForm
        this.apellido = apellido
        this.correo = emailForm
        this.edad = edad
    }

    // mètodos
    infoDatos() {
        
    }

    cambiarDatos(nombre){
        this.nombre = nombre
    }

    mostrarDatos(){
        console.log(`nombre: ${this.nombre}, edad: ${this.correo}`)
        let datoUsuario = document.createElement('p');
        datoUsuario.innerText = nomForm
        lista.appendChild(datoUsuario)
    }
}
// crear instancia
let usuario_1 = new Usuario();
enviar.addEventListener('click', (e) => {
    e.preventDefault()
    usuario_1.mostrarDatos()
})