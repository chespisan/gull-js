/** Ejercicio 7 */

/**
 * Hacer programa tabla de multiplicar de un numero ingresado por pantalla
 */

 var numero = parseInt(prompt('Ingrese un numero a multiplicar'));

 for(var i = 0; i <= 10; i++) {
     console.log(`${numero} x ${i}  =  ${numero * i}`);
 }