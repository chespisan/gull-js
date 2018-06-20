/** Funciones anonimas (Callbacks) */

/**
 * No es mas que una funcion que no tiene nombre
 * se puede guardar dentro de una variable
 */

 // anonima
 var pelicula = function(nombre) {
    return `La pelicula es ${nombre}`;
 };

 pelicula('Avengers');

 // callback ->  funcion que se ejecuta dentro de otra, se pasa como funcion como parametro

 // callback
 function sumame(num1, num2, sumaYmuestra, sumaPorDos){
     var sumar = num1 + num2;

     sumaYmuestra(sumar);
     sumaPorDos(sumar);
 };

 sumame(5, 7, function(dato) {
    console.log(`la suma es: ${dato}`)
 }, function(dato) {
     console.log(`la suma por dos: ${dato*2}`)
 })

 // closures => funcion que retorna otra funcion
 function sumar(x) {
     return function (y) {
         return x + y
     }
 }
 sumar(5)(10);

 // fiunciones autoinvocadas

 const funcAuto = (() => console.log('soy una funcion que se auto ejecuta'));
 