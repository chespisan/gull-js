/** Clases: herencia
 * heredar los metodos y atributos de una clase padre
 */

 class Usuario {
     constructor(nombre,correo,edad){
        this.nombre = nombre
        this.correo = correo
        this.edad = edad
     }

     infoDatos() {
        console.log(`Nombre: ${this.nombre}, apellido: ${this.correo}`)
     }
 }

 let usuario = new Usuario('sergio','sergoo@mail.com', 26)
 console.log(usuario)

 // clases heredadas
 class Estudiante extends Usuario {
     constructor(nombre, correo, edad, codigo){
            super(nombre, correo, edad)
            this.codigo = codigo        
     }  
 }

 let estudiante = new Estudiante('alejandra','aleja@mail.com',20, '325778')
 console.log(estudiante)
 estudiante.infoDatos()