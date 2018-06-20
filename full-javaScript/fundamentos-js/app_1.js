/** fundamentos de js  */

/**
 * Variables
 * -variables globales "VAR" -> las globales se podran llamar en todo el scope del DOM
 * -variables de bloque "LET" -> la snuevas desde el standar es6 serviar mas que todo para llamarlas dentro de un bloque
 * -variables tipo constante "CONST" -> nuevas desde es6 son para declarar variables qu enunca van a cambiar
 */

 var enTodo = 'Se podra llamar en cualquier lado'
 let bloque = 'Si se declara dentro de un bloque {} solo existiran en ese bloque'
 const constantes = 'una vez que se declara no tendra siempre ese valor y no podran ser modificadas, existen excepciones'
 
/**
 * Tipo de datos
 * string -> cadena
 * number -> numericos
 * boolean -> verdadero o falso
 */
 
 // string
 let nombre = 'sergio',
    numero = 20,
    boolean = true


// Estructuras de control condiconales
if(nombre){
    console.log('es un tipo string');
} else if(numero == number) {
    console.log('es un tipo numerico');
} else {
    console.log('es un tipo verdadero o falso');
}


// Estructuras de control iteradores y bucles
let miArreglo = [1,2,3,4,5,6,7,8,];

for(let i = 0; i<miArreglo.length; i++) {
    console.log('mi arreglo: '+ i);
}

// Alertas y ventanas
alert('esto es una ventana emergente');
confirm('ventana de confirmacion')
prompt('ventana para ingresar texto')
