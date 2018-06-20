//** Ejercicio #1 js  */

//Pide la edad y si es mayor de 18 años indica que ya puede conducir
const c = console.log
let edad = parseInt(prompt('Igrese su edad para saber si puede conducir'));



if( edad >= 18) {
    c(`El usuario tiene ${edad} años de edad y puede conducir`);    
} else {
    c(`El usuario tiene ${edad} años de edad y es muy pequeño para conducir`)
}