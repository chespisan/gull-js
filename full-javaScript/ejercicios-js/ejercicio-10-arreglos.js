/** Ejercicio #10 js arreglos */

/**
 * pida 6 numeros por pantalla y los meta en un array
 * mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
 * ordenarlo y mostrarlo 
 * invertir su orden y mostrarlo
 * mostrar cuandos elementos tiene el array
 * busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
 * (se valorara el uso de funciones)
 */

 let numeros = [];

 const ingresarNumero = () => {
    let numero = parseInt(prompt('Ingrese un número'));
    numeros.push(numero);
 }

 const mostrarNumeros = () => {
    console.log(numeros)
 }