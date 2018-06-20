/** Operaciones y métodos para los arreglos */

const c = console.log;

let lenguajes = ['php','java','javascript','c++'];
c(lenguajes);

// método para agregar elementos aun arreglo
lenguajes.push('c#');
c(lenguajes)

// método para eliminar ultimo item ingresado a un arreglo
lenguajes.pop();
c(lenguajes);

// método para agregar item al inicio de un arreglo
lenguajes.unshift('ruby');
c(lenguajes);

// método para para eliminar el primer item de un arreglo
lenguajes.shift();
c(lenguajes);

// método para ordenar un arreglo de números, ordenar un arreglo de letras, solo sera un simple sort()
let numeros = [4,7,8,1,5,6,3,5];
numeros.sort((a,b) => {
    return a - b;
})
c(numeros);

// método que devuelve al revez un arreglo
lenguajes.reverse();
c(lenguajes);


// método forEach para recorrer un arreglo
lenguajes.forEach((el) => {
    c(el)
});

// metodo para recorrer un arreglo,  de forma diferente
c('***************** for in ************');
for(let lenguaje in lenguajes){
    c(lenguajes[lenguaje])
};

// métpdp for of recorrer un arreglo
for (let lenguaje of lenguajes){
    c(lenguaje)
}

// método para convertir un arreglo en un string(cadena), como parametro podemos indicarle el lelemento que queremos para dividirlo 
let lang = lenguajes.join(" y ");
c(lang)

// método para crear un nuevo arreglo, recibe dos parametors, 1. inicia, el segundo termina, los que queden por fuera seran eliminados
let lang2 = lenguajes.slice(1,2)
c(lang2);


// mñétodo para volver un string(cadena) a arreglo
let cadena = 'hola, soy el bienvenido'
let cadenaArray = cadena.split(", ");
c(cadenaArray)


// métopdo para hacer bsuqueda en un arreglo
let busqueda = lenguajes.find((el) => {
    return el == 'php'
})
c(busqueda);

// método para buscar el index del elelemtno
let busquedaIndex = lenguajes.findIndex((el) => el ==  'c++');
c(busquedaIndex)

// método some, sirve para hacer busqueda con condiciones dentro de un arreglo
let precios = [12,33,57,2,78,35];
let precio = precios.some(precio => precio < 80);
c(precio)


// método splice(), sirve para agregar o quitar elementos de un arreglo, podemos pasarle 3 parametros
// 1. posicion en la que inicia(si es que se va agregar)o (se elimina) , 2.cuantos elementos son eliminados, 3. los que agregamos 

/************  métodos map, filter y reduce   *************** 
 * estos métodos crean un nuevo arreglo apartir del arreglo ya existente
*/

// método map para recorrer un arreglo, es mucho mejor, crea un nuevo arreglo a doiferencia de map
lenguajes.map((el) => {
    c(el)
});

// método para filtrar  items en una rreglo, filtra dependiendo de la condicion
c('filter')
let filtrar = lenguajes.filter((el) => {
    console.log(el != 'php')
})

let filtarNumeros = [2,5,7,4,2,];

let filter2 = filtarNumeros.filter(el => el < 5)
c(filter2)