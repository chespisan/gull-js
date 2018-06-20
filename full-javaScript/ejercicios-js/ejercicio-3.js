/** Ejercicio #3 */

/** 
 * Realiza un script que pida cadenas de texto
 * hasta que se pulse “cancelar”.
 *  Al salir con “cancelar” deben mostrarse todas las cadenas     concatenadas con un guión -.
 * 
 */

 const c = console.log;
 let cadenas;
 let contador = '';



while(cadenas != 'cancelar') {
    cadenas = prompt('ingrese una nueva palabra');
    contador += cadenas + ', '
}
 
 c(contador);