/** Objetos 
 * Estructura de datos
*/

// Ejemplos:
let persona = {
    nombre: 'sergio',
    edad: 20,
    sexo: 'masculino',
    casado: false,
    infoDatos()  {
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años `)
    }
}
persona.infoDatos();

//  quitar propiedades de un objeto -> delete persona.nombre
// agregar propiedad de un objeto -> perro['nombre'] = 'jose'

// Métodos para acceder a los prototipos de los objetos
//Object.getPrototypeOf('')
// in -> una propiedad que devuelve true o false si existe o no 

// metodos para los objetos
/**
 * Object.entries() -> devuelve cm array 
 * Object.keys() devuelve el  objeto con todas su spropiedads
 * Object.values() -> devuelve el valor ocn sus indioces
 */