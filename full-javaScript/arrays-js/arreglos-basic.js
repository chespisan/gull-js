/** Arrays  js */


/** Arreglo basico
 *  es una colecciond e datos o un conjunto de datos, puede ser unico o diferentes tipos de datos
 */
let paises = ['colombia', 'españa','peru',10, true];
console.log(paises[2]);

// contar arreglos -> con el método lenght
console.log(paises.length);

/** Recorrer un arreglo con un for clasico
 *  podemos utilizar el ciclo o bucle for,
 *  para recorrer un arreglo en todas sus posiciones
 */
for(let i = 0; i < paises.length; i++) {
    console.log(`pais: ${paises[i]}`);
}

/** Recorrer un arreglo con el método forEach
 *  al igual que el for clasico el forEach podemos
 *  recorrer un arreglo, este método nos devuelve un callback
 *  que tiene 3 parametros:
 *  1. la variable que asignaremos a cada elemento iterado
 *  2. opcional: el indice de la posicion del elemento
 *  3. el arreglo como tal -> tambien es opcinal
 */
paises.forEach((el, index) => {
    console.log(el, index)
});

