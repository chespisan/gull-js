/** Ejercicio 2 */

/* 
 * Utilizando un biucle, mostrar la suma y la media de los numeros introducidos hasta introducir
 * un numero negativo y ahi mostrar el resultado
 */

 var suma = 0;
 var contador = 0;

 do{
     var numero = parseInt(prompt('Introducir un numero hasta que metas un numero negativo'));

     if(isNaN(numero)){
        numero = 0;
     } else if(numero >= 0){
         suma = suma + numero
         contador ++
     }

     console.log(suma);
     console.log(contador)
 }while(numero >= 0)