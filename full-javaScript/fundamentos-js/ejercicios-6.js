/** ejercicio 6 */

/**
 * hacer un programa que nos indique si un numero es para o impar
 * ventana prompt que nos pida un numero
 * validar si es un numero
 */

 var numero = parseInt(prompt('Ingrese numero'));
 
 while(isNaN(numero)){
    var numero = parseInt(prompt('Ingrese un numero por favor"'));
 }


for(var i = 0; i < numero; i++){
    if(i % 2 == 0 ){
        console.log(`El numero: ${i} es par`);
    } else {
        console.log(`El numero: ${i} es impar`);
    }
}


