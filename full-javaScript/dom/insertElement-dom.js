/** Insertar elementos en el dom */

// insertBefore(nuevoElement, elemento existente ) -> recibe dos parametros, 1 muevo elemento, 2 el elemento viejo, se posicionara despues del elemento viejo

// podria remplazar al appendChild() -> podriamos usarlo si queremos situarlo en un lado especifrico

// Ejercicio con insertBefore() -> supopnga,ps temngamos varios post y queremos introducir un nuevo elemento en el medio de todos los pòst

// obtenemos el post -> articulos
const post = document.getElementById('post');
const ad = document.createElement('div');
ad.id = 'publicida'
ad.textContent = 'publicidad'


// funcion  que calcule el medio de los post
const getMiddleChild = (element) => {
    const childs = element.children
    const l = childs.length
    const i = Math.floor(l / 2);

    return childs[i]
}
console.log(getMiddleChild(post))
const middleChild = getMiddleChild(post)

// insertamos el elemento nuevo ocn insertBefore()
post.insertBefore(ad, middleChild)