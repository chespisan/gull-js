
/** Métodos para funciones texto */

// Métodos Transformacion de textos

let numero = 10;
let texto1 = 'hola mundo';
let texto2 = 'hola mMundo De Nuevo';

// método para convertir number a string
numero.toString();

// Método convertir mayuscula texto
texto1.toUpperCase();

// Método convertir minuscula
texto2.toLowerCase();

// Metodos calcular longitud de un texto
let nombre = '';
console.log(nombre.length);

/*********  buscar una palabra dentro de un string   ***********/

// con indexOf() -> encontraremos la primera coincidencia que le enviemos coomo parametro
var busqueda = texto1.indexOf('m');

// con lastIndexIf() -> nos devovlera la ultima coinciendica
var busqueda2 = texto1.lastIndexOf('d');

// con search() -> podemos buscar donde esta no importa si es d eprimeras o últimas
// con método match() -> nos devuelve una coleccion(array) de resultados que encuentre
// método charAt() -> como parametro podemos  indicarle una letra concreta de un string
// método includes("") -> nos devuelve una un boolean exacto del string que enviamos!


// método que nos deja remplazar un texto por otro
var busqueda3 = texto1.replace() // -> por parametro le enviamos 2argumentos, 1. el pàramertro qu equeremos cambiar, 2. por el nuevo

// método slice() -> nos permite separar un strring, aparartir del caracter que se escoja () -> le enviamos la posicion donde quiera que iniciemos
var buscaqueda = texto2.slice();

// método split() -> nos devuelve o nos transofrma una cadena(string) a un arreglo, podemos separar por lo que queramos cada palabra  
var busqueda2 = texto1.split();
var busqueda2 = texto2.split(" - ");

// método trim -> recortar los espacios por delante y por detras que tiene el string


