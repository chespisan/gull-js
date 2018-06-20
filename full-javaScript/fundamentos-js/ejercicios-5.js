/** Ejercicio 5 */

/**
 * Introducir todos los numeros divisores de un numero ingresados por pantalla
 */

 var numero = parseInt(prompt('Ingrese un numero'));

 for(var i = 0; i < numero; i++){
     if(numero % i == 0) {
         console.log('El numero divisor es: ' + i);
     }
 }
