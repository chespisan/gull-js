/** Ejercicoio #6 */

/**
 * Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor
 */

 let nombre1 = prompt('ingrese nombre');
 let edad1 = parseInt(prompt('ingrese la edad'));

 let nombre2 = prompt('ingrese nombre');
 let edad2 = parseInt(prompt('ingrese la edad'));

 let nombre3 = prompt('ingrese nombre');
 let edad3 = parseInt(prompt('ingrese la edad'));

 let mayor = Math.max(edad1, edad2, edad3);

 if(mayor == edad1){
     console.log(`El mayor de los 3 es ${nombre1}`);
 } else if(mayor == edad2) {
    console.log(`El mayor de los 3 es ${nombre2}`);
 } else if(mayor == edad3) {
    console.log(`El mayor de los 3 es ${nombre3}`);
 }