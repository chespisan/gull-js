/** Ejercicio #2 */

/**Pide una nota (número). Muestra la calificación según la nota:

0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente */

const c = console.log
let nota = parseInt(prompt('Ingrese su nota final'));

if(nota >= 9 ) {
    c('Sobresaliente')
} else if(nota >= 7) {
    c('notable')
} else if(nota >= 6) {
    c('bien')
} else if (nota >= 5){
    c('suficiente')
} else if(nota >= 3) {
    c('insuficiente')
} else if (nota < 3) {
    c('Muy deficiente')
}

