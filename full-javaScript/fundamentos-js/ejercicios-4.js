/** ejercicios 4 */

/**
 * Mostrar todos los numeros impares que hay entre
 * 2 mnumeros introducidos por el usuario
 */

 var numero_1 =  parseInt(prompt('Introducir numero 1'))

 var numero_2 =  parseInt(prompt('Introducir numero 2'))

 for(var i = numero_1; i< numero_2; i++){
     if(i % 2 != 0) {
        console.log(`Es un numero impar ${i}`);
     }
 }