/** Ejercicios de javaScript */

/** programa:
 *  1. Pide 2 numeros
 *  2. indicar cual es mayor
 *  3. indicar cual es menor
 */

 // Solucion:
 var num_1 = prompt('Ingrese numero 1');
 var num_2 = prompt('Ingrese numero 2');

 if(num_1 > num_2) {
     alert(`El numero 1: ${num_1} es mayor al numero 2: ${num_2}`);
 } else {
    alert(`El numero 2: ${num_2} es mayor al numero 1: ${num_1}`);
 }