/** DOM TRAVERSING */

// obtenemos el padre 
const parent = document.getElementById('parent');
console.log(parent)

// obtener los hijos con childNodes -> nos devolvera todos los nodos hasta con espacio, mejor utilizar children
console.log(parent.childNodes)

// obtener hijos con children
console.log(parent.children);

// obtemner primer hijo con firstElementChild
console.log(parent.firstElementChild)

// obtemner último hijo con lastElementChild
console.log(parent.lastElementChild)


// obtener id hermano 
const granson = document.getElementById('granson')

// obtener hermanos - proximo nextElementSibling
console.log(granson.nextElementSibling);

// obtener hermano anterior - previusElementSibling
console.log(granson.previousElementSibling)