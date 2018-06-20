/** Ejercicio 3 js  */
 
/** 
 * Hcer un programa que muestre todos los numeros entre dos numeros
 * introducidos por el usuario
 */

 var numero_1 = parseInt(prompt('Introduce el nuemro 1'));
 var numero_2 = parseInt(prompt('Introduce el nuemro 2'));

 document.write(`Los numeros que estan entre el numero ${numero_1} y numero ${numero_2}  son: `);

 for(var i = numero_1; i< numero_2; i++) {
     document.write(`${i},`);
 };