/** funciones REST y SPREAD */

/** funciones rest
 *  son las funciones que pasando un operador especial al inicio de los parametros podemos
 *  ingresar una cantidad x de argumentos y nos devolvera un arreglo con todos los argumentos
 */

 const funcRest = (...numeros) => console.log(numeros);
 funcRest(1,2,3,4,4,5,6,7,8,9,0);

 /** Funciones spread
  *  al igual que las rest, la unica diferencia es que el operador "..."
  *  ira al final de los parametros
  */

//   const funcSpread = (numeros...) => {

//   }